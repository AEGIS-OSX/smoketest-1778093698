import { NextRequest, NextResponse } from "next/server";
import { addToMailchimp, prepareBackupPayload, sendToBackupWebhook } from "@/lib/mailchimp";

interface WaitlistRequest {
  email: string;
  firstName?: string;
  consent: boolean;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
  id?: string;
}

/**
 * Validate email format.
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize and validate first name.
 */
function sanitizeName(name: string | undefined): string | undefined {
  if (!name) return undefined;
  const trimmed = name.trim();
  if (trimmed.length === 0) return undefined;
  if (trimmed.length > 100) return trimmed.substring(0, 100);
  return trimmed;
}

/**
 * POST /api/waitlist
 * Accept form submission with email, first name, consent, and UTM params.
 * Send to Mailchimp and backup webhook.
 */
export async function POST(request: NextRequest): Promise<NextResponse<WaitlistResponse>> {
  try {
    const body: WaitlistRequest = await request.json();

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { success: false, error: "Consent is required" },
        { status: 400 }
      );
    }

    const firstName = sanitizeName(body.firstName);
    const timestamp = new Date().toISOString();

    // Add to Mailchimp
    const mailchimpResult = await addToMailchimp(body.email, firstName, [
      "early_access",
      "landing_page",
    ]);

    if (!mailchimpResult.success) {
      console.error("Mailchimp submission failed:", mailchimpResult.error);
      return NextResponse.json(
        { success: false, error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Prepare and send backup payload
    const backupPayload = prepareBackupPayload(
      body.email,
      firstName,
      body.consent,
      timestamp,
      body.utmSource,
      body.utmMedium,
      body.utmCampaign
    );

    await sendToBackupWebhook(backupPayload);

    // Log submission (for debugging and audit)
    console.log("Waitlist submission:", {
      email: body.email,
      firstName: firstName || "not provided",
      timestamp,
      utmSource: body.utmSource || "direct",
      utmMedium: body.utmMedium || "direct",
      utmCampaign: body.utmCampaign || "direct",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to the PawWalk waitlist!",
        id: mailchimpResult.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/waitlist
 * Handle CORS preflight requests.
 */
export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json({}, { status: 200 });
}
