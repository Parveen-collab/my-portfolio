"use client";

import React from "react";
import ProjectCard from "@/src/components/ProjectCard";

const projects = [
  {
    title: "NirmaanSetu",
    description:
      "A full-stack construction platform connecting employers, employees, and suppliers through a scalable web application.",
    image: "/Image/logo-NirmaanSetu.jpg",
    tech: ["Next.js", "React", "Java", "Spring Boot", "MySQL"],
    code: "https://github.com/Parveen-collab/NirmaanSetu",
    live: "https://nirmaan-setu.vercel.app/",
  },
  {
    title: "NirmaanSetu",
    description:
      "A full-stack construction platform connecting employers, employees, and suppliers through a scalable web application.",
    image: "/Image/logo-NirmaanSetu.jpg",
    tech: ["Next.js", "React", "Java", "Spring Boot", "MySQL"],
    code: "https://github.com/Parveen-collab/NirmaanSetu",
    live: "https://nirmaan-setu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I've Built
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;