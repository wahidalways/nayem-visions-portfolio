import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Skills</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              className="glass rounded-2xl p-8 hover-glow"
            >
              <h3 className="font-heading font-semibold text-xl mb-6 gradient-text">{cat.title}</h3>
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-accent shrink-0"
                    />
                    <span className="text-sm text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
