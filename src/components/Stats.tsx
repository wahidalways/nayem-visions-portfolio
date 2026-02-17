import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FileText, Users, CheckCircle, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience" },
  { icon: FileText, value: 25, suffix: "%", label: "Rework Reduced" },
  { icon: CheckCircle, value: 10, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 20, suffix: "+", label: "Stakeholders Managed" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
              className="glass rounded-2xl p-6 text-center hover-glow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
