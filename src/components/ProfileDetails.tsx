"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const ProfileDetails = () => {
  return (
    <section className="flex flex-col gap-7">

      {/* Intro */}
      <div>
        {/* Small label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
          Full-Stack Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I'm{" "}
          <span className="text-blue-500">
            <TypeAnimation
              sequence={[
                "Parveen Kumar",
                3000,
              ]}
              wrapper="span"
              speed={70}
              cursor={false}
              repeat={0}
            />
          </span>
        </h1>

        {/* Role */}
        <div className="mt-5 min-h-[32px] text-lg font-medium text-white/60 sm:text-xl">
          <TypeAnimation
            sequence={[
              "Backend Engineer",
              2500,
              "Full-Stack Software Engineer",
              2500,
              "Java & Spring Boot Developer",
              2500,
            ]}
            speed={55}
            repeat={Infinity}
            cursor
          />
        </div>

        {/* Short description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
          I build scalable web applications and backend systems
          with a focus on clean architecture, secure APIs,
          responsive interfaces, and production-ready software.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="#projects"
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-500
          "
        >
          View Projects
        </Link>

        <Link
          href="pdf/Master_Resume_for_Frontend_Engineer.pdf"
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            border
            border-white/15
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:border-blue-500/40
            hover:text-blue-400
          "
        >
          Download Resume
        </Link>
      </div>

      {/* Tech Stack */}
      <div className="flex max-w-xl flex-wrap gap-2.5">
        {[
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
          "MySQL",
        ].map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-1.5
              text-xs
              font-medium
              text-white/55
              transition
              hover:border-blue-500/30
              hover:text-blue-400
            "
          >
            {tech}
          </span>
        ))}
      </div>

    </section>
  );
};

export default ProfileDetails;