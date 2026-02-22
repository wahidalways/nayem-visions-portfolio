import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FlowchartAnimationProps {
  className?: string;
}

const FlowchartAnimation = ({ className = "" }: FlowchartAnimationProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    { x: 50, y: 20, label: "Requirements" },
    { x: 50, y: 50, label: "Analysis" },
    { x: 20, y: 80, label: "SRS" },
    { x: 80, y: 80, label: "BRD" },
  ];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
        {/* Lines connecting nodes */}
        <motion.line
          x1="50" y1="28" x2="50" y2="42"
          stroke="hsl(var(--primary))" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.line
          x1="42" y1="58" x2="28" y2="72"
          stroke="hsl(var(--accent))" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.line
          x1="58" y1="58" x2="72" y2="72"
          stroke="hsl(var(--accent))" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          >
            <rect
              x={node.x - 12} y={node.y - 6} width="24" height="12" rx="2"
              fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4"
            />
            <text x={node.x} y={node.y + 1.5} textAnchor="middle" fontSize="3"
              fill="hsl(var(--primary))" fontFamily="system-ui"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default FlowchartAnimation;
