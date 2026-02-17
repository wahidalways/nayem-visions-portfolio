import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { toast } from "sonner";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();
  const activeSectionRef = useRef("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          let closest = "";
          let closestDist = Infinity;
          visibleSections.forEach((_, id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const dist = Math.abs(rect.top);
              if (dist < closestDist) {
                closestDist = dist;
                closest = id;
              }
            }
          });
          if (closest && closest !== activeSectionRef.current) {
            activeSectionRef.current = closest;
            setActiveSection(closest);
          }
        }
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: [0, 0.25, 0.5] }
    );

    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const id = href.replace("#", "");
      activeSectionRef.current = id;
      setActiveSection(id);
    }
  }, []);

  const handleDownload = () => {
    toast.success("Download started!", { description: "Your resume is being downloaded." });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between px-5 md:px-6 transition-all duration-500 rounded-full ${
          scrolled
            ? "glass py-2.5 shadow-lg"
            : "py-3 bg-background/60 backdrop-blur-md border border-border/50"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-0.5 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center"
          >
            {/* Logo mark */}
            <div className="relative w-8 h-8 mr-2 rounded-lg overflow-hidden flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <span className="font-heading text-sm font-bold text-primary-foreground leading-none">W</span>
            </div>
            <span className="font-heading text-lg font-bold text-foreground tracking-tight">
              Nayem
            </span>
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-heading text-lg font-bold text-accent"
            >
              .
            </motion.span>
          </motion.div>
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <motion.button
                key={item.label}
                onClick={() => handleNav(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xs font-medium transition-all cursor-pointer relative px-3 py-1.5 rounded-full ${
                  isActive
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
          <div className="w-px h-5 bg-border mx-2" />
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Wahiduzzaman_Nayem_CV.pdf"
            download
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity ml-1"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 cursor-pointer"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden glass mx-auto max-w-6xl mt-2 rounded-2xl p-5 flex flex-col gap-2"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleNav(item.href)}
                className={`text-left text-sm font-medium transition-all cursor-pointer flex items-center gap-2 px-3 py-2 rounded-xl ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="border-t border-border pt-3 mt-1">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Wahiduzzaman_Nayem_CV.pdf"
                download
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity w-fit"
              >
                <Download className="w-4 h-4" /> Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
