"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 px-6 py-4">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-3">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 text-center sm:text-left"
        >
          Agrim Mehra
          <span className="hidden sm:inline text-sm font-normal text-gray-500 ml-2">
            • Software Engineer
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-gray-700 text-sm sm:text-base font-medium">
          <Link
            href="/"
            className="hover:text-blue-600 hover:underline underline-offset-4 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-600 hover:underline underline-offset-4 transition"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hover:text-blue-600 hover:underline underline-offset-4 transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
