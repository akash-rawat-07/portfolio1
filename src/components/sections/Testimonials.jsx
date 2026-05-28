import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What people say"
          description="Kind words from collaborators, clients, and leaders I've worked with."
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-10 md:p-14 text-center"
            >
              <Quote className="w-10 h-10 text-indigo-500/30 mx-auto mb-8" aria-hidden />
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light italic">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-10">
                <cite className="not-italic">
                  <p className="font-display font-semibold text-white">{current.author}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {current.role} · {current.company}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-indigo-500" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
