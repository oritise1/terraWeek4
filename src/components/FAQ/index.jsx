import React from 'react'
import Dropdown from '../DropDown/index'

const FAQ = () => {
    return (
        <div className='py-20'>
            <h3 className=' text-center font-black text-medium font-Heebo mb-10'>CHALLENGE FAQs</h3>
            <div className='flex flex-wrap items-center justify-center gap-4 min-h-screen'>
                <Dropdown title="How can I get help if I'm stuck on a challenge?" defaultOpen={false}>
                    <p>The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.</p>
                </Dropdown>
                <Dropdown title="How do I submit my solution?">
                    <p>We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project.</p>
                </Dropdown>
                <Dropdown title="Is there an official solution I can take a look at?">
                    <p>We don't provide "official" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.</p>
                </Dropdown>
                <Dropdown title="Do I get a code review when I post my solution?">
                    <p>Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others.</p>
                </Dropdown>
                <Dropdown title="Can I use libraries/frameworks on these projects?">
                    <p>Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.</p>
                </Dropdown>
                <Dropdown title="Can I use these projects in my portfolio?">
                    <p>Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!</p>
                </Dropdown>
                <Dropdown title="How often are new challenges added?">
                    <p>We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.</p>
                </Dropdown>
                <Dropdown title="What is the difference between the desktop-design, mobile-design, and desktop-preview images in my starter code?">
                    <p>The desktop-design and mobile-design images show you how the layout should look at large and small screen sizes. The desktop design is 1440px wide, and the mobile design is 375px. However, try building projects to look good on all screen sizes. The desktop-preview image is a preview image used in the README file. You don’t need to reference this while building the project.</p>
                </Dropdown>
                <Dropdown title="Can I use these challenges within my own free or commercial content/tutorials/projects?">
                    <p>Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions.</p>
                </Dropdown>
            </div>
        </div>
    )
}

export default FAQ