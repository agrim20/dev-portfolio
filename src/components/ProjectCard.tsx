"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition max-w-full"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded"
          >
            {item}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          className="inline-block text-sm text-blue-600 hover:underline"
        >
          View Project →
        </a>
      )}
    </motion.div>
  );
}
