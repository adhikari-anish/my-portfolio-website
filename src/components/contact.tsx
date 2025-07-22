"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-20 text-center flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 text-base sm:text-lg max-w-xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Interested in working together or just want to say hi? Feel free to reach out.
      </motion.p>

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
