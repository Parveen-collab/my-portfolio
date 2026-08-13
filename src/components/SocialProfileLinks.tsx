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

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Parveen-collab",
    icon: Github,
    hoverClass: "hover:border-white/40 hover:bg-white/5 hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parveen-kumar-664b8b24b/",
    icon: Linkedin,
    hoverClass:
      "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Pakumarrveen/",
    icon: SiLeetcode,
    hoverClass:
      "hover:border-[#FFA116]/50 hover:bg-[#FFA116]/10 hover:text-[#FFA116]",
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/parveen_24a12re1",
    icon: SiHackerrank,
    hoverClass:
      "hover:border-[#2EC866]/50 hover:bg-[#2EC866]/10 hover:text-[#2EC866]",
  },
  {
    name: "Email",
    href: "mailto:pk16061999@gmail.com",
    icon: Mail,
    hoverClass:
      "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
];

const SocialProfileLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(
        ({ name, href, icon: Icon, hoverClass }) => (
          <Link
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={
              href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={name}
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/[0.02]
              text-white/70
              transition-all
              duration-200
              hover:-translate-y-1
              ${hoverClass}
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            `}
          >
            <Icon size={19} />
          </Link>
        )
      )}
    </div>
  );
};

export default SocialProfileLinks;