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
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  top: string;
  left: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 size={28} />, top: "10%", left: "15%" },
  { name: "CSS", icon: <FaCss3Alt size={28} />, top: "35%", left: "10%" },
  { name: "JavaScript", icon: <FaJs size={28} />, top: "25%", left: "40%" },
  { name: "React", icon: <FaReact size={28} />, top: "60%", left: "30%" },
  { name: "Next.js", icon: <SiNextdotjs size={28} />, top: "20%", left: "70%" },
  { name: "Tailwind", icon: <SiTailwindcss size={28} />, top: "70%", left: "65%" },
  { name: "Java", icon: <FaJava size={28} />, top: "45%", left: "80%" },
  { name: "Python", icon: <FaPython size={28} />, top: "75%", left: "45%" },
  { name: "MongoDB", icon: <SiMongodb size={28} />, top: "55%", left: "55%" },
  { name: "Git", icon: <FaGitAlt size={28} />, top: "15%", left: "55%" },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 text-white relative">

      {/* Title */}
      <div className="text-4xl font-bold px-35 mb-12">
        <h1 className="text-4xl font-bold text-green-400">My Skills</h1>
        <p className="text-gray-400 mt-2">
          Technical expertise honed with curiosity to solve complex problems
        </p>
      </div>

      {/* Skills Container */}
      <div className="relative max-w-5xl mx-auto h-[400px] rounded-2xl shadow-lg overflow-hidden">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center
            w-20 h-20 rounded-full bg-gray-800
            hover:scale-110 transition duration-300
            shadow-[0_0_15px_rgba(34,197,94,0.4)]
            animate-float"
            style={{ top: skill.top, left: skill.left }}
          >
            {skill.icon}
            <span className="text-xs mt-1">{skill.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;