import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const ProfileDetails = () => {
  return (
    <section className="flex flex-col gap-6">

      {/* Intro */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600">
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

        <h2 className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          <TypeAnimation
            sequence={[
              "Backend Engineer", 2500,
              "Full Stack Software Engineer", 2500,
              "Java & Spring Boot Developer", 2500,
              "Open Source Contributor", 2500,
            ]}
            speed={60}
            repeat={Infinity}
            cursor={true}
          />
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
      </div>

    </section>
  );
};

export default ProfileDetails;
