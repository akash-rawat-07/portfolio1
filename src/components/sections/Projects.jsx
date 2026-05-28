import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";

function ProjectCard({ project, className = "" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c0e] ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-700`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

      <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[280px] justify-end">
        {project.featured && (
          <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-indigo-300/90 font-medium">
            Featured
          </span>
        )}

        <div className="mt-auto">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-indigo-100 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-2 md:line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 text-sm text-white hover:text-indigo-300 transition-colors"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" /> Source
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured && p.size === "large");
  const others = projects.filter((p) => p.id !== featured?.id);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="Case studies and products that showcase craft, impact, and technical depth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {featured && (
            <ProjectCard project={featured} className="md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[360px] lg:min-h-[480px]" />
          )}
          {others.slice(0, 1).map((p) => (
            <ProjectCard key={p.id} project={p} className="md:col-span-2 lg:col-span-2" />
          ))}
          {others.slice(1).map((p) => (
            <ProjectCard key={p.id} project={p} className="lg:col-span-1" />
          ))}
        </div>
      </div>
    </section>
  );
}
