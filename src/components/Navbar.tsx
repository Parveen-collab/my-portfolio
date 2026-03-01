// 'use client'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="flex flex-col md:flex-row">
//         <div>
//           <div>PK</div>
//           <div>Parveen Kumar</div>
//           <div>NextJs . SpringBoot . Developer</div>
//         </div>
//         <div>
//           <ul className='flex flex-col md:flex-row'>
//             <li>Home</li>
//             <li>Projects</li>
//             <li>Gallery</li>
//             <li>Skills</li>
//             <li>Certificates</li>
//             <li>Blogs</li>
//             <li>Resume</li>
//             <li>About me</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>

//     </nav>
//   )
// }

// export default Navbar
'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full border-b dark:border-gray-800 dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wide">
            Parveen Kumar
          </span>
          <span className="text-sm text-white-500 dark:text-gray-400">
            Full-Stack Engineer | AI Integration
          </span>
        </div>

        {/* Right Section */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link></li>
          <li><Link href="#resume" className="hover:text-blue-600 transition-colors">Resume</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar