"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Smart File Sharing System",
    description:
      "A secure blockchain-based system for sharing files with AES encryption, access control, and key approval via smart contracts.",
    github: "https://github.com/anishadhikari/smart-file-sharing",
    live: "https://fileguard.vercel.app/",
    tech: ["Next.js", "Flask", "Web3.py", "Ethereum"],
  },
  {
    title: "Hand Sign Language Translator",
    description:
      "Mobile app using computer vision and deep learning to translate hand signs into English speech and text in real-time.",
    github: "https://github.com/anishadhikari/hand-sign-translator",
    live: "",
    tech: ["React Native", "TensorFlow", "OpenCV"],
  },
    {
    title: "Hand Sign Language Translator",
    description:
      "Mobile app using computer vision and deep learning to translate hand signs into English speech and text in real-time.",
    github: "https://github.com/anishadhikari/hand-sign-translator",
    live: "",
    tech: ["React Native", "TensorFlow", "OpenCV"],
  },
    {
    title: "Hand Sign Language Translator",
    description:
      "Mobile app using computer vision and deep learning to translate hand signs into English speech and text in real-time.",
    github: "https://github.com/anishadhikari/hand-sign-translator",
    live: "",
    tech: ["React Native", "TensorFlow", "OpenCV"],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-800 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
