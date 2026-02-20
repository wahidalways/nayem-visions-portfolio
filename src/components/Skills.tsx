import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Business Analysis",
    skills: ["Requirement Analysis", "SRS, CR, BRD", "Process Flow Diagram", "Gap Analysis", "Stakeholder Engagement", "Vendor Management"],
  },
  {
    title: "Technical Skills",
    skills: ["Microsoft Excel / Google Sheet", "Draw.io / Lucidchart / Adobe XD", "Redmine / PMS / Trello", "HTML / CSS (Basic)", "SQL (Basic)"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving & Critical Thinking", "Communication & Documentation", "Team Collaboration & Leadership", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Skills</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 hover-glow h-full"
              >
                <h3 className="font-heading font-semibold text-xl mb-6 gradient-text">{cat.title}</h3>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
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
