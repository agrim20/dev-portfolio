"use client";

export default function HomePage() {
  return (
    <section className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">Agrim Mehra</h1>
        <p className="mt-4 text-xl text-gray-600">
          Front-End Developer • React, TypeScript & Redux Expert
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/Agrim_resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/agrim-mehra-2798a112a/"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m an experienced software developer based in Belgium...
        </p>
      </div>

      {/* Contact Section - ⬇️ Add this at the bottom */}
      <div id="contact" className="text-center mt-24">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I&apos;m currently looking for front-end roles in Belgium. Feel free
          to reach out!
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:agrimmehra20@gmail.com"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/agrim-mehra-2798a112a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 text-base"
          >
            Connect on LinkedIn
          </a>
          <a
            href="/Agrim_resume.pdf"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800 text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
