'use client'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col md:flex-row">
        <div>
          <div>PK</div>
          <div>Parveen Kumar</div>
          <div>NextJs . SpringBoot . Developer</div>
        </div>
        <div>
          <ul className='flex flex-col md:flex-row'>
            <li>Home</li>
            <li>Projects</li>
            <li>Gallery</li>
            <li>Skills</li>
            <li>Certificates</li>
            <li>Blogs</li>
            <li>Resume</li>
            <li>About me</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar