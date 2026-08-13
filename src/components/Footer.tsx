"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0d1b13] text-white">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="flex flex-col items-center gap-8 text-center">
          
          {/* Name / Branding */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight transition-colors hover:text-blue-400"
            >
              Parveen Kumar
            </Link>

            <p className="mt-2 text-sm text-white/50">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            <Link
              href="#home"
              className="text-sm text-white/60 transition-colors hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              href="#skills"
              className="text-sm text-white/60 transition-colors hover:text-blue-400"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="text-sm text-white/60 transition-colors hover:text-blue-400"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="text-sm text-white/60 transition-colors hover:text-blue-400"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <SocialLink
              href="https://github.com/Parveen-collab"
              label="GitHub"
            >
              <Github size={19} />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/parveen-kumar-664b8b24b/"
              label="LinkedIn"
            >
              <Linkedin size={19} />
            </SocialLink>

            <SocialLink
              href="https://leetcode.com/u/Pakumarrveen/"
              label="LeetCode"
            >
              <SiLeetcode size={19} />
            </SocialLink>

            <SocialLink
              href="https://www.hackerrank.com/profile/parveen_24a12re1"
              label="HackerRank"
            >
              <SiHackerrank size={19} />
            </SocialLink>

            <SocialLink
              href="mailto:pk16061999@gmail.com"
              label="Email"
              external={false}
            >
              <Mail size={19} />
            </SocialLink>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {currentYear} Parveen Kumar. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Built with{" "}
            <span className="text-white/60">
              Next.js
            </span>
            {" "}·{" "}
            <span className="text-white/60">
              React
            </span>
            {" "}·{" "}
            <span className="text-white/60">
              Tailwind CSS
            </span>
          </p>

          {/* Back to top */}
          <Link
            href="#home"
            aria-label="Back to top"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white/60
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
};

const SocialLink = ({
  href,
  label,
  children,
  external = true,
}: SocialLinkProps) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        text-white/60
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:text-blue-400
      "
    >
      {children}
    </Link>
  );
};

export default Footer;