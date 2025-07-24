"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm text-center px-6 py-6 border-t border-gray-800">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Anish Adhikari. All rights reserved.
      </p>
      <a
        href="#"
        className="text-gray-400 hover:text-white transition"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
