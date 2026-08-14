"use client";

import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiApachekafka,
  SiRedis,
  SiGithub,
} from "react-icons/si";

import {
  TbApi,
  TbTopologyStar3,
  TbBrandReactNative,
} from "react-icons/tb";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const frontendSkills: Skill[] = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
];

const backendSkills: Skill[] = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  {
    name: "Spring Security",
    icon: <SiSpringsecurity />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "Hibernate",
    icon: <SiHibernate />,
  },
  {
    name: "REST APIs",
    icon: <TbApi />,
  },
  {
    name: "Microservices",
    icon: <TbTopologyStar3 />,
  },
];


const toolsSkills: Skill[] = [
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "AWS",
    icon: <SiAmazonwebservices />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
  },
  {
    name: "Apache Kafka",
    icon: <SiApachekafka />,
  },
];

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
        {title}
      </h3>

      <div className="flex max-w-5xl flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              group
              flex
              w-20
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                text-4xl
                text-blue-400
                shadow-lg
                shadow-blue-500/5
                transition-all
                duration-300
                group-hover:-translate-y-2
                group-hover:border-blue-500/40
                group-hover:bg-blue-500/10
                group-hover:text-blue-300
                group-hover:shadow-blue-500/20
              "
            >
              {skill.icon}
            </div>

            <span
              className="
                text-xs
                font-medium
                leading-tight
                text-white/60
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#0d1b13]
        px-6
        py-24
        sm:px-8
        lg:px-12
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Technologies I Work With
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="space-y-20">
          <SkillCategory
            title="Frontend Technologies"
            skills={frontendSkills}
          />

          <SkillCategory
            title="Backend Technologies"
            skills={backendSkills}
          />

          <SkillCategory
            title="Tools & Technologies"
            skills={toolsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;