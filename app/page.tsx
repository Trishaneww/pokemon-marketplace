import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Homepage from '@/components/Homepage'
import Navbar from '@/components/Navbar'
import TestMotion from '@/components/Practice'
import Selections from '@/components/Selections'
import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col bg-gray-100 overflow-x-hidden">
      {/* <TestMotion /> */}
      <Navbar />
      <Hero />
      <Selections />
      <Homepage />
      <CTA />
      <Footer />
      
    </div>
  )
}

export default page