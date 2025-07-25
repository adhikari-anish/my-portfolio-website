"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Science Methodology",
    platform: "Coursera",
    url: "https://coursera.org/share/765ea8aaba9d1041ab3110efff096388",
    date: "Jan 04, 2024",
  },
  {
    title: "Tools for Data Science",
    platform: "Coursera",
    url: "https://coursera.org/share/8c3595a33e175a3777feb4a1bd9fec89",
    date: "Dec 14, 2023",
  },
  {
    title: "Python for Data Science, AI & Development",
    platform: "Coursera",
    url: "https://coursera.org/share/4e1418716663ce2e5c04a0d10dfdafc4",
    date: "May 29, 2023",
  },
  {
    title: "What is Data Science?",
    platform: "Coursera",
    url: "https://coursera.org/share/35d9ba41391b825d39dfb91544840fa8",
    date: "Mar 24, 2023",
  },
  {
    title: "SQL - The Complete Developer's Guide (MySQL, PostgreSQL)",
    platform: "Udemy",
    url: "",
    date: "Mar 25, 2023",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-20 text-white bg-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <motion.ul className="space-y-5 text-sm sm:text-base">
          {certifications.map((cert, index) => (
            <motion.li key={index} variants={itemVariants}>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300 block"
                >
                  {cert.title} – {cert.platform}
                  <span className="block text-xs text-gray-500">
                    Completed on {cert.date}
                  </span>
                </a>
              ) : (
                <span className="text-gray-300 block">
                  {cert.title} – {cert.platform}
                  <span className="block text-xs text-gray-500">
                    Completed on {cert.date}
                  </span>
                </span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
