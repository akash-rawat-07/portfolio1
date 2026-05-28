import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
  ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon: Icon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]";

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
