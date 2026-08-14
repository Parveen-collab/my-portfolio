"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import SocialProfileLinks from "@/src/components/SocialProfileLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="
        border-t
        border-white/10
        bg-[#0d1b13]
        px-6
        py-10
        text-white
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            text-sm
            sm:gap-5
            sm:text-base
          "
        >
          <Link
            href="#home"
            className="
              text-white/60
              transition-colors
              duration-200
              hover:text-blue-400
            "
          >
            Home
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="#about"
            className="
              text-white/60
              transition-colors
              duration-200
              hover:text-blue-400
            "
          >
            About Me
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="#skills"
            className="
              text-white/60
              transition-colors
              duration-200
              hover:text-blue-400
            "
          >
            Skills
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="#projects"
            className="
              text-white/60
              transition-colors
              duration-200
              hover:text-blue-400
            "
          >
            Projects
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="#contact"
            className="
              text-white/60
              transition-colors
              duration-200
              hover:text-blue-400
            "
          >
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="mt-7 flex items-center justify-center gap-4">

          <SocialProfileLinks/>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-white/50">
          Designed & Built by{" "}
          <span className="font-medium text-white/70">
            Parveen Kumar
          </span>{" "}
          {currentYear}©
        </p>

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
        border-blue-400/50
        text-white/70
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-blue-400
        hover:bg-blue-500/10
        hover:text-blue-400
      "
    >
      {children}
    </Link>
  );
};

export default Footer;