import React from 'react'

const SocialProfileLinks = () => {
    return (
        <div className='flex flex-col bg-blue-500'>
            <div className='flex items-center justify-center'>
                <h1>Connect</h1>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div>Github Icon</div>
                <div>LinkedIn Icon</div>
                <div>Message Icon</div>
                <div>WhatsApp Icon</div>
                <div>Instagram Icon</div>
                <div>Facebook Icon</div>
            </div>
        </div>
    )
}

export default SocialProfileLinks