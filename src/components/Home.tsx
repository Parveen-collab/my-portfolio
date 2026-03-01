// import Navbar from '@/src/components/Navbar'
// import ProfileDetails from '@/src/components/ProfileDetails'
// import ProfilePhoto from '@/src/components/ProfilePhoto'
// import SocialProfileLinks from '@/src/components/SocialProfileLinks'
// import React from 'react'

// const Home = () => {
//     return (
//         <div className='flex flex-col min-h-screen bg-blue-500'>
//             <div className='flex flex-col md:flex-row'>
//                 <ProfilePhoto />
//                 <ProfileDetails />
//             </div>
//             <SocialProfileLinks />
//         </div>
//     )
// }

// export default Home
import ProfileDetails from '@/src/components/ProfileDetails'
import ProfilePhoto from '@/src/components/ProfilePhoto'
import SocialProfileLinks from '@/src/components/SocialProfileLinks'
import React from 'react'

const Home = () => {
  return (
    <section className="flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <ProfilePhoto />
          </div>

          {/* Profile Details */}
          <div className="flex flex-col flex-1 gap-8 text-center md:text-left">
            <ProfileDetails />
            <SocialProfileLinks />
          </div>

        </div>

      </div>

    </section>
  )
}

export default Home