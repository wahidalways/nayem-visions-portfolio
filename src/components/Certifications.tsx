import { motion } from "framer-motion";
import { Trophy, Award, Globe, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certifications = [
  { title: "NASA Space Apps Challenge", subtitle: "Global Finalist", year: "2023", icon: Globe, highlight: true },
  { title: "NASA Space Apps Challenge", subtitle: "Regional Champion", year: "2022", icon: Trophy, highlight: true },
  { title: "USAID Youth Social Leadership Program", subtitle: "Certificate of Completion", year: "2020", icon: Users, highlight: false },
  { title: "HRDI Conflict Management & Charismatic Feedback", subtitle: "Professional Certificate", year: "2020", icon: Award, highlight: false },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Recognition</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Certifications & Awards</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title + cert.year} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass rounded-2xl p-6 hover-glow relative overflow-hidden h-full ${cert.highlight ? "gradient-border" : ""}`}
              >
                {cert.highlight && (
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wider">
                    Featured
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cert.highlight ? "bg-accent/10" : "bg-primary/10"}`}>
                    <cert.icon className={`w-6 h-6 ${cert.highlight ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.subtitle}</p>
                    <p className="text-xs text-accent font-medium">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
