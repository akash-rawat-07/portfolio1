import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Journey"
          title="Professional experience"
          description="A timeline of roles, growth, and meaningful contributions."
        />

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent"
            aria-hidden
          />

          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.year}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex gap-8 pb-16 last:pb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full bg-indigo-500/20 animate-ping" />
                <span className="relative h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-[#050505]" />
              </div>

              <div className="ml-10 md:ml-0 md:w-1/2">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                  <time className="text-xs font-medium tracking-wider text-indigo-400/90 uppercase">
                    {item.year}
                  </time>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-zinc-500">{item.company}</p>
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((a) => (
                      <li key={a} className="text-sm text-zinc-500 flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
