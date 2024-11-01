import React from 'react'
import Logo from '../../assets/logo.svg'
import { GithubLogo } from "@phosphor-icons/react";

const NavBar = () => {
    return (
        <div className='w-full h-auto py-4 pl-6'>
            <div className='flex flew-wrap justify-around gap-[200px] mt-1'>
                <img src={Logo} alt='Website Logo' className='w-1/6 h-1/6 mt-2 ml-[-40px]' />
                <div className='flex flew-wrap justify-between w-[800px] '>
                <nav className='flex flew-wrap justify-between w-full pr-10 italic gap-4 mt-2 font-Heebo font-bold text-sm'>
                    <a href='#' className='animated-underline'>LEARNING PATHS</a>
                    <a href='#' className='animated-underline'>CHALLENGES</a>
                    <a href='#' className='animated-underline'>SOLUTIONS</a>
                    <a href='#' className='animated-underline'>ARTICLES</a>
                    <a href='#' className='animated-underline'>UNLOCK PRO</a>
                </nav>
                <button className='bg-black w-[330px] text-white italic font-Heebo font-bold text-sm py-2 pl-6 rounded-3xl flex'>
                    <p className='mt-1'>LOG IN WITH GITHUB</p>
                    <span className='ml-4 '>
                        <GithubLogo size={28} weight="fill" color="#000" className='bg-white pt-2 rounded-full' />
                    </span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
