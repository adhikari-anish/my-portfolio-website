"use client";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full flex items-center gap-4 shadow-lg">
        {/* Navigation links */}
        <nav className="flex items-center gap-4 text-sm sm:text-base">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition px-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

       
      </div>
    </header>
  );
}
