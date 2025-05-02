import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          title="AWS + FastAPI Real-Time Ingestion"
          description="Real-time pipeline using Lambda, EventBridge, RDS, and FastAPI on EC2. Fetches and exposes energy data via a REST API."
          tech={["AWS", "FastAPI", "PostgreSQL", "EC2"]}
          link="https://github.com/your-repo/aws-fastapi-ingestion"
        />

        <ProjectCard
          title="TypeScript Codebase Migration"
          description="Migrated a legacy JavaScript project to TypeScript, improving maintainability, type safety, and long-term dev speed."
          tech={["JavaScript", "TypeScript", "Redux"]}
        />

        <ProjectCard
          title="Canvas Optimization POC"
          description="Enhanced HTML5 canvas rendering performance with offScreenCanvas, improving drawing performance in simulation tools."
          tech={["HTML5 Canvas", "Performance", "POC"]}
        />
      </div>
    </section>
  );
}
