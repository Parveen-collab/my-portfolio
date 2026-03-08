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
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

type Skill = {
  name: string;
  icon: React.ReactNode;
  top: string;
  left: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 size={28} />, top: "10%", left: "20%" },
  { name: "CSS", icon: <FaCss3Alt size={28} />, top: "35%", left: "10%" },
  { name: "JavaScript", icon: <FaJs size={28} />, top: "25%", left: "40%" },

  { name: "React", icon: <FaReact size={28} />, top: "60%", left: "30%" },
  { name: "Next.js", icon: <SiNextdotjs size={28} />, top: "10%", left: "70%" },

  { name: "Tailwind", icon: <SiTailwindcss size={28} />, top: "70%", left: "70%" },

  { name: "Java", icon: <FaJava size={28} />, top: "50%", left: "85%" },

  { name: "Python", icon: <FaPython size={28} />, top: "75%", left: "45%" },

  { name: "MongoDB", icon: <SiMongodb size={28} />, top: "65%", left: "55%" },
  { name: "MySQL", icon: <SiMysql size={28} />, top: "35%", left: "60%" },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} />, top: "50%", left: "50%" },

  { name: "Git", icon: <FaGitAlt size={28} />, top: "15%", left: "55%" },

  { name: "Spring Boot", icon: <SiSpringboot size={28} />, top: "45%", left: "70%" },

  { name: "Microservices", icon: <TbApi size={28} />, top: "20%", left: "60%" },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 text-white relative">

      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold">🚀 My Skills</h1>
        <p className="text-gray-400 mt-2">
          Technical expertise honed with curiosity to solve complex problems
        </p>
      </div>

      {/* Floating Skills */}
      <div className="relative max-w-5xl mx-auto h-[420px] bg-gray-900 rounded-2xl shadow-lg overflow-hidden">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center
            w-20 h-20 rounded-full bg-gray-800
            hover:scale-110 transition duration-300
            shadow-[0_0_20px_rgba(34,197,94,0.4)]
            animate-float"
            style={{ top: skill.top, left: skill.left }}
          >
            {skill.icon}
            <span className="text-xs mt-1">{skill.name}</span>
          </div>
        ))}

      </div>

      {/* Skill Categories */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-10">

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Programming Languages</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Web Technologies</h2>
          <ul className="text-gray-300 space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Databases & Tools</h2>
          <ul className="text-gray-300 space-y-1">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Frameworks</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Spring Boot</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Core Concepts</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Explainable AI (XAI)</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-green-400 font-semibold mb-3">Soft Skills</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Adaptability</li>
            <li>Communication</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default Skills;