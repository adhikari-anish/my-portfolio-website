"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "Python", "Flask", "Tailwind CSS",
  "TypeScript", "Web3.js", "MongoDB", "PostgreSQL", "Docker", "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white px-6 py-20 text-center flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
