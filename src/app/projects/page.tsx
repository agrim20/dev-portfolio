"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl leading-relaxed">
            A few things I’ve built recently — from scalable cloud systems to
            frontend performance optimizations.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <ProjectCard
            title="AWS + FastAPI Real-Time Ingestion"
            description="Real-time pipeline using Lambda, EventBridge, RDS, and FastAPI on EC2. Fetches and exposes energy data via a REST API."
            tech={["AWS", "FastAPI", "PostgreSQL", "EC2"]}
          />
          <ProjectCard
            title="Codebase Migration To TypeScript from JavaScript"
            description="Migrated a legacy JavaScript project to TypeScript, improving maintainability, type safety, and long-term dev speed."
            tech={["JavaScript", "TypeScript", "Redux"]}
          />
          <ProjectCard
            title="Chart representation Migration to Highcharts"
            description="Replaced low-level custom charting logic with Highcharts in a production app, improving performance, accessibility, and development speed."
            tech={["React", "TypeScript", "Highcharts", "Redux"]}
          />
          <ProjectCard
            title="Canvas Optimization using offScreen Canvas"
            description="Enhanced HTML5 canvas rendering performance with offScreenCanvas, improving drawing performance in simulation tools."
            tech={["HTML5 Canvas", "Performance", "POC"]}
          />

          <ProjectCard
            title="Personal Portfolio (Next.js + Tailwind)"
            description="Designed and built this portfolio using Next.js App Router, Tailwind CSS, and Framer Motion — outside of my usual tech stack to explore modern React tooling."
            tech={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
          />

          <ProjectCard
            title="Journal Publication: Robot Path Planning"
            description="Published a research paper on single-robot path planning using a nature-inspired algorithm in a static environment."
            tech={["IJARIIT", "AI", "Path Planning", "Research"]}
            link="https://www.ijariit.com/manuscript/single-robot-path-planning-using-nature-inspired-algorithm-in-a-static-environment/"
          />
        </div>
      </div>
    </section>
  );
}
