import React from 'react'
import RightSide from '../../assets/rightsideImage.jpg'
import Button from '../Button'

const Challeges = () => {
    return (
        <div className='py-6 w-full'>
            <div className='px-20 py-10'>
                <div className='border bg-white p-6 rounded-lg flex justify-between flex-wrap gap-4'>
                    <div className='py-[110px] '>
                        <div className='flex flex-wrap justify-between gap-[10px] '>
                            <nav className='flex flex-wrap justify-between gap-4'>
                                <p className='rounded-3xl px-2 py-1 mt-[-2px] text-blue-900 bg-gray-300 font-Barlow font-semibold text-lg'>FREE</p>
                                <p className='text-blue-300 font-semibold text-lg font-Barlow'>HTML</p>
                                <p className='text-blue-900 font-semibold text-lg font-Barlow'>CSS</p>
                                <p className='text-red-800 font-semibold text-lg font-Barlow'>JS</p>
                                <p className='text-green-500 font-semibold text-lg font-Barlow'>API</p>
                            </nav>
                            <span className='flex flex-wrap justify-between gap-1 border border-yellow-600 pt-1 ml-[50px] rounded-lg '>
                                <p className='px-3 pt-1 bg-yellow-600 rounded-bl-lg rounded-tl-lg text-white mt-[-5px] font-bold text-xl font-Barlow'>3</p>
                                <p className='pr-2 text-yellow-600 font-bold text-xl font-Barlow'> INTERMEDIATE</p>
                            </span>
                        </div>
                        <p className='font-semibold text-[28px] my-7 font-Barlow'>URL shortening API landing page</p>
                        <p className='w-[560px] mb-8'>
                            Integrate with the Clean URI link shortening API and play with browser storage in this landing page challenge.
                        </p>
                        <Button color='bg-red-600' hoverColor='hover:bg-red-800' paddingX='px-14' paddingY='py-4' textFont='text-base'>
                            START CHALLENGE
                        </Button>
                    </div>
                    <div className='w-[550px] '>
                        <img src={RightSide} alt='Shortly Image' width={550} height={650} className='rounded-lg' />
                        <span className='flex flex-wrap gap-2 mt-5'>
                            <Button>DESKTOP DESIGN </Button>
                            <Button color="bg-gray-300" hoverColor="hover:bg-gray-400" textColor="text-black">
                                ACTIVE STATES
                            </Button>
                            <Button color="bg-gray-300" hoverColor="hover:bg-gray-400" textColor="text-black">
                                MOBILE DESIGN
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challeges