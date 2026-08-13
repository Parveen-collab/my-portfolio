import Image from "next/image";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

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
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-7">
        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1.5
                text-xs
                font-medium
                text-white/60
                transition-colors
                group-hover:border-blue-500/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-white/15
              px-4
              py-2.5
              text-sm
              font-medium
              text-white/80
              transition-all
              duration-200
              hover:border-blue-500/50
              hover:bg-blue-500/5
              hover:text-blue-400
            "
          >
            <Github size={17} />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live website`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-blue-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
          >
            <ExternalLink size={17} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;