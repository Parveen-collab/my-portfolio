import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1>🚀 Projects</h1>
      <p>A Contribution of my major works-</p>
      <div>
        <div>
        <Image
          src="/Image/profile-photo.jpeg"
          alt="Parveen Kumar - Full Stack Engineer"
          fill
          priority
          sizes="(max-width: 768px) 160px, 208px"
          className="object-cover"
        />
        <h2>Project Title</h2>
        <p>Project Description</p>
        <div>
          <div>Technologies used</div>
          <ul>
            <li>NextJs</li>
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>MySQL</li>
          </ul>
        </div>
        <button type="button">Code</button>
        <button type="button">View</button>
      </div>
      <div>
        <Image
          src="/Image/profile-photo.jpeg"
          alt="Parveen Kumar - Full Stack Engineer"
          fill
          priority
          sizes="(max-width: 768px) 160px, 208px"
          className="object-cover"
        />
        <h2>Project Title 2</h2>
        <p>Project Description 2</p>
        <div>
          <div>Technologies used</div>
          <ul>
            <li>NextJs</li>
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>MySQL</li>
          </ul>
        </div>
        <button type="button">Code</button>
        <button type="button">View</button>
      </div>
      <div>
        <Image
          src="/Image/profile-photo.jpeg"
          alt="Parveen Kumar - Full Stack Engineer"
          fill
          priority
          sizes="(max-width: 768px) 160px, 208px"
          className="object-cover"
        />
        <h2>Project Title 3</h2>
        <p>Project Description 3</p>
        <div>
          <div>Technologies used</div>
          <ul>
            <li>NextJs</li>
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>MySQL</li>
          </ul>
        </div>
        <button type="button">Code</button>
        <button type="button">View</button>
      </div>
      </div>
      
    </div>
  )
}

export default Projects