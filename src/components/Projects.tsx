import React from "react";
import ProjectCard from "@/src/components/ProjectCard";

const projects = [
  {
    title: "NirmaanSetu",
    description:
      "Scalable full-stack platform connecting construction stakeholders globally.",
    image: "/Image/logo-NirmaanSetu.jpg",
    tech: ["Next.js", "Spring Boot", "MySQL"],
    code: "https://github.com/Parveen-collab/NirmaanSetu",
    live: "https://nirmaan-setu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        {/* <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold">
            Projects
          </h1>

          <p className="mt-2 text-gray-400">
            A collection of my major works — showcasing backend systems
            and scalable web architecture.
          </p>
        </div> */}

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;