export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 bg-gray-100 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Agrim Mehra. Built with Next.js & Tailwind
        CSS.
      </p>
    </footer>
  );
}
