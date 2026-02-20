import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Business Analyst",
    company: "TechnoNext Software Limited, US Bangla Airlines",
    duration: "Jan 2026 – Present",
    points: [
      "Leading the development and optimization of HRIS to streamline workforce management and data accuracy.",
      "Spearheading process automation initiatives, reducing manual workflows and increasing operational efficiency.",
      "Managing end-to-end requirement lifecycles for complex enterprise solutions.",
      "Conducting detailed workflow analysis to identify bottlenecks and propose scalable automated solutions.",
    ],
  },
  {
    title: "Junior Business Analyst",
    company: "TechnoNext Software Limited, US Bangla Airlines",
    duration: "June 2024 – Dec 2025",
    points: [
      "Collaborated with stakeholders to gather requirements, perform gap analysis, and design solutions.",
      "Prepared SRS, CR, user stories, and process flow diagrams for CartUp, ERP, Payroll & HRIS.",
      "Reduced documentation rework by 25% through accurate SRS and CR preparation.",
      "Coordinated with Development, QA, UI/UX, and Operations teams to ensure project alignment.",
    ],
  },
  {
    title: "Intern Business Analyst",
    company: "TechnoNext Software Limited, US Bangla Airlines",
    duration: "Feb 2024 – May 2024",
    points: [
      "Assisted in requirement gathering and process analysis for Foodi and Meditrip platforms.",
      "Contributed to documentation (SRS, CR, process flows), improving workflow clarity.",
      "Supported UAT and end-user training, ensuring smooth solution adoption.",
      "Gained hands-on experience in end-to-end project delivery with cross-functional teams.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Career</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Work Experience</h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.title + exp.duration}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.15}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div
                className="absolute top-6 left-[11px] md:left-auto w-2.5 h-2.5 rounded-full bg-primary hidden md:block"
                style={i % 2 === 0 ? { right: "-5px" } : { left: "-5px" }}
              />

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover-glow ml-10 md:ml-0"
              >
                <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">{exp.title}</h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
