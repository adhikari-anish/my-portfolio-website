"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 px-6 py-6 text-sm text-center border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Anish Adhikari. All rights reserved.</p>
      <a
        href="#"
        className="mt-2 inline-block text-gray-400 hover:text-white transition"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
