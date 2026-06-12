import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/button";
import { SectionHeader } from "../components/section-header";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Get in Touch"
                title="Let's Work Together"
                description="Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly."
                className="mb-12 md:mb-16"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h3
                  className="text-xl md:text-2xl mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hello@alexrivers.design"
                        className="text-sm md:text-base hover:text-muted transition-colors"
                      >
                        preaw.akt@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-sm md:text-base hover:text-muted transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-1">
                        Location
                      </p>
                      <p className="text-sm md:text-base">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h4
                  className="text-lg md:text-xl mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Availability
                </h4>
                <p className="text-sm md:text-base text-muted mb-4">
                  I'm currently available for freelance projects and full-time
                  opportunities.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm text-muted">
                    Open to new projects
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm md:text-base mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm md:text-base mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-base mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent/20 border border-accent rounded-lg p-4 text-sm md:text-base"
                  >
                    Thank you! I'll get back to you as soon as possible.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-destructive/20 border border-destructive rounded-lg p-4 text-sm md:text-base"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            className="mb-8 md:mb-12"
          />
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-border pb-6 md:pb-8"
            >
              <h4
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What's your typical project timeline?
              </h4>
              <p className="text-sm md:text-base text-muted">
                It varies by project scope, but most projects range from 4-12
                weeks. During our initial conversation, I'll provide a detailed
                timeline based on your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-b border-border pb-6 md:pb-8"
            >
              <h4
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Do you work with startups?
              </h4>
              <p className="text-sm md:text-base text-muted">
                Absolutely! I love working with startups and have experience
                helping early-stage companies establish their design foundation
                and product strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-b border-border pb-6 md:pb-8"
            >
              <h4
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What's your design process?
              </h4>
              <p className="text-sm md:text-base text-muted">
                I follow a user-centered design process: Research & Discovery →
                Ideation & Wireframing → Visual Design → Prototyping → Testing &
                Iteration. Each phase includes collaboration and feedback loops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Do you offer ongoing support?
              </h4>
              <p className="text-sm md:text-base text-muted">
                Yes! I offer retainer packages for ongoing design support,
                design system maintenance, and product evolution. Let's discuss
                what works best for your team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
