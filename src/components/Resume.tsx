import React from "react";

const Resume = () => {
  return (
    <section className="w-full py-16 px-6 bg-[#141f17] text-white">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold md:text-5xl mb-2">Resume</h1>
        <p className="text-gray-400">
          Quick summary below and full resume preview with download option
        </p>
      </div>

      {/* Resume Summary Card */}
      <div className="max-w-6xl mx-auto bg-[#1c2a21] rounded-2xl p-8 shadow-lg border border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Column */}
        <div className="space-y-6">

          {/* Name */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400">
              Parveen Kumar
            </h2>
            <p className="text-gray-400">Full Stack Developer</p>
            <p className="text-gray-400">Patna, Bihar, India • Open to relocation (Germany/EU)</p>
            <p className="text-gray-400">parveen_24a12res426@iitp.ac.in</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-gray-400">
              B.S. in Computer Science and Data Analytics
            </p>
            <p className="text-gray-500">IIT Patna</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>1+ year frontend development internship</li>
              <li>Developed full-stack applications using React, Next.js, Java Spring Boot</li>
              <li>Experience with React, Next.js, and Java</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Projects & Experience
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Nirmaansetu Construction Platform</li>
              <li>GitHub Profile</li>
              <li>My Portfolio Website</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Skills</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React.Js",
                "Next.js",
                "TypeScript",
                "Java",
                "Spring Boot",
                "Microservice",
                "Event-Driven-System-Architecture",
                "System Design",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Tailwind",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm hover:border-blue-500 hover:text-blue-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="border border-gray-700 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="/pdf/master-resume.pdf"
            className="w-full h-[700px]"
            title="Resume"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center gap-4 mt-8">
        <a
          href="/pdf/master-resume.pdf"
          target="_blank"
          className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Resume
        </a>

        <a
          href="/pdf/master-resume.pdf"
          download
          className="px-6 py-3 border border-gray-400 rounded-lg font-medium hover:text-blue-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;