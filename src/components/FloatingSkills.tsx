"use client";

import { motion } from "framer-motion";
import React from "react";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaGitAlt,
    FaPython,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiSpringboot,
    SiApachekafka,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

type Skill = {
    name: string;
    icon: React.ReactNode;
    top: string;
    left: string;
};

const skills: Skill[] = [
    { name: "Java", icon: <FaJava size={28} />, top: "8%", left: "15%" },
    { name: "JavaScript", icon: <FaJs size={28} />, top: "20%", left: "8%" },
    { name: "Python", icon: <FaPython size={28} />, top: "35%", left: "18%" },

    { name: "HTML", icon: <FaHtml5 size={28} />, top: "12%", left: "35%" },
    { name: "CSS", icon: <FaCss3Alt size={28} />, top: "28%", left: "42%" },
    { name: "React", icon: <FaReact size={28} />, top: "50%", left: "30%" },
    { name: "Next.js", icon: <SiNextdotjs size={28} />, top: "10%", left: "60%" },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={28} />,
        top: "70%",
        left: "60%",
    },

    {
        name: "Spring Boot",
        icon: <SiSpringboot size={28} />,
        top: "42%",
        left: "72%",
    },
    { name: "REST APIs", icon: <TbApi size={28} />, top: "58%", left: "80%" },
    { name: "Microservices", icon: <TbApi size={28} />, top: "18%", left: "78%" },
    { name: "Spring Security", icon: <TbApi size={28} />, top: "30%", left: "62%" },
    { name: "Hibernate", icon: <TbApi size={28} />, top: "58%", left: "55%" },
    { name: "JWT", icon: <TbApi size={28} />, top: "78%", left: "45%" },

    { name: "MySQL", icon: <SiMysql size={28} />, top: "30%", left: "55%" },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql size={28} />,
        top: "72%",
        left: "78%",
    },
    { name: "MongoDB", icon: <SiMongodb size={28} />, top: "82%", left: "20%" },

    { name: "Git", icon: <FaGitAlt size={28} />, top: "8%", left: "48%" },
    { name: "Docker", icon: <TbApi size={28} />, top: "72%", left: "8%" },
    { name: "AWS", icon: <TbApi size={28} />, top: "85%", left: "58%" },
    { name: "CI/CD", icon: <TbApi size={28} />, top: "52%", left: "10%" },
    { name: "GitHub Actions", icon: <TbApi size={28} />, top: "82%", left: "82%" },

    {
        name: "Apache Kafka",
        icon: <SiApachekafka size={28} />,
        top: "10%",
        left: "88%",
    },
    {
        name: "System Design",
        icon: <TbApi size={28} />,
        top: "90%",
        left: "38%",
    },
    {
        name: "Design Patterns",
        icon: <TbApi size={28} />,
        top: "65%",
        left: "40%",
    },
    { name: "DSA", icon: <TbApi size={28} />, top: "45%", left: "90%" },
    {
        name: "Event-Driven",
        icon: <TbApi size={28} />,
        top: "92%",
        left: "70%",
    },
];

const FloatingSkills: React.FC = () => {
    return (
        <section className="relative w-full py-5">

            {/* Optional title */}
            {/* <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold text-white">
                    Technical Skills
                </h2>

                <p className="mt-2 text-gray-400">
                    Technologies and tools I work with
                </p>
            </div> */}

            {/* IMPORTANT: width + height + relative */}
            <div className="relative mx-auto h-[700px] w-full max-w-6xl">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="
              absolute
              flex
              h-24
              w-24
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
                        }}
                    >
                        <div className="text-blue-400">
                            {skill.icon}
                        </div>

                        <span className="mt-2 text-center text-xs font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FloatingSkills;