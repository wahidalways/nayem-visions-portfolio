import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, FileText, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, label: "Requirement Analysis", desc: "Translating complex business needs into clear functional specifications" },
  { icon: FileText, label: "Documentation", desc: "SRS, BRD, CR, User Stories & Process Flow Diagrams" },
  { icon: Users, label: "Stakeholder Management", desc: "Collaborating with cross-functional teams for timely delivery" },
  { icon: TrendingUp, label: "Process Optimization", desc: "Reducing documentation rework by 25% across projects" },
];

const domains = ["E-commerce", "HRIS & Payroll", "ERP & Logistics", "Process Automation", "Administration & ATS", "CRM"];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">About Me</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Professional Summary</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed text-lg text-center"
          >
            Dedicated Business Analyst specializing in requirement analysis, comprehensive documentation (SRS, BRD, CR), and effective stakeholder management. I excel at translating complex business needs into clear, functional specifications and collaborating with cross-functional teams to ensure timely and budget-compliant project delivery. My contributions span across e-commerce, HRIS, ERP, and logistics platforms, where I have significantly improved UAT cycles, minimized documentation errors, and enhanced overall project clarity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              className="glass rounded-2xl p-6 hover-glow cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-heading font-semibold text-lg mb-4">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((d, i) => (
              <motion.span
                key={d}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground cursor-default hover-border-accent"
              >
                {d}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
