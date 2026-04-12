"use client";

import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/components/active-section-provider";
import type { SectionName } from "@/lib/types";

type NavItem = {
  label: SectionName;
  href: string;
  sectionId: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  const sectionById = useMemo(
    () =>
      new Map(navItems.map((item) => [item.sectionId, item.label] as const)),
    []
  );

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Keep nav item in sync with current section while scrolling.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const mostVisible = visibleEntries[0];
        if (!mostVisible) return;

        const sectionName = sectionById.get(mostVisible.target.id);
        if (sectionName) {
          setActiveSection(sectionName);
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionById, setActiveSection]);

  const handleNavClick = (sectionName: SectionName) => {
    setActiveSection(sectionName);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);
  };

  const getLinkClassName = (sectionName: SectionName) => {
    const isActive = activeSection === sectionName;

    return isActive
      ? "text-white bg-white/20 rounded-full px-3 py-1 transition"
      : "text-gray-300 hover:text-white transition px-3 py-1";
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit">
        {/* Desktop nav */}
        <div className="hidden sm:flex bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full items-center gap-4 shadow-lg">
          <nav className="flex items-center gap-2 text-sm sm:text-base">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={getLinkClassName(item.label)}
                aria-current={activeSection === item.label ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex justify-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg flex items-center text-white"
          >
            {isOpen ? (
              <>
                <span className="mr-2">Close</span>
                <FiX size={20} />
              </>
            ) : (
              <>
                <span className="mr-2">Menu</span>
                <FiMenu size={20} />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Backdrop & Menu (outside <header>) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fullscreen Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.div
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-xs z-50"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-neutral-900 border border-white/20 text-white rounded-xl shadow-xl py-4 px-6">
                <p className="text-lg font-semibold mb-4">Navigation</p>
                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.label)}
                      className={getLinkClassName(item.label)}
                      aria-current={activeSection === item.label ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
