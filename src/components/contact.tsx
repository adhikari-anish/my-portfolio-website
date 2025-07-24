"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-20 flex flex-col items-center text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Interested in collaborating or just want to say hi? Reach out via email or connect with me on LinkedIn or GitHub.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 text-white text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="mailto:aa.anish.adhikari@gmail.com"
          target="_blank"
          aria-label="Email"
          className="hover:text-gray-400 transition"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/adhikari-anish"
          target="_blank"
          aria-label="GitHub"
          className="hover:text-gray-400 transition"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/anish-adhikari"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-gray-400 transition"
        >
          <Linkedin />
        </a>
      </motion.div>
    </section>
  );
}
