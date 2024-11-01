import { Book, NotePencil, Lightbulb, X, Check } from '@phosphor-icons/react'
import React from 'react'

const Brief = () => {
    return (
        <div className='px-20 py-10 flex justify-between flex-wrap gap-3'>
            <div className='border bg-white p-6 rounded-lg w-[585px] '>
                <span className='inline-flex'>
                    <NotePencil size={55} color="#000" />
                    <p className='text-3xl font-Barlow font-medium ml-4'>Brief</p>
                </span>
                <p className='mb-6'> Your challenge is to integrate with the <a href='https://cleanuri.com/docs' target={'_blank'} className='underline'> Clean URI API </a> to create shortened URLs and display them like in the designs</p>
                <p className='mb-6'>You can use any JavaScript framework/library on the front-end such as <a href='https://reactjs.org/' target={'_blank'} className='underline'>React</a> or <a href='https://vuejs.org/' target={'_blank'} className='underline'>Vue</a>. You also have complete control over which packages you use to do things like make HTTP requests or style your project.</p>
                <p className='mb-6'>Your users should be able to:</p>
                <ul className='list-disc pl-10 space-y-1 mb-6'>
                    <li>Shorten any valid URL</li>
                    <li>See a list of their shortened links, even after refreshing the browser</li>
                    <li>Copy the shortened link to their clipboard in a single click</li>
                    <li>
                        Receive an error message when the <code className='bg-gray-300'>  form </code>is submitted if:
                        <li className='list-inside pl-2'>The <code className='bg-gray-300'>  input</code> field is empty</li>
                    </li>
                    <li>View the optimal layout for the interface depending on their device's screen size</li>
                    <li>See hover and focus states for all interactive elements on the page</li>
                </ul>
                <p className='mb-6'>
                    Download the starter code and go through the <code className='bg-gray-300'> README.md </code> file. This will provide further details about the project. The <code className='bg-gray-300'> style-guide.md </code> file is where you'll find colors, fonts, etc.
                </p>
                <p>Want some support on the challenge? <a href='https://#' target={'_blank'} className='underline'> Join our community </a> and ask questions in the help channel.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 flex-col w-[585px] '>
                <div className='border bg-white p-6 rounded-lg w-[585px] flex flex-col'>
                    <span className='inline-flex mb-5'>
                        <Book size={55} weight='fill' color="#000" />
                        <p className='text-3xl font-Barlow font-medium ml-4'>Assets provided</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <X size={32} color="#f50031" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>Figma design file access - Unlock with Pro</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <Check size={32} color="#00ff4c" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>JPEG design files for mobile & desktop layouts</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <Check size={32} color="#00ff4c" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>Style guide for fonts, colors, etc.</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <Check size={32} color="#00ff4c" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>Optimized image assets</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <Check size={32} color="#00ff4c" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>README file to help you get started</p>
                    </span>
                    <span className='inline-flex mb-2'>
                        <Check size={32} color="#00ff4c" weight="bold" />
                        <p className='text-xl font-Barlow font-medium ml-4'>HTML file with pre-written content</p>
                    </span>
                </div>
                <div className='border bg-white p-6 rounded-lg w-[585px]'>
                    <span className='inline-flex mb-7'>
                        <Lightbulb size={55} color="#f1f500" weight="fill" />
                        <p className='text-3xl font-Barlow font-medium ml-4'>Ideas to test yourself</p>
                    </span>
                    <ul className='list-decimal pl-10 space-y-1 mb-6'>
                        <li>
                            Write your styles using a pre-processor, such as
                            <a href='https://sass-lang.com/' target={'_blank'} className='underline'> Sass</a>
                            , <a href='http://lesscss.org/' target={'_blank'} className='underline'>Less </a>
                            or <a href='http://stylus-lang.com/' target={'_blank'} className='underline'>Stylus </a>
                        </li>
                        <li>Train your eye for detail by getting your solution as close to the design as you can</li>
                        <li>Try estimating the time it will take for you to build the project. Then see if the time taken matches up to your estimate. Project estimations are a skill that is often overlooked but is essential for professional developers</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brief