import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { personal } from "../../data/portfolio";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  dribbble: FaDribbble,
};

export default function SocialLinks({ size = "default" }) {
  const sizeClass = size === "large" ? "w-11 h-11" : "w-9 h-9";
  const iconSize = size === "large" ? "w-5 h-5" : "w-4 h-4";

  return (
    <div className="flex items-center gap-3">
      {personal.socials.map((social, i) => {
        const Icon = iconMap[social.icon] || FaGithub;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`${sizeClass} flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300`}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 + i * 0.08 }}
          >
            <Icon className={iconSize} />
          </motion.a>
        );
      })}
    </div>
  );
}
