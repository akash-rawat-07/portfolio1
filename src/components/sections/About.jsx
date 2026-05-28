import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building with purpose & precision"
          description="A developer who cares deeply about craft, clarity, and impact."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <GlassCard className="p-8 md:p-10 h-full">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                {about.intro}
              </p>
              <p className="mt-6 text-base text-zinc-500 leading-relaxed">
                {about.story}
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {about.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              {about.highlights.map((item, i) => (
                <GlassCard
                  key={item.label}
                  className="p-6 flex flex-col justify-center items-center text-center"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="font-display text-3xl md:text-4xl font-bold gradient-text"
                  >
                    {item.value}
                  </motion.span>
                  <span className="mt-2 text-xs text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </span>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
