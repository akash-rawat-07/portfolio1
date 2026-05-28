import { ArrowUp } from "lucide-react";
import { personal } from "../../data/portfolio";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050505]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-white">
              {personal.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Crafting digital experiences with precision.
            </p>
          </div>

          <SocialLinks />

          <a
            href="#"
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 group-hover:border-white/20 group-hover:bg-white/5 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {year} {personal.name}. All rights reserved.</p>
          <p>Designed & built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
