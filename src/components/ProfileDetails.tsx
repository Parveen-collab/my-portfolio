"use client";

import Link from "next/link";
import React from "react";

const ProfileDetails = () => {
  return (
    <section className="flex max-w-3xl flex-col gap-7">
      {/* Intro */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Full-Stack Software Engineer
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I'm{" "}
          <span className="text-blue-500">
            Parveen Kumar
          </span>
        </h1>

        <h2 className="mt-5 text-xl font-medium leading-relaxed text-white/80 sm:text-2xl">
          I build scalable web applications and backend systems.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          I work across the stack using Next.js, React, Java, Spring Boot,
          and MySQL, with a focus on clean architecture, secure APIs,
          responsive interfaces, and production-ready applications.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="#projects"
          className="
            rounded-lg
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-blue-500
            hover:shadow-lg
            hover:shadow-blue-500/20
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            focus:ring-offset-[#0d1b13]
          "
        >
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-lg
            border
            border-white/20
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-blue-500
            hover:text-blue-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            focus:ring-offset-[#0d1b13]
          "
        >
          Download Resume
        </a>
      </div>

      {/* Core Stack */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {[
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
          "MySQL",
        ].map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3.5
              py-1.5
              text-sm
              text-white/60
              transition-all
              duration-200
              hover:border-blue-500/40
              hover:bg-blue-500/5
              hover:text-blue-400
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProfileDetails;