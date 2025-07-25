'use client'

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
} from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'Sass', icon: <SiSass className="text-pink-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
  { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
  { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-white" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#0b0b0b] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 hover:scale-110 transition">
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-sm text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
