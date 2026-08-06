'use client'

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const SocialProfileLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">

        <Link
          href="https://github.com/Parveen-collab"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 hover:text-blue-600 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/parveen-kumar-664b8b24b/"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 hover:text-blue-600 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </Link>

        <Link
          href="https://leetcode.com/u/Pakumarrveen/"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 hover:text-[#FFA116] transition-colors"
          aria-label="LeetCode Profile"
        >
          <SiLeetcode size={20} />
        </Link>

        <Link
          href="https://www.hackerrank.com/profile/parveen_24a12re1"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 hover:text-[#2EC866] transition-colors"
          aria-label="HackerRank Profile"
        >
          <SiHackerrank size={20} />
        </Link>

        <Link
          href="mailto:pk16061999@gmail.com"
          className="p-3 rounded-full border border-gray-300 hover:text-blue-600 transition-colors"
          aria-label="Send Email"
        >
          <Mail size={20} />
        </Link>

      </div>
    </div>
  );
};

export default SocialProfileLinks;