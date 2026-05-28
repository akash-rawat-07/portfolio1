import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "center" }) {
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
        ? "text-right items-end"
        : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 mb-16 md:mb-20 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${alignClass}`}
    >
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400/90">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
