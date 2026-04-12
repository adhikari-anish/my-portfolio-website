'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Download, FolderOpen } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white">
          <Image
            src="/me.jpeg"
            alt="Anish Adhikari"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I’m Anish Adhikari <span className="inline-block animate-wave">👋</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4">
          Full-stack developer passionate about building modern, fast, and impactful applications.
        </p>

        <div className="flex gap-4 justify-center mb-6">
          <a
            href="https://github.com/adhikari-anish"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-adhikari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/anish_adhikari_resume.pdf"
            download
            className="flex items-center gap-2 bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            <FolderOpen size={18} />
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}
