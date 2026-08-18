"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
    title: "Census Data Visualization",
    summary:
      "An interactive platform to explore data from Nepal’s 2011 and 2021 census with multiple chart types.",
    responsibilities: [
      "Parsed CSV survey data and inserted into PostgreSQL using Node.js.",
      "Built REST APIs to serve processed census data.",
      "Visualized data using ApexCharts.js in Vue and Next.js.",
      "Created multiple chart types: bar, pie, spider, grouped charts, etc."
    ],
    live: "https://censusresults.nsonepal.gov.np/",
    tech: ["Node.js", "Next.js", "Vue.js", "ApexCharts", "PostgreSQL"]
  },
  {
    title: "National Project Bank MIS",
    summary:
      "A centralized data inventory for Nepal government-funded projects that helps in strategic planning and evidence-based decision-making.",
    responsibilities: [
      "Built REST APIs with Node.js, Express, Prisma, and PostgreSQL.",
      "Developed authentication, authorization, and email services.",
      "Created reusable front-end components using Next.js and Ant Design.",
      "Integrated front-end with back-end via REST APIs.",
      "Mentored junior engineers and conducted code reviews."
    ],
    live: "https://npbmis.npc.gov.np/",
    tech: ["Node.js", "PostgreSQL", "Prisma", "Next.js", "Ant Design"]
  },
  {
    title: "Career Service Center",
    summary:
      "A platform connecting job providers and students, and managing training programs to upskill candidates.",
    responsibilities: [
      "Built front-end using Next.js with reusable UI components and animations.",
      "Developed REST APIs in Laravel and PostgreSQL with role-based permissions.",
      "Implemented cron jobs to pull 3rd-party job data.",
      "Reviewed code of junior developers and helped them grow."
    ],
    live: "https://careerservicelab.com/",
    tech: ["Next.js", "Laravel", "PostgreSQL", "REST APIs"]
  },
  {
    title: "VoiceInn",
    summary:
      "An IVR-based communication solution that automates calls and SMS delivery for large-scale outreach.",
    responsibilities: [
      "Rebuilt the entire management system for better maintainability.",
      "Collaborated with backend developer to integrate REST APIs.",
      "Worked with UI designer to revamp the system UI/UX.",
      "Added client-requested features to the upgraded system."
    ],
    live: "http://voiceinn.net/",
    tech: ["REST API", "Frontend", "UX/UI"]
  },
  {
    title: "UAHEP Grievance System",
    summary:
      "A grievance redressal platform for the Upper Arun Hydroelectric Project by Nepal Electricity Authority and World Bank.",
    responsibilities: [
      "Developed the front-end using HTML, CSS, jQuery, and D3.js.",
      "Collaborated with the World Bank team to gather and implement requirements.",
      "Created multiple entry-points for complaints (web, officer, mobile app)."
    ],
    live: "http://uahep-grmss.yipl.com.np/",
    tech: ["HTML", "CSS", "jQuery", "D3.js"]
  },
  {
    title: "Mellekh Visualization Board",
    summary:
      "An interactive board visualizing data for Mellekh Rural Municipality.",
    responsibilities: [
      "Used Vue.js to build the client-side application.",
      "Worked with designer and client to finalize design system.",
      "Integrated API from backend to fetch real-time data."
    ],
    live: "https://mellekh-viz.susasan.org/",
    tech: ["Vue.js", "API Integration", "Design System"]
  },
  {
    title: "Infrastructure Management System (IMS)",
    summary:
      "A platform enabling elected officials and citizens to track progress of local infrastructure projects.",
    responsibilities: [
      "Fixed dashboard map/chart issues and table filters.",
      "Worked with clients to gather feedback and refine features.",
      "Added new chart features and developed supporting APIs for admin/public views."
    ],
    live: "https://ims.susasan.org/",
    tech: ["JavaScript", "Charts", "Admin APIs"]
  }
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-6 py-20 flex flex-col items-center"
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

      <div className="grid sm:grid-cols-2 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-base mb-4">{project.summary}</p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400 mb-4">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-sm text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
