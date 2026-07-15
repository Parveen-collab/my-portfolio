import React from "react";
import {
  Briefcase,
  GraduationCap,
  Server,
  MonitorSmartphone,
  Brain,
  Languages,
  Globe,
  Database,
} from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "1+ Year Software Development Internship",
  },
  {
    icon: GraduationCap,
    title: "IIT Patna B.S. Computer Science & Data Analytics",
  },
  {
    icon: Server,
    title: "Java • Spring Boot • Spring Security",
  },
  {
    icon: MonitorSmartphone,
    title: "React • Next.js • TypeScript",
  },
  {
    icon: Database,
    title: "MySQL • Hibernate/JPA • REST APIs",
  },
  {
    icon: Languages,
    title: "German Language (B1)",
  },
  {
    icon: Globe,
    title: "Open to International Relocation",
  },
];

const WhyHireMe = () => {
  return (
    <section
      id="why-hire-me"
      className="px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Why Hire Me?
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Full Stack Engineer focused on building scalable web applications,
            robust backend systems solutions for global users.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="rounded-lg bg-blue-500/10 p-3 transition-all duration-300 group-hover:bg-blue-500/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Highlight Box */}
        <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-center text-gray-300">
            Combining
            <span className="font-semibold text-blue-400">
              {" "}Frontend Development
            </span>,
            <span className="font-semibold text-blue-400">
              {" "}Backend Engineering
            </span>,
            and
            <span className="font-semibold text-blue-400">
              {" "}International Readiness
            </span>
            {" "}to deliver production-ready software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
