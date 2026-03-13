import Image from "next/image"
import React from "react"

const projects = [
  {
    title: "NirmaanSetu",
    description:
      "Scalable full-stack platform connecting construction stakeholders globally with AI-based matching and analytics.",
    image: "/Image/logo-NirmaanSetu.jpg",
    tech: ["Next.js", "Spring Boot", "MySQL", "AI"],
    code: "https://github.com/Parveen-collab/NirmaanSetu",
    live: "https://nirmaan-setu.vercel.app/",
  },
  {
    title: "GitHub Profile",
    description:
      "Parveen-collab/Parveen-collab is a special repository.Its README.md will appear on your public profile.",
    image:  "/Image/Github-profile.png",
    tech: ["HTML, CSS, Javascript"],
    code: "https://github.com/Parveen-collab",
    live: "https://github.com/Parveen-collab/Parveen-collab",
  },
  {
    title: "My Portfolio Website",
    description:
      "An Introduction Webpage for myself.",
    image: "/Image/my-portfolio-preview.png",
    tech: ["Next.js", "Typescript", "API Integration"],
    code: "https://github.com/Parveen-collab/my-portfolio",
    live: "https://my-portfolio-black-chi-37.vercel.app/",
  },
]

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of my major works — showcasing backend systems, AI
            integration, and scalable web architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
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
              <div className="p-6 flex flex-col gap-4">

                <h2 className="text-xl font-semibold">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm border border-gray-700 py-2 rounded-lg hover:border-blue-600 transition"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects