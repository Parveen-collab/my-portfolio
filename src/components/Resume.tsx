import React from "react";

const Resume = () => {
  return (
    <section className="w-full py-16 px-6 bg-[#141f17] text-white">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
        <p className="text-gray-400">
          Quick summary below and full resume preview with download option
        </p>
      </div>

      {/* Resume Summary Card */}
      <div className="max-w-6xl mx-auto bg-[#1c2a21] rounded-2xl p-8 shadow-lg border border-gray-700 grid md:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Name */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400">
              👨‍💻 Parveen Kumar
            </h2>
            <p className="text-gray-400">Full Stack Developer</p>
            <p className="text-gray-400">Muzaffarpur, Bihar</p>
            <p className="text-gray-400">parveen@example.com</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-2">🎓 Education</h3>
            <p className="text-gray-400">
              B.S. in Computer Science and Data Analytics
            </p>
            <p className="text-gray-500">IIT Patna</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold mb-2">🏆 Achievements</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Built multiple full-stack web applications</li>
              <li>1+ year frontend development internship</li>
              <li>Experience with React, Next.js, and Java</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              💻 Projects & Experience
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Nirmaansetu Construction Platform</li>
              <li>Cosmovista Space Explorer</li>
              <li>Music School Website (Next.js)</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">⚡ Key Skills</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Java",
                "Spring Boot",
                "MySQL",
                "Tailwind",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-sm"
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
            src="/Resume.pdf"
            className="w-full h-[700px]"
            title="Resume"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <a
          href="/resume.pdf"
          download
          target="_blank"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          📄 Download Full Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;