import React from 'react'
import Logo from '../../assets/logo.svg'
import { DiscordLogo, FacebookLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import Button from '../Button'

const Footer = () => {
    return (
        <div className='bg-white'>
        <div className='px-7 w-full pt-16'>
            <div className='flex flex-wrap justify-between'>
                <img src={Logo} alt='Project Logo' />
                <span className='flex gap-6 cursor-pointer'>
                    <DiscordLogo size={40} color="#4477ca" weight="fill" href='https://discord.gg/UAfh3qzhYb' target='_blank' />
                    <XLogo size={40} color="#4477ca" weight="fill" href='https://twitter.com/frontendmentor' target='_blank' />
                    <LinkedinLogo size={40} color="#4477ca" weight="fill" href='https://www.linkedin.com/company/frontend-mentor' target='_blank' />
                    <FacebookLogo size={40} color="#4477ca" weight="fill" href='https://www.facebook.com/frontendmentor' target='_blank' />
                </span>
            </div>
            <div className='flex flex-wrap justify-between mt-14 mb-14 '>
                <span>
                    <h3 className='font-Barlow text-blue-700 text-3xl font-medium'>Stay up to date</h3>
                    <p className='w-[300px] mt-6 text-base font-Barlow font-medium'>with new challenges, featured solutions, selected articles and our latest news</p>
                    <input type='text' placeholder='email@example.com' className='h-10 w-[280px] mr-4 text-xl p-2 border mt-6' />
                    <Button color="bg-red-500" hoverColor="hover:bg-red-600" textColor="text-white" paddingX='px-8' paddingY='py-3'>
                        SUBSCRIBE
                    </Button>
                </span>
                <span className='flex flex-wrap justify-around gap-20'>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                       <p className='text-Barlow text-xl font-extrabold text-black mb-4'>Frontend Mentor </p>
                        <li>Unlock Pro</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                       <p className='text-Barlow text-xl font-extrabold text-black mb-4'>Explore </p>
                        <li>Learning paths</li>
                        <li>Challenges</li>
                        <li>Solutions</li>
                        <li>Articles</li>
                        <li>Resources</li>
                        <li></li>
                    </ul>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                        <p className='text-Barlow text-xl font-extrabold text-black mb-4'>Community</p>
                        <li>Discord</li>
                        <li>Guidelines</li>
                    </ul>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                        <p className='text-Barlow text-xl font-extrabold text-black mb-4'>For companies</p>
                        <li>Hire Developers</li>
                        <li>Train Developers</li>
                        <li></li>
                    </ul>
                </span>
            </div>
        </div>
        <hr />
            <div className='px-7 w-full py-4 flex flex-wrap justify-between text-gray-500'>
                <h3 className='text-lg font-medium'>
                    &copy; Frontend Mentor 2019 - 2024
                </h3>
                <span className='flex flex-wrap justify-between gap-10 text-sm'>
                    <a href='https://www.iubenda.com/terms-and-conditions/68783624' target={'_blank'}>Terms</a>
                    <a href='https://www.iubenda.com/privacy-policy/68783624/cookie-policy' target={'_blank'}>Cookie Policy</a>
                    <a href='https://www.iubenda.com/privacy-policy/68783624' target={'_blank'}>Privacy Policy</a>
                    <a href='https://www.frontendmentor.io/license' target={'_blank'}>License</a>
                </span>
            </div>
        </div>
    )
}

export default Footer