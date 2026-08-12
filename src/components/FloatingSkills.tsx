"use client";

import { motion } from "framer-motion";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaShieldAlt,
  FaNetworkWired,
  FaServer,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiHibernate,
  SiJsonwebtokens,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiSpringboot,
  SiApachekafka,
} from "react-icons/si";

import { TbTopologyStar3, TbApi } from "react-icons/tb";

type Skill = {
  name: string;
  icon: React.ReactNode;
  top: string;
  left: string;
};

const skills: Skill[] = [
  // =========================
  // TOP ROW
  // =========================

  {
    name: "Java",
    icon: <FaJava size={28} />,
    top: "8%",
    left: "14%",
  },

  {
    name: "Git",
    icon: <FaGitAlt size={28} />,
    top: "8%",
    left: "47%",
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs size={28} />,
    top: "10%",
    left: "62%",
  },

  {
    name: "Apache Kafka",
    icon: <SiApachekafka size={28} />,
    top: "10%",
    left: "87%",
  },

  // =========================
  // SECOND ROW
  // =========================

  {
    name: "JavaScript",
    icon: <FaJs size={28} />,
    top: "22%",
    left: "7%",
  },

  {
    name: "HTML",
    icon: <FaHtml5 size={28} />,
    top: "15%",
    left: "32%",
  },

  {
    name: "Microservices",
    icon: <TbTopologyStar3 size={28} />,
    top: "24%",
    left: "76%",
  },

  // =========================
  // MIDDLE AREA
  // =========================

  {
    name: "CSS",
    icon: <FaCss3Alt size={28} />,
    top: "31%",
    left: "43%",
  },

  {
    name: "MySQL",
    icon: <SiMysql size={28} />,
    top: "34%",
    left: "53%",
  },

  {
    name: "Spring Security",
    icon: <FaShieldAlt size={28} />,
    top: "34%",
    left: "66%",
  },

  {
    name: "Spring Boot",
    icon: <SiSpringboot size={28} />,
    top: "47%",
    left: "74%",
  },

  // =========================
  // LOWER MIDDLE
  // =========================

  {
    name: "React",
    icon: <FaReact size={28} />,
    top: "51%",
    left: "28%",
  },

  {
    name: "CI/CD",
    icon: <FaNetworkWired size={28} />,
    top: "53%",
    left: "10%",
  },

  {
    name: "Hibernate",
    icon: <SiHibernate size={28} />,
    top: "58%",
    left: "57%",
  },

  {
    name: "REST APIs",
    icon: <TbApi size={28} />,
    top: "60%",
    left: "87%",
  },

  // =========================
  // LOWER AREA
  // =========================

  {
    name: "Docker",
    icon: <SiDocker size={28} />,
    top: "70%",
    left: "9%",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={28} />,
    top: "69%",
    left: "66%",
  },

  {
    name: "JWT",
    icon: <SiJsonwebtokens size={28} />,
    top: "76%",
    left: "48%",
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions size={28} />,
    top: "78%",
    left: "83%",
  },

  // =========================
  // BOTTOM ROW
  // =========================

  {
    name: "System Design",
    icon: <FaServer size={28} />,
    top: "91%",
    left: "38%",
  },

  {
    name: "AWS",
    icon: <SiAmazonwebservices size={28} />,
    top: "88%",
    left: "61%",
  },
];

const FloatingSkills: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-10">

      {/* Skills container */}
      <div className="relative mx-auto h-[820px] w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="
              absolute
              flex
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-blue-500/40
              bg-white/10
              text-white
              shadow-lg
              shadow-blue-500/20
              backdrop-blur-xl
              cursor-pointer
              z-10
              transition-all
            "
            style={{
              top: skill.top,
              left: skill.left,
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.18,
              rotate: 8,
              boxShadow: "0px 0px 35px rgba(59,130,246,.6)",
              zIndex: 50,
            }}
          >
            <div className="text-blue-400">
              {skill.icon}
            </div>

            <span className="mt-2 px-1 text-center text-xs font-medium leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingSkills;