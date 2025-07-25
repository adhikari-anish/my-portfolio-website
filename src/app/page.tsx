// import { Header } from "@/components/header";
// import { ThemeToggle } from "@/components/theme-toggle";
"use client";
import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experiences";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>

    // <>
    //   {/* <div className="container flex flex-col items-center">
    //     <Header />
    //   </div>
    //   <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" /> */}
    //   <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 space-y-8">
    //   <motion.img
    //     src="/me.jpeg"
    //     alt="Anish"
    //     className="w-48 h-48 rounded-full object-cover shadow-lg"
    //     initial={{ opacity: 0, scale: 0.8 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.8 }}
    //   />

    //   <motion.h1
    //     className="text-4xl font-bold text-center"
    //     initial={{ opacity: 0, y: -50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8, delay: 0.3 }}
    //   >
    //     Hi, I&apos;m Anish 👋
    //   </motion.h1>

    //   <motion.p
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8, delay: 0.3 }}
    //     className="mt-4 text-lg md:text-xl text-center max-w-xl"
    //   >
    //     A passionate Software Engineer crafting scalable web applications. 🚀<br/>
    //     Portfolio coming soon — stay tuned!
    //   </motion.p>

    //   <motion.div
    //     className="mt-6 flex gap-4"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.8, delay: 0.6 }}
    //   >
    //     <a href="https://github.com/adhikari-anish" target="_blank" rel="noopener noreferrer">
    //       <Github className="text-3xl hover:text-gray-400" />
    //     </a>
    //     <a href="https://linkedin.com/in/anish-adhikari" target="_blank" rel="noopener noreferrer">
    //       <Linkedin className="text-3xl hover:text-blue-400" />
    //     </a>
    //   </motion.div>

    //   <motion.div
    //     className="mt-12 text-sm text-gray-500"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.8, delay: 1 }}
    //   >
    //     © {new Date().getFullYear()} Anish Adhikari. All rights reserved.
    //   </motion.div>
    // </div>
    // </>
  );
}
