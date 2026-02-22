import { motion } from "framer-motion";
import { Database, Workflow, ClipboardCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Business Analysis",
    icon: ClipboardCheck,
    skills: ["Requirement Analysis", "SRS, CR, BRD", "Process Flow Diagram", "Gap Analysis", "Stakeholder Engagement", "Vendor Management"],
  },
  {
    title: "Technical Skills",
    icon: Database,
    skills: ["Microsoft Excel / Google Sheet", "Draw.io / Lucidchart / Adobe XD", "Redmine / PMS / Trello", "HTML / CSS (Basic)", "SQL (Basic)"],
  },
  {
    title: "Soft Skills",
    icon: Workflow,
    skills: ["Problem-Solving & Critical Thinking", "Communication & Documentation", "Team Collaboration & Leadership", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated data flow decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
        <motion.path
          d="M0,50% Q25%,30% 50%,50% T100%,50%"
          fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Skills</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 hover-glow h-full relative overflow-hidden"
              >
                {/* Background icon */}
                <cat.icon className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/[0.04]" />

                <h3 className="font-heading font-semibold text-xl mb-6 gradient-text">{cat.title}</h3>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.05 }}
                        className="w-2 h-2 rounded-full bg-accent shrink-0"
                      />
                      <span className="text-sm text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
