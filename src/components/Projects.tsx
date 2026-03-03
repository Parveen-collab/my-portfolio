import Image from "next/image"
import React from "react"

const projects = [
  {
    title: "NirmaanSetu Platform",
    description:
      "Scalable full-stack platform connecting construction stakeholders globally with AI-based matching and analytics.",
    image: "/Image/profile-photo.jpeg",
    tech: ["Next.js", "Spring Boot", "MySQL", "AI"],
    code: "https://github.com/Parveen-collab/NirmaanSetu",
    live: "https://nirmaan-setu.vercel.app/",
  },
  {
    title: "Sign Language Interpreter",
    description:
      "AI-powered real-time sign language recognition system using deep learning and computer vision.",
    image: "/Image/profile-photo.jpeg",
    tech: ["Python", "TensorFlow", "OpenCV"],
    code: "#",
    live: "#",
  },
  {
    title: "Cosmovista",
    description:
      "Space exploration platform integrating NASA APIs with interactive dashboards.",
    image: "/Image/profile-photo.jpeg",
    tech: ["Next.js", "Tailwind", "API Integration"],
    code: "#",
    live: "#",
  },
]

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold mb-4">🚀 Projects</h1>
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