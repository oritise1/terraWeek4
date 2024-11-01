import React from 'react'
import NavBar from '../../components/NavBar/index'
import Challeges from '../../components/Challenges'
import Brief from '../../components/Brief'
import FAQ from '../../components/FAQ'
import Discord from '../../components/Discord'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <div className='w-full h-auto bg-gray-100'>
      <NavBar />
      <div className='sticky top-0 bottom-0 bg-gray-100 w-full'>
        <hr />
        <h3 className=' px-4 py-4 ml-10 w-[150px] font-Heebo font-semibold text-xl border-x'>
          CHALLENGE
        </h3>
        <hr />
      </div>
      <Challeges />
      <Brief />
      <FAQ />
      <Discord />
      <Footer />
    </div>
  )
}

export default LandingPage
