import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, User } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero-light)" }}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 animate-float blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 animate-float blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground">
                <Briefcase className="w-4 h-4 text-accent" />
                Technical Business Analyst
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5"
            >
              <span className="text-foreground">Md. Wahiduzzaman</span>
              <br />
              <span className="gradient-text">Nayem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Bridging Business Needs with Technical Solutions — specializing in requirement analysis, comprehensive documentation, and stakeholder management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-xl font-heading font-semibold text-sm glass hover-lift cursor-pointer"
              >
                View Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" /> Dhaka, Bangladesh
              </span>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 shrink-0"
          >
            <div className="relative">
              {/* Gradient glow behind */}
              <div className="absolute inset-0 -m-4 rounded-full blur-2xl bg-primary/10" />
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Md. Wahiduzzaman Nayem"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <User className="w-16 h-16 md:w-20 md:h-20 text-primary/40" />
                  </div>
                )}
              </div>

              {/* Decorative dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-6"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-accent" />
                <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="absolute left-0 top-1/2 w-1.5 h-1.5 rounded-full bg-accent/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
