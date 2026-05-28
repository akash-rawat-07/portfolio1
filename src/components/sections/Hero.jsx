import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { personal } from "../../data/portfolio";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

function ProfileVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20 blur-2xl" />
      <div className="gradient-border relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl sm:text-8xl font-bold gradient-text opacity-90">
            {personal.firstName.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 shimmer opacity-30" />
      </div>
      <motion.div
        className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0c0e]/90 backdrop-blur-xl px-4 py-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.6 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs text-zinc-300">{personal.availability}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const typedRole = useTypingEffect(personal.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs text-zinc-400 tracking-wide">
                {personal.location} · {personal.availability}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.25 }}
              className="text-sm md:text-base text-zinc-500 mb-4 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-white"
            >
              {personal.name.split(" ")[0]}
              <br />
              <span className="gradient-text">{personal.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.35 }}
              className="mt-6 h-8 md:h-10"
            >
              <p className="text-lg md:text-xl text-zinc-400">
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  {typedRole}
                  <span className="animate-pulse text-indigo-400">|</span>
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.4 }}
              className="mt-6 text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-12"
            >
              <SocialLinks size="large" />
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfileVisual />
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
