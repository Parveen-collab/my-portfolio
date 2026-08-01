
import Image from 'next/image'
import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
      <Image
        src="/Image/Professional_Photo.jpeg"
        alt="Parveen Kumar - Full Stack Engineer"
        fill
        priority
        sizes="(max-width: 768px) 160px, 208px"
        className="object-cover"
      />
    </div>
  )
}

export default ProfilePhoto