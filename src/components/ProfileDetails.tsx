import React from 'react'

const ProfileDetails = () => {
    return (
        <div className='bg-indigo-500'>
            <div className='bg-green-500'>
                <h1>Hi, I'm Parveen Kumar</h1>
                <h3>Full Stack Engineer | AI Integration</h3>
            </div>
            <div className='flex flex-col md:flex-row bg-yellow-500'>
                <div className='bg-red-500'>
                    <ul>
                        <li>AI Enthusiast</li>
                    </ul>
                </div>
                <div className='bg-violet-500'>
                    <ul>
                        <li>Machine Learning Engineer</li>
                    </ul>
                </div>
                <div className='bg-indigo-500'>
                    <ul>
                        <li>Deep Learning Expert</li>
                    </ul>
                </div>
                <div className='bg-blue-500'>
                    <ul>
                        <li>Computer Vision Researcher</li>
                    </ul>
                </div>
                <div className='bg-yellow-500'>
                    <ul>
                        <li>Developer</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-orange-500'>
                <div className='bg-pink-500'>
                    <ul>
                        <li>icon</li>
                        <li>Location</li>
                        <li>Patna, Bihar, India.</li>
                    </ul>
                </div>
                <div className='bg-gray-500'>
                    <ul>
                        <li>icon</li>
                        <li>Expertise</li>
                        <li>Frontend | Backend | AI</li>
                    </ul>
                </div>
                <div className='bg-purple-500'>
                    <ul>
                        <li>icon</li>
                        <li>Connect</li>
                        <li>pk16061999@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails