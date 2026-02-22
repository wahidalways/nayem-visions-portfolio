import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, User, FileSearch, GitBranch, BarChart3, Database, ClipboardList, Workflow } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";

const ParticleField = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.12 + 0.04,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, p.opacity, 0], y: [0, -50] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const FloatingBAIcons = () => {
  const icons = [
    { Icon: FileSearch, x: "8%", y: "18%", delay: 0 },
    { Icon: GitBranch, x: "88%", y: "25%", delay: 1.5 },
    { Icon: BarChart3, x: "12%", y: "72%", delay: 3 },
    { Icon: Database, x: "82%", y: "68%", delay: 2 },
    { Icon: ClipboardList, x: "50%", y: "12%", delay: 4 },
    { Icon: Workflow, x: "75%", y: "85%", delay: 1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.07, 0.03, 0.07], y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10 + i * 2, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

const DataFlowSVG = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]">
    {/* Horizontal data flow lines */}
    <motion.path
      d="M0,30% Q25%,20% 50%,30% T100%,30%"
      fill="none" stroke="hsl(var(--primary))" strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M0,70% Q30%,60% 60%,70% T100%,65%"
      fill="none" stroke="hsl(var(--accent))" strokeWidth="0.8"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Flowing dots */}
    <motion.circle
      r="3" fill="hsl(var(--primary))"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0], cx: ["0%", "100%"], cy: ["30%", "30%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      r="2" fill="hsl(var(--accent))"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.2, 0], cx: ["100%", "0%"], cy: ["70%", "65%"] }}
      transition={{ duration: 8, delay: 3, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const GridOverlay = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  </div>
);

const TypingEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, 25);
      return () => clearInterval(timer);
    }, delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay, text]);

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-text-bottom"
        />
      )}
    </span>
  );
};

const StatusBadges = () => {
  const badges = [
    { label: "Available for hire", color: "bg-accent" },
    { label: "3+ Years Experience", color: "bg-primary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4"
    >
      {badges.map((badge, i) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.15 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${badge.color} animate-pulse`} />
          {badge.label}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const [imgError, setImgError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero-light)" }}
    >
      {/* Parallax background layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]"
        />
        <ParticleField />
        <GridOverlay />
        <FloatingBAIcons />
        <DataFlowSVG />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10 pt-24 md:pt-0"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground">
                <Briefcase className="w-4 h-4 text-accent" />
                Technical Business Analyst
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Md. Wahiduzzaman</span>
              <br />
              <span className="gradient-text">Nayem</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground max-w-xl mb-6 leading-relaxed mx-auto md:mx-0"
            >
              <TypingEffect
                text="Bridging Business Needs with Technical Solutions — specializing in requirement analysis, comprehensive documentation, and stakeholder management."
                delay={0.6}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-3 mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-xl font-heading font-semibold text-sm glass hover-lift cursor-pointer"
              >
                View Projects
              </motion.button>
            </motion.div>

            <StatusBadges />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground mt-4"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" /> Dhaka, Bangladesh
              </span>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 shrink-0"
          >
            <div className="relative">
              {/* Orbiting ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
              />
              {/* Accent ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dotted border-accent/10"
              />
              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
              </motion.div>

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Md. Wahiduzzaman Nayem"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <User className="w-14 h-14 md:w-18 md:h-18 text-primary/40" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
