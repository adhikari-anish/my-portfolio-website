"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20 flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I’m Anish Adhikari — a full-stack developer based in Australia 🇦🇺 with a background in web
        development, cybersecurity, and software engineering. I enjoy solving problems, building scalable systems,
        and continuously learning new technologies. Outside of code, you&apos;ll probably find me exploring design ideas,
        learning about human behavior, or sipping coffee while debugging life.
      </motion.p>
    </section>
  );
}
