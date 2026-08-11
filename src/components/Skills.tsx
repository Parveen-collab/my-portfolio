"use client";

import React from "react";
import FloatingSkills from "./FloatingSkills";

const Skills: React.FC = () => {
  return (
    <section className="relative text-white">

      {/* Title */}
      {/* <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl font-bold">
          Skills
        </h1>

        <p className="text-gray-400 mt-2">
          Technical expertise honed with curiosity to solve complex problems
        </p>
      </div> */}

      {/* Floating Skills */}
      <FloatingSkills />

    </section>
  );
};

export default Skills;