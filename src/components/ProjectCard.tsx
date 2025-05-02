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
    <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

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
          className="text-blue-600 hover:underline text-sm"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
