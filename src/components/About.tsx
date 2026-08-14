"use client";

import React from "react";
import {
  Code2,
  Server,
  Layers3,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#141F17] px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[10%] top-[25%] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-[20%] right-[10%] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        {/* About Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-blue-500/20 bg-white/[0.03] shadow-2xl shadow-blue-500/5 sm:h-80 sm:w-80">

              {/* Decorative elements */}
              <div className="absolute -left-5 -top-5 h-20 w-20 rounded-2xl border border-blue-500/20 bg-blue-500/5" />

              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-2xl border border-blue-500/20 bg-blue-500/5" />

              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                <Code2
                  size={72}
                  strokeWidth={1.2}
                  className="text-blue-400"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Who I Am
            </p>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building software with a focus on clean architecture and real-world problems.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-7 text-white/60 sm:text-lg">
              <p>
                I'm Parveen Kumar, a Computer Science student and
                Full-Stack Software Engineer focused on building scalable
                web applications and backend systems.
              </p>

              <p>
                I work primarily with Next.js, React, TypeScript, Java,
                Spring Boot, Spring Security, and MySQL. I enjoy working
                across the stack — from creating responsive user interfaces
                to designing secure REST APIs and database-driven systems.
              </p>

              <p>
                My goal is to build software that is not only functional,
                but also maintainable, secure, performant, and ready for
                real-world use.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
              What I Do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Frontend */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-500/[0.03]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Code2 size={24} />
              </div>

              <h4 className="text-xl font-semibold">
                Frontend Engineering
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Building responsive, accessible, and maintainable
                interfaces using React, Next.js, TypeScript, and Tailwind CSS.
              </p>
            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-500/[0.03]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Server size={24} />
              </div>

              <h4 className="text-xl font-semibold">
                Backend Engineering
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Developing secure and scalable backend services with
                Java, Spring Boot, Spring Security, Hibernate, and REST APIs.
              </p>
            </div>

            {/* Software Engineering */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-500/[0.03]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Layers3 size={24} />
              </div>

              <h4 className="text-xl font-semibold">
                Software Engineering
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Designing APIs, databases, application architecture,
                containerized deployments, and CI/CD workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;