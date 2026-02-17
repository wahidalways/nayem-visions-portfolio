import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out effect: slow down as we approach 100
        const remaining = 100 - p;
        return p + Math.max(1, remaining * 0.08);
      });
    }, 30);

    const exitTimer = setTimeout(() => setExiting(true), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background animated shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </motion.div>

          <div className="flex flex-col items-center gap-12 relative z-10">
            {/* SVG Logo with drawing animation */}
            <div className="relative">
              {/* Outer hexagonal ring */}
              <motion.svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                className="absolute -inset-5"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                <motion.circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="58"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </motion.svg>

              {/* Main logo container */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative w-[130px] h-[130px] flex items-center justify-center"
              >
                {/* Gradient background circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="absolute inset-3 rounded-full"
                  style={{ background: "var(--gradient-primary)", opacity: 0.08 }}
                />

                {/* Logo text with stagger */}
                <div className="flex items-baseline">
                  {["M", "W", "N"].map((letter, i) => (
                    <motion.span
                      key={letter}
                      initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.4 + i * 0.12,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                      }}
                      className="font-heading text-4xl md:text-5xl font-bold gradient-text"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.85,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    className="font-heading text-3xl md:text-4xl font-bold text-accent ml-0.5"
                  >
                    .
                  </motion.span>
                </div>
              </motion.div>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-3"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-[11px] text-muted-foreground tracking-[0.35em] uppercase font-heading"
            >
              Portfolio
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-full h-[2px] rounded-full bg-border overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.2 }}
                className="text-[10px] text-muted-foreground font-heading tabular-nums"
              >
                {Math.round(progress)}%
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
