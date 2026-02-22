import { motion } from "framer-motion";
import { FileText, GitBranch, BarChart3, Database, Workflow, ClipboardCheck } from "lucide-react";
import { useMemo } from "react";

const icons = [FileText, GitBranch, BarChart3, Database, Workflow, ClipboardCheck];

interface BABackgroundProps {
  density?: "light" | "medium";
  className?: string;
}

const BABackground = ({ density = "light", className = "" }: BABackgroundProps) => {
  const items = useMemo(() => {
    const count = density === "light" ? 4 : 6;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      x: 10 + (i * 80 / count) + Math.random() * 10,
      y: 15 + Math.random() * 65,
      delay: i * 1.5,
      duration: 10 + Math.random() * 6,
    }));
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map(({ id, Icon, x, y, delay, duration }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.06, 0.03, 0.06], y: [0, -12, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </motion.div>
      ))}

      {/* Subtle connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.line
          x1="15%" y1="25%" x2="45%" y2="55%"
          stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="55%" y1="20%" x2="85%" y2="60%"
          stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 14, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default BABackground;
