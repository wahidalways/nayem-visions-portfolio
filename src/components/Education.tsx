import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  { degree: "Master of Business Administration (Professional)", institution: "Bangladesh University of Professionals (BUP)", year: "Sep 2025 – Ongoing", gpa: "N/A" },
  { degree: "B.Sc. in Software Engineering (Major: Data Science)", institution: "Daffodil International University", year: "Jan 2020 – Feb 2024", gpa: "3.73 / 4.00" },
  { degree: "HSC", institution: "Cumilla Shikkha Board Govt. Model College", year: "2017 – 2019", gpa: "4.75 / 5.00" },
  { degree: "SSC", institution: "A. Malek Institution", year: "2012 – 2017", gpa: "5.00 / 5.00" },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Education</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Academic Background</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover-glow h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-xs text-accent font-medium">{edu.year}</p>
                    {edu.gpa !== "N/A" && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span className="text-sm font-medium text-foreground">CGPA: {edu.gpa}</span>
                      </div>
                    )}
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

export default Education;
