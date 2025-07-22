"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/me.jpeg"
          alt="Anish Adhikari"
          width={160}
          height={160}
          className="rounded-full border-4 border-white shadow-xl object-cover"
        />
      </motion.div>

      {/* Gradient Text Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl font-extrabold mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, I’m Anish Adhikari 👋
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Full-stack developer passionate about building modern, fast, and impactful applications.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex items-center gap-6 mt-6 text-white text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a href="https://github.com/anishadhikari" target="_blank" aria-label="GitHub">
          <Github className="hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com/in/anishadhikari" target="_blank" aria-label="LinkedIn">
          <Linkedin className="hover:text-gray-400 transition" />
        </a>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
