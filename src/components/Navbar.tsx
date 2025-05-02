import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AgrimMehra.dev
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <a href="/projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
