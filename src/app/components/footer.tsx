import { Link } from "react-router";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Mallika
            </h3>
            <p className="text-sm md:text-base text-muted">
              UX/UI Designer crafting thoughtful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base mb-4 uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/work"
                  className="text-sm md:text-base text-muted hover:text-foreground transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base text-muted hover:text-foreground transition-colors"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/* Design System link removed */}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm md:text-base mb-4 uppercase tracking-wider font-mono">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mallika-vaidyanuvatti-00a0bb144"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:preaw.akt@gmail.com"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted">
            © {currentYear} Mallika. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-muted">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}