import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";
import { skills } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const categories = [
  { key: "frontend", label: "Frontend", icon: Code2, items: skills.frontend },
  { key: "backend", label: "Backend", icon: Server, items: skills.backend },
  { key: "tools", label: "Tools & DevOps", icon: Wrench, items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Technologies I work with"
          description="A curated stack focused on performance, scalability, and exceptional UX."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="p-8 h-full group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(99,102,241,0.25)",
                        }}
                        className="inline-flex px-3.5 py-1.5 rounded-lg text-sm text-zinc-300 bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 hover:text-white transition-all duration-300 cursor-default"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + i * 0.04 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
