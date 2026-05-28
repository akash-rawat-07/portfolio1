import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl ${hover ? "transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/[0.1]" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
