// import React from 'react'

// const SocialProfileLinks = () => {
//     return (
//         <div className='flex flex-col'>
//             <div className='flex items-center justify-center'>
//                 <h1>Connect</h1>
//             </div>
//             <div className='flex flex-col md:flex-row'>
//                 <div>Github Icon</div>
//                 <div>LinkedIn Icon</div>
//                 <div>Message Icon</div>
//                 <div>WhatsApp Icon</div>
//                 <div>Instagram Icon</div>
//                 <div>Facebook Icon</div>
//             </div>
//         </div>
//     )
// }

// export default SocialProfileLinks
'use client'
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialProfileLinks = () => {
  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        Connect
      </h3>

      <div className="flex items-center gap-6">

        <Link
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </Link>

        <Link
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </Link>

        <Link
          href="mailto:pk16061999@gmail.com"
          className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Send Email"
        >
          <Mail size={20} />
        </Link>

      </div>

    </div>
  );
};

export default SocialProfileLinks;