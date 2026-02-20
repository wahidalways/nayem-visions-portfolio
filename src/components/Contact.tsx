import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Contact</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <motion.a whileHover={{ y: -3 }} href="mailto:nayemwahid05@gmail.com" className="flex items-center gap-4 glass rounded-xl p-5 hover-glow block">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-sm">nayemwahid05@gmail.com</p>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 glass rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/nayemwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 glass rounded-xl p-4 hover-glow text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://twitter.com/mrbrainaxes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 glass rounded-xl p-4 hover-glow text-sm font-medium"
              >
                <Twitter className="w-4 h-4 text-primary" /> X (Twitter)
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <form
              className="glass rounded-2xl p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:nayemwahid05@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name</label>
                <input id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" placeholder="Tell me about your project..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
