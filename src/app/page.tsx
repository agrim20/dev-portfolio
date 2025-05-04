"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="py-20 bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/profile.jpg"
            alt="Agrim Mehra"
            width={220}
            height={220}
            className="rounded-full border-4 border-blue-200 shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Agrim Mehra
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
            I&apos;m a software developer passionate about building scalable,
            maintainable software with React, TypeScript, and modern tooling.
            Currently seeking opportunities as a front-end or software
            developer.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4">
            <a
              href="/resume"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm"
            >
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/agrim-mehra-2798a112a/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800 text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* About Me Section */}

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          {/* Text Block */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I’m a software developer with 2.5 years of experience building
              React + TypeScript interfaces that scale and last. I’ve
              contributed to production-grade tools at Hysopt, led a large-scale
              TypeScript migration, and recently built a real-time cloud
              pipeline with AWS and FastAPI.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I hold a Master’s in Computer Science from KU Leuven and have a
              peer-reviewed publication in AI-based path planning. Outside of
              work, you’ll usually find me chasing a padel ball, exploring new
              cities, or sketching ideas over coffee.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-sm text-blue-700 font-semibold uppercase mb-2">
                Engineering Product Experience
              </h3>
              <p className="text-gray-800 text-base">
                I worked in an agile Scrum team developing engineering tools
                grounded in applied physics and mathematics — including
                performance-critical UI for simulations, dynamic charts, and
                real-time visualizations in collaboration with functional
                stakeholders.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-72">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-72"
              >
                <Image
                  src="/agrim_egypt.jpeg"
                  alt="Agrim traveling in Egypt"
                  fill
                  className="rounded-lg shadow object-cover"
                />
              </motion.div>
            </div>
            <div className="relative w-full h-72">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-72"
              >
                <Image
                  src="/agrim_react.jpg"
                  alt="Agrim at React Brussels"
                  fill
                  className="rounded-lg shadow object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
