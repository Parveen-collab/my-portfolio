import Navbar from '@/src/components/Navbar'
import ProfileDetails from '@/src/components/ProfileDetails'
import ProfilePhoto from '@/src/components/ProfilePhoto'
import SocialProfileLinks from '@/src/components/SocialProfileLinks'
import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-col md:flex-row'>
                <ProfilePhoto />
                <ProfileDetails />
            </div>
            <SocialProfileLinks />
        </div>
    )
}

export default Home