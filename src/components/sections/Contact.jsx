import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { personal } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something remarkable"
          description="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                  <p className="text-white group-hover:text-indigo-300 transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                  <p className="text-white">{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm text-zinc-500 mb-4">Connect elsewhere</p>
              <SocialLinks size="large" />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 md:p-10"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                className="w-full sm:w-auto"
                icon={Send}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
