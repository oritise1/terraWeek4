import { DiscordLogo } from '@phosphor-icons/react'
import Button from '../Button/index'
import React from 'react'

const Discord = () => {
    return (
        <div className='px-7 w-full pb-24 pt-7'>
            <div className='bg-blue-800 rounded-lg text-center px-36 py-20'>
                <span className='text-white flex gap-4 justify-center  text-3xl font-black font-Barlow mb-20'>
                    <DiscordLogo size={48} color="#ffff" weight="bold" />
                    <p className='mt-2'>Discord</p>
                </span>
                <p className='text-xl font-black font-Barlow mb-10 text-white'>JOIN OUR DISCOR COMMUNITY</p>
                <p className='text-2xl font-semibold font-Barlow mb-10 text-white'>Join thousands of Frontend Mentor community members taking the challenges, sharing resources, helping each other, and chatting about all things front-end!</p>
                <Button color="bg-white" hoverColor="hover:bg-gray-200" textColor="text-blue-800" paddingX='px-8' paddingY='py-3'>
                    JOIN OUR DISCORD
                </Button>
            </div>
        </div>
    )
}

export default Discord