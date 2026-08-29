import { motion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";
import { SectionHeader } from "../components/section-header";

export function Contact() {
  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Get in touch"
              title="Let's work together"
              description="Have a project in mind? I'd love to hear about it. Reach out through any of the channels below."
              className="text-center flex flex-col items-center mb-12 md:mb-16"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-foreground flex items-center justify-center">
                <Mail size={20} className="text-foreground" />
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Email
                </h3>
                <p className="text-sm md:text-base text-muted">
                  preaw.akt@gmail.com
                </p>
              </div>
              <a
                href="mailto:preaw.akt@gmail.com"
                aria-label="Email Praew"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full border border-foreground text-foreground text-sm md:text-base hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Email Me
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-card border border-border rounded-lg p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-foreground flex items-center justify-center">
                <Linkedin size={20} className="text-foreground" />
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  LinkedIn
                </h3>
                <p className="text-sm md:text-base text-muted">
                  Mallika Vaidyanuvatti
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/mallika-vaidyanuvatti-00a0bb144"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in new tab"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full border border-foreground text-foreground text-sm md:text-base hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
