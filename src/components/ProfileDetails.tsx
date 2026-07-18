import React from "react";
import Link from "next/link";

const ProfileDetails = () => {
  return (
    <section className="flex flex-col gap-6">

      {/* Intro */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I&apos;m <span className="text-blue-600">Parveen Kumar</span>
        </h1>

        <h2 className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Frontend Engineer | Aspiring Backend Engineer | Aspiring Full-Stack Software Engineer

          Java • Spring Boot • React • Next.js • Docker • AWS

          B.S. Computer Science & Data Analytics | IIT Patna
          German A1-A2 (Learning B1)
        </h2>

        <p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
          I build scalable full-stack and backend systems using Java, Spring Boot, Spring Security, React, Next.js, Docker, AWS.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </Link>

        <Link
          href="/resume"
          className="px-6 py-3 border border-gray-400 rounded-lg font-medium hover:text-blue-600 transition-colors"
        >
          Download Resume
        </Link>
      </div>

      {/* Tech Stack Highlights */}
      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          Next.js
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          Spring Boot
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          MySQL
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          Microservice
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          Apache Kafka
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          AI Integration
        </span>
      </div>

    </section>
  );
};

export default ProfileDetails;
