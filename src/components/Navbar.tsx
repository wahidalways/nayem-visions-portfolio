import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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

  // Improved scrollspy - track which sections are visible and pick the topmost
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

        // Pick the section closest to the top of the viewport
        if (visibleSections.size > 0) {
          let closest = "";
          let closestDist = Infinity;
          visibleSections.forEach((top, id) => {
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

    // Small delay to ensure sections are rendered
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
      // Immediately set active for instant feedback
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-0 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="font-heading text-2xl font-bold gradient-text transition-transform group-hover:scale-105">MWN</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="font-heading text-2xl font-bold text-accent"
          >
            .
          </motion.span>
        </a>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <div className="w-px h-5 bg-border mx-1" />
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer" aria-label="Toggle theme">
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.div>
          </button>
          <a
            href="/Wahiduzzaman_Nayem_CV.pdf"
            download
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Tablet & Mobile toggle */}
        <div className="flex xl:hidden items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer" aria-label="Toggle theme">
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 cursor-pointer" aria-label="Menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden glass mx-4 mt-2 rounded-xl p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className={`text-left text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.href.replace("#", "") && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
              {item.label}
            </button>
          ))}
          <div className="border-t border-border pt-3 mt-1">
            <a
              href="/Wahiduzzaman_Nayem_CV.pdf"
              download
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity w-fit"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
