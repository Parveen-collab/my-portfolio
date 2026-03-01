// import React from 'react'

// const ProfileDetails = () => {
//     return (
//         <div>
//             <div>
//                 <h1>Hi, I'm Parveen Kumar</h1>
//                 <h3>Full Stack Engineer | AI Integration</h3>
//             </div>
//             <div className='flex flex-col md:flex-row'>
//                 <div>
//                     <ul>
//                         <li>AI Enthusiast</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>Machine Learning Engineer</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>Deep Learning Expert</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>Computer Vision Researcher</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>Developer</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className='flex flex-col md:flex-row'>
//                 <div>
//                     <ul>
//                         <li>icon</li>
//                         <li>Location</li>
//                         <li>Patna, Bihar, India.</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>icon</li>
//                         <li>Expertise</li>
//                         <li>Frontend | Backend | AI</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul>
//                         <li>icon</li>
//                         <li>Connect</li>
//                         <li>pk16061999@gmail.com</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProfileDetails
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
          Full-Stack Engineer building scalable platforms with AI integration
        </h2>

        <p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
          I design and develop production-ready web applications using 
          Next.js, Spring Boot, PostgreSQL, and modern cloud practices.
          Focused on building secure, scalable systems for global users.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </Link>

        <Link
          href="/resume.pdf"
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
          ReactJs
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors"> 
          Spring Boot
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          MySQL
        </span>
        <span className="px-3 py-1 rounded-full border hover:text-blue-600 transition-colors">
          AI Integration
        </span>
      </div>

    </section>
  );
};

export default ProfileDetails;