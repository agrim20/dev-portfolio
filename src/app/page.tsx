"use client";

export default function HomePage() {
  return (
    <section className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Agrim Mehra
        </h1>
        <p className="mt-4 text-xl text-gray-600 leading-relaxed">
          Front-End Developer focused on building scalable, accessible
          interfaces using React, TypeScript, and modern tools.
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-4">
          <a
            href="/Agrim_resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
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
      <div id="contact" className="mt-24 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have an opportunity or just want to connect? Feel free to message me
          below.
        </p>

        <form
          action="https://formspree.io/f/xjkwyevw"
          method="POST"
          className="space-y-4 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
