
"use client"
import CardDetails from '@/components/CardDetails'
import { CartProvider } from '@/components/CartContext'
import CartDrawer from '@/components/CartDrawer'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TestMotion from '@/components/Practice'
import React from 'react'




const page = () => {
  return (
    <div className="flex flex-col bg-gray-100 overflow-x-hidden">
      <CartProvider>
        <Navbar />
        <CartDrawer />
        <CardDetails />
        <CTA />  
        <Footer />

      </CartProvider>
    </div>
  )
}

export default page