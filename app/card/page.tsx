
import CardDetails from '@/components/CardDetails'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TestMotion from '@/components/Practice'
import React from 'react'




const page = () => {
  return (
    <div className="flex flex-col bg-gray-100 overflow-x-hidden">
      <Navbar />
      <CardDetails />
      <CTA />  
      <Footer />
    </div>
  )
}

export default page