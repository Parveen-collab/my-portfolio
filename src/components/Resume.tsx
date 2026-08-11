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
      className="w-full bg-[#141f17] px-6 py-1o mb-20 text-white"
    >

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div
          className="
      rounded-3xl
      border border-slate-800
      bg-slate-950
      p-6 sm:p-8 md:p-10
      shadow-2xl
    "
        >

          {/* =========================
        HEADER
    ========================= */}
          <div className="text-center">

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Parveen Kumar
            </h2>

            <p className="mt-3 text-lg font-semibold text-blue-400">
              Backend Engineer | Full-Stack Software Engineer
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span>📍 Patna, Bihar, India</span>
              <span>•</span>
              <span>🇩🇪 Open to Relocation to Germany</span>
            </div>

            <div className="mt-2 text-sm text-slate-400">
              parveen_24a12res426@iitp.ac.in
            </div>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm">

              <a
                href="https://www.linkedin.com/in/parveen-kumar-664b8b24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="
            text-slate-400
            transition
            hover:text-blue-400
          "
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Parveen-collab"
                target="_blank"
                rel="noopener noreferrer"
                className="
            text-slate-400
            transition
            hover:text-blue-400
          "
              >
                GitHub ↗
              </a>

              <a
                href="https://my-portfolio-black-chi-37.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
            text-slate-400
            transition
            hover:text-blue-400
          "
              >
                Portfolio ↗
              </a>

            </div>
          </div>


          {/* =========================
        PROFESSIONAL SUMMARY
    ========================= */}
          <div className="mx-auto mt-10 max-w-4xl text-center">

            <h3 className="text-xl font-semibold text-white">
              Professional Summary
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Backend-focused software engineer with experience building
              full-stack applications and REST API integrations using Java,
              Spring Boot, React, Next.js, and TypeScript. Experienced in
              JWT authentication, role-based access control, API integration,
              database-oriented application development, reusable software
              architecture, performance optimization, Git-based collaboration,
              and Agile/Scrum delivery.
            </p>

          </div>


          {/* =========================
        TECHNICAL SKILLS
    ========================= */}
          <div className="mt-12 text-center">

            <h3 className="text-xl font-semibold text-white">
              Technical Skills
            </h3>

            <div className="mx-auto mt-6 max-w-4xl space-y-5">

              {/* Backend */}
              <div>
                <p className="mb-3 text-sm font-medium text-blue-400">
                  Backend
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Java",
                    "Spring Boot",
                    "REST APIs",
                    "JWT",
                    "Spring Security",
                    "Role-Based Access Control",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                  rounded-full
                  border border-slate-700
                  bg-slate-900
                  px-3 py-1.5
                  text-xs text-slate-300
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>


              {/* Frontend */}
              <div>
                <p className="mb-3 text-sm font-medium text-blue-400">
                  Frontend
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                  rounded-full
                  border border-slate-700
                  bg-slate-900
                  px-3 py-1.5
                  text-xs text-slate-300
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>


              {/* Tools */}
              <div>
                <p className="mb-3 text-sm font-medium text-blue-400">
                  Tools & Practices
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "Postman",
                    "CI/CD",
                    "Agile",
                    "Scrum",
                    "Technical Documentation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                  rounded-full
                  border border-slate-700
                  bg-slate-900
                  px-3 py-1.5
                  text-xs text-slate-300
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>


          {/* =========================
        EXPERIENCE
    ========================= */}
          <div className="mx-auto mt-12 max-w-4xl">

            <h3 className="text-center text-xl font-semibold text-white">
              Experience
            </h3>

            <div
              className="
          mt-6
          rounded-2xl
          border border-slate-800
          bg-slate-900/40
          p-6
        "
            >

              <div className="text-center">

                <h4 className="text-lg font-semibold text-white">
                  Yuktisoft Infotech LLP
                </h4>

                <p className="mt-1 text-sm text-blue-400">
                  Frontend Developer Intern
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Jan 2025 – Jul 2025
                </p>

              </div>


              <ul className="mx-auto mt-6 max-w-3xl space-y-3 text-sm leading-6 text-slate-400">

                <li>
                  • Integrated 10+ REST APIs into enterprise dashboards
                  with centralized error handling and request caching.
                </li>

                <li>
                  • Engineered 15+ reusable React/Next.js components using
                  TypeScript and Tailwind CSS.
                </li>

                <li>
                  • Resolved 20+ production issues and reduced initial
                  bundle size by approximately 30%.
                </li>

                <li>
                  • Improved application state management using React
                  Context API and custom hooks.
                </li>

                <li>
                  • Collaborated with backend engineers, QA engineers,
                  and product stakeholders through Agile/Scrum workflows.
                </li>

              </ul>

            </div>
          </div>


          {/* =========================
        FEATURED PROJECT
    ========================= */}
          <div className="mx-auto mt-12 max-w-4xl">

            <h3 className="text-center text-xl font-semibold text-white">
              Featured Project
            </h3>

            <div
              className="
          mt-6
          rounded-2xl
          border border-slate-800
          bg-slate-900/40
          p-6
        "
            >

              <div className="text-center">

                <h4 className="text-xl font-semibold text-white">
                  NirmaanSetu
                </h4>

                <p className="mt-1 text-sm text-blue-400">
                  Full-Stack Construction Platform
                </p>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                  A full-stack platform built with Next.js, React,
                  TypeScript and Spring Boot for construction workforce
                  and stakeholder management.
                </p>

              </div>


              {/* Project Technologies */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "REST API",
                  "JWT",
                  "Next.js",
                  "React",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                rounded-md
                bg-slate-800
                px-2.5 py-1
                text-xs text-slate-400
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* Project Details */}
              <ul className="mx-auto mt-6 max-w-3xl space-y-3 text-sm leading-6 text-slate-400">

                <li>
                  • Delivered 25+ responsive pages and reusable components
                  for role-based dashboards.
                </li>

                <li>
                  • Implemented JWT authentication and role-based route
                  protection.
                </li>

                <li>
                  • Integrated Spring Boot REST APIs for application data.
                </li>

                <li>
                  • Optimized API fetching through caching and memoization,
                  reducing redundant network requests by approximately 35%.
                </li>

              </ul>

            </div>
          </div>


          {/* =========================
        EDUCATION
    ========================= */}
          <div className="mt-12 text-center">

            <h3 className="text-xl font-semibold text-white">
              Education
            </h3>

            <div className="mt-5">

              <h4 className="font-semibold text-slate-200">
                B.S. in Computer Science & Data Analytics
              </h4>

              <p className="mt-1 text-slate-400">
                Indian Institute of Technology (IIT) Patna
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Expected Graduation: July 2027
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Relevant Coursework: Data Structures, DBMS, Operating Systems,
                Computer Networks, Software Engineering, System Design
              </p>

            </div>
          </div>


          {/* =========================
        ACHIEVEMENTS
    ========================= */}
          <div className="mt-12 text-center">

            <h3 className="text-xl font-semibold text-white">
              Achievements
            </h3>

            <div className="mx-auto mt-5 max-w-2xl space-y-2 text-sm text-slate-400">

              <p>
                🏆 Secured 2nd Position in Model Combat at Xenith 2025,
                IIT Patna.
              </p>

              <p>
                💻 Participated in Hack N Tech 2.0 — Xenith 2025.
              </p>

            </div>
          </div>


          {/* =========================DOWNLOAD RESUME ========================= */}
          <div className="mt-12 flex justify-center">

            <a
              href="/Parveen_Kumar_Backend_Resume.pdf"
              download
              className="
          rounded-xl
          bg-blue-600
          px-6 py-3
          text-sm font-semibold
          text-white
          transition
          hover:bg-blue-500
          hover:shadow-lg
          hover:shadow-blue-500/20
        "
            >
              Download Resume
            </a>

          </div>

        </div>
      </section>

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

              {/* <p className="mb-6 text-gray-400">
                {resume.description}
              </p> */}

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
    </section>
  );
};

export default Resume;
