import { motion } from "framer-motion";
import { Target, Users, FileText, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BABackground from "./BABackground";
import FlowchartAnimation from "./FlowchartAnimation";

const highlights = [
  { icon: Target, label: "Requirement Analysis", desc: "Translating complex business needs into clear functional specifications" },
  { icon: FileText, label: "Documentation", desc: "SRS, BRD, CR, User Stories & Process Flow Diagrams" },
  { icon: Users, label: "Stakeholder Management", desc: "Collaborating with cross-functional teams for timely delivery" },
  { icon: TrendingUp, label: "Process Optimization", desc: "Reducing documentation rework by 25% across projects" },
];

const domains = ["E-commerce", "HRIS & Payroll", "ERP & Logistics", "Process Automation", "Administration & ATS", "CRM"];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <BABackground density="light" />
      <div className="container mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">About Me</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Professional Summary</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg text-center">
            Dedicated Business Analyst specializing in requirement analysis, comprehensive documentation (SRS, BRD, CR), and effective stakeholder management. I excel at translating complex business needs into clear, functional specifications and collaborating with cross-functional teams to ensure timely and budget-compliant project delivery. My contributions span across e-commerce, HRIS, ERP, and logistics platforms, where I have significantly improved UAT cycles, minimized documentation errors, and enhanced overall project clarity.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover-glow cursor-default h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Flowchart decoration */}
        <div className="max-w-xs mx-auto mb-12">
          <FlowchartAnimation />
        </div>

        <ScrollReveal delay={0.2} className="text-center">
          <h3 className="font-heading font-semibold text-lg mb-4">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((d) => (
              <motion.span
                key={d}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground cursor-default hover-border-accent"
              >
                {d}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
