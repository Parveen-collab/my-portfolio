import React from "react";

const resumes = [
  {
    title: "Frontend Engineer Resume",
    description:
      "Web Developer | Frontend Engineer — HTML, CSS, JavaScript, React, Next.js, TypeScript",
    file: "/pdf/Master_Resume_for_Frontend_Engineer.pdf",
  },
  {
    title: "Backend Engineer Resume",
    description:
      "Spring Boot, Spring Security, Hibernate, MySQL, REST APIs, Docker, AWS, System Design",
    file: "/pdf/backend-engineer-resume.pdf",
  },
  {
    title: "Full Stack Engineer Resume",
    description:
      "React, Next.js, TypeScript, Java, Spring Boot, Microservices, SQL, Agile/Scrum, Full Stack Development",
    file: "/pdf/full-stack-engineer-resume.pdf",
  }
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Spring Security",
  "Hibernate/JPA",
  "REST APIs",
  "Microservices",
  "System Design",
  "Docker",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full bg-[#141f17] px-6 py-20 text-white"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl font-bold">
          Resume
        </h1>

        <p className="text-gray-400 mt-2">
          Explore role-specific resumes tailored for Frontend Engineer, Backend Engineer and 
          Full Stack Engineer opportunities.
        </p>
      </div>

      {/* Main Resume Summary Card */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-2xl border border-slate-700 bg-[#1c2a21] p-8 shadow-lg md:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Parveen Kumar
            </h2>

            <p className="mt-2 text-gray-300">
              Frontend Engineer | Backend Engineer | Full-Stack Software Engineer
            </p>

            <p className="text-gray-400">
              Patna, Bihar, India
            </p>

            <p className="text-gray-400">
              Open to Relocation (Germany)
            </p>

            <p className="text-gray-400">
              parveen_24a12res426@iitp.ac.in
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Education
            </h3>

            <p className="text-gray-300">
              B.S. in Computer Science & Data Analytics
            </p>

            <p className="text-gray-400">
              Indian Institute of Technology (IIT) Patna
            </p>

            <p className="text-gray-500">
              Expected Graduation: July 2027
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Highlights
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>1+ Year Software Development Internship Experience</li>
              <li>
                Built Full Stack Applications using React, Next.js,
                Java & Spring Boot
              </li>
              <li>
                Developed REST APIs, Authentication Systems &
                Database Architectures
              </li>
              <li>German (A2)</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Projects */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Featured Projects
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Nirmaansetu - Global Construction Platform</li>
              <li>Portfolio Website</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm transition hover:border-blue-500 hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Downloads */}
      <div className="mx-auto mt-14 max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Download Role-Specific Resumes
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resumes.map((resume) => (
            <div
              key={resume.title}
              className="rounded-xl border border-slate-700 bg-[#1c2a21] p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="mb-3 text-xl font-semibold text-blue-400">
                {resume.title}
              </h3>

              <p className="mb-6 text-gray-400">
                {resume.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium transition hover:bg-blue-700"
                >
                  View
                </a>

                <a
                  href={resume.file}
                  download
                  className="flex-1 rounded-lg border border-slate-600 px-4 py-2 text-center font-medium transition hover:border-blue-500 hover:text-blue-400"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-12 max-w-6xl rounded-xl border border-slate-700 bg-[#1c2a21] p-6">
        <p className="text-center text-gray-300">
          Looking for a{" "}
          <span className="font-semibold text-blue-400">
            Frontend Engineer
          </span>
          ,{" "}
          <span className="font-semibold text-blue-400">
            Backend Engineer
          </span>
          , or{" "}
          <span className="font-semibold text-blue-400">
            Full Stack Engineer
          </span>
          {/* <span className="font-semibold text-blue-400">
            Software Engineer
          </span> */}
          ? Download the resume most relevant to your role.
        </p>
      </div>
    </section>
  );
};

export default Resume;
