"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const ProfilePhoto = () => {
  return (
    <div className="group relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 [perspective:1000px]">
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-blue-500/20" />

      <div
        className="
          relative
          h-full
          w-full
          rounded-full
          border
          border-blue-500/30
          p-1
          transition-transform
          duration-700
          ease-in-out
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* Front */}
        <div
          className="
            absolute
            inset-1
            overflow-hidden
            rounded-full
            bg-neutral-900
            [backface-visibility:hidden]
          "
        >
          <Image
            src="/Image/Professional_Photo.jpeg"
            alt="Parveen Kumar - Full-Stack Software Engineer"
            fill
            priority
            sizes="(max-width:640px) 192px, (max-width:1024px) 224px, 256px"
            className="object-cover"
          />
        </div>

        {/* Back */}
        <Link
          href="https://www.linkedin.com/in/parveen-kumar-664b8b24b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Parveen Kumar's LinkedIn profile"
          className="
            absolute
            inset-1
            flex
            flex-col
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#0A66C2]
            text-white
            transition-colors
            hover:bg-[#084f96]
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <Linkedin size={42} strokeWidth={1.8} />

          <span className="text-sm font-medium">
            LinkedIn
          </span>

          <span className="text-xs text-white/70">
            Connect with me
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePhoto;