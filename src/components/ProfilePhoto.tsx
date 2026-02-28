import Image from 'next/image'
import React from 'react'

const ProfilePhoto = () => {
    return (
        <div
            className='bg-violet-500 rounded-full w-[180px] h-[180px]'>
            <Image
                src="/Image/profile-photo.jpeg"
                alt="Parveen Kumar"
                width={150}
                height={150}
                className="rounded-full"
            />
        </div >
    )
}

export default ProfilePhoto