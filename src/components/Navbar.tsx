import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Agrim Mehra — Software Developer
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
