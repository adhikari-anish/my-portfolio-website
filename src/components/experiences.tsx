"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "M.Sc. in Computer Science",
    place: "University of Wollongong, Liverpool Campus, NSW",
    date: "2023 – Dec 2025",
    type: "Education",
  },
  {
    title: "Software Engineer II",
    place: "YoungInnovations Pvt. Ltd., Kathmandu, Nepal",
    date: "Feb 2022 – Feb 2024",
    type: "Experience",
  },
  {
    title: "Software Engineer I",
    place: "YoungInnovations Pvt. Ltd., Kathmandu, Nepal",
    date: "Mar 2020 – Jan 2022",
    type: "Experience",
  },
  {
    title: "Software Engineering Intern",
    place: "Leapfrog Technology Inc., Kathmandu, Nepal",
    date: "Jun 2019 – Sept 2019",
    type: "Experience",
  },
  {
    title: "B.Sc. in Computer Engineering",
    place: "Kathmandu University, Nepal",
    date: "2015 – 2019",
    type: "Education",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-950 text-white px-6 py-20 text-center flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h2>

      <div className="w-full max-w-3xl space-y-10 border-l-2 border-gray-700 pl-6">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Circle */}
            <span className="absolute -left-3 top-1 w-3 h-3 bg-white rounded-full" />

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.place}</p>
            <p className="text-xs text-gray-500 mt-1 italic">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
