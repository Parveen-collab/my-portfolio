import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  code: string;
  live: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="
        bg-[#111]
        rounded-2xl
        overflow-hidden
        border
        border-gray-800
        hover:border-blue-600
        transition-all
        duration-300
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">

        {/* Title */}
        <h2 className="text-xl font-semibold">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                rounded-full
                border
                border-gray-700
                bg-gray-800
                px-3
                py-1
                text-xs
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">

          {/* Code */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-lg
              border
              border-gray-700
              py-2
              text-center
              text-sm
              transition
              hover:border-blue-600
            "
          >
            Code
          </a>

          {/* Live */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-lg
              bg-blue-600
              py-2
              text-center
              text-sm
              transition
              hover:bg-blue-700
            "
          >
            Live
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;