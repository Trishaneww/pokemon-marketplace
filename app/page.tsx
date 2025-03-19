"use client"
import { CartProvider } from '@/components/CartContext'
import CartDrawer from '@/components/CartDrawer'
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
    <CartProvider>
      <div className="flex flex-col bg-gray-100">
        {/* <TestMotion /> */}
        <Navbar />
        <CartDrawer />
        <Hero />
        <Selections />
        <Homepage />
        <CTA />
        <Footer />
        
      </div>
    </CartProvider>
  )
}

export default page