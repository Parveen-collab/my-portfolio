"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const ProfilePhoto = () => {
  return (
    <div className="group w-40 h-40 md:w-52 md:h-52 [perspective:1000px]">
      <div
        className="
          relative
          w-full
          h-full
          rounded-full
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
            inset-0
            rounded-full
            overflow-hidden
            shadow-lg
            [backface-visibility:hidden]
          "
        >
          <Image
            src="/Image/Professional_Photo.jpeg"
            alt="Parveen Kumar - Full Stack Engineer"
            fill
            priority
            sizes="(max-width:768px) 160px, 208px"
            className="object-cover"
          />
        </div>

        {/* Back */}
        <Link
          href="https://linkedin.com/in/parveen-kumar-664b8b24b"
          target="_blank"
          className="
            absolute
            inset-0
            rounded-full
            bg-[#0A66C2]
            flex
            flex-col
            items-center
            justify-center
            text-white
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <Linkedin size={42} />

          <p className="text-xs opacity-90">
            LinkedIn
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePhoto;