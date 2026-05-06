/**
 * Mailchimp API integration for PawWalk early access list.
 * Sends subscriber data to the pawwalk_early_access audience.
 */

interface MailchimpSubscriber {
  email_address: string;
  status: "subscribed" | "pending";
  merge_fields?: {
    FNAME?: string;
  };
  tags?: string[];
}

interface MailchimpResponse {
  id: string;
  email_address: string;
  status: string;
  [key: string]: unknown;
}

export async function addToMailchimp(
  email: string,
  firstName?: string,
  tags: string[] = []
): Promise<{ success: boolean; id?: string; error?: string }> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !serverPrefix) {
    console.error("Missing Mailchimp environment variables");
    return {
      success: false,
      error: "Mailchimp configuration missing",
    };
  }

  const subscriber: MailchimpSubscriber = {
    email_address: email,
    status: "pending",
    merge_fields: firstName ? { FNAME: firstName } : undefined,
    tags: tags.length > 0 ? tags : undefined,
  };

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
            "base64"
          )}`,
        },
        body: JSON.stringify(subscriber),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Mailchimp error:", errorData);

      // Handle duplicate email gracefully
      if (response.status === 400 && errorData.title === "Member Exists") {
        return {
          success: true,
          id: errorData.id || email,
        };
      }

      return {
        success: false,
        error: errorData.detail || "Failed to add subscriber",
      };
    }

    const data: MailchimpResponse = await response.json();
    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    console.error("Mailchimp request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Prepare backup webhook payload for Zapier or Google Sheets integration.
 * This ensures redundancy if Mailchimp fails.
 */
export function prepareBackupPayload(
  email: string,
  firstName: string | undefined,
  consent: boolean,
  timestamp: string,
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string
): Record<string, unknown> {
  return {
    email,
    firstName: firstName || "",
    consent,
    timestamp,
    source: "pawwalk_landing",
    utmSource: utmSource || "",
    utmMedium: utmMedium || "",
    utmCampaign: utmCampaign || "",
  };
}

/**
 * Send backup payload to Zapier webhook for Google Sheets integration.
 */
export async function sendToBackupWebhook(
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Zapier webhook URL not configured; skipping backup");
    return { success: true }; // Non-blocking
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Backup webhook failed:", response.statusText);
      return {
        success: false,
        error: response.statusText,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Backup webhook request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
