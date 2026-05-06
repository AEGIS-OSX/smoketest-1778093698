export default function Footer() {
  return (
    <footer className="bg-surface text-primary py-8 mt-12">
      <div className="container">
        <div className="grid gap-8 mb-8">
          <div>
            <h3 className="text-primary font-semibold mb-4">PawWalk</h3>
            <p className="text-secondary text-sm max-w-sm">
              Flexible, on-demand dog walking for urban dog owners who value reliability and peace of mind.
            </p>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-accent-primary text-sm hover:text-accent-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-primary text-sm hover:text-accent-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-3 text-sm">Contact</h4>
            <p className="text-secondary text-sm">
              <a href="mailto:hello@pawwalk.com" className="text-accent-primary hover:text-accent-secondary transition-colors">
                hello@pawwalk.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-dark-border pt-6">
          <p className="text-secondary text-xs text-center">
            © 2026 PawWalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
