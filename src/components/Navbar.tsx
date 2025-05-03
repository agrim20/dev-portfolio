import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Agrim Mehra
          <span className="block text-sm font-normal text-gray-500 sm:inline sm:ml-2">
            • Software Engineer
          </span>
        </Link>

        <div className="flex justify-center gap-6 text-base text-gray-700">
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
