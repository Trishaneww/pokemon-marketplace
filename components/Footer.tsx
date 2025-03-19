import { ArrowRight, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsDiscord } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className="flex flex-col lg:pt-24 pb-12 px-12 overflow-x-hidden items-center w-full text-black bg-[#FAFAFA]">
        <div className="flex flex-col gap-12 lg:gap-2 flex-wrap lg:flex-row justify-between lg:w-[80%] border-b-[1px] border-b-gray-300 pb-12">

        <section className="flex flex-col items-start justify-start gap-2 lg:max-w-[480px]">
            <p className="text-2xl tracking-widest">STAY IN TOUCH</p>
            <p className="text-base">Sign-up to hear about the latest card drops and showrooms, and get exclusive access to promotions and new feature releases.</p>

            <div className="flex items-center gap-2 mt-2">
                <Input className="border-[1px] border-gray-300 h-[48px] placeholder:text-base rounded-none" placeholder='Email'/>
                <Button className="w-[60px] text-white h-[48px] text-6xl cursor-pointer"><ChevronRight size={100}/></Button>
            </div>
            {/* <Link href="/contact" className="flex items-center gap-1 text-base group" aria-label="Link leads to contact page">
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" />
            </Link> */}
        </section>

        <section className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8  w-full">
                <div className="flex gap-4">
                    {/* <p>4</p> */}
                    <div className="flex flex-col">
                    <p className="text-2xl mb-2 tracking-widest">FOLLOW US ON</p>
                        <ul className="text-base flex gap-4 mt-1">
                            {/* <li><Link href="/#services" aria-label="navigation link">Services</Link></li>
                            <li><Link href="/work" aria-label="navigation link">Gallery</Link></li>
                            <li><Link href="/pricing" aria-label="navigation link"></Link>Pricing</li>
                            <li><Link href="/#services" aria-label="navigation link">Get a Free Audit</Link></li> */}
                            <li><Link href="/"><Instagram size={30}/></Link></li>
                            <li><Link href="/"><Facebook size={30}/></Link></li>
                            <li><Link href="/"><Twitter size={30}/></Link></li>
                            <li><Link href="/"><BsDiscord size={33}/></Link></li>
                            <li><Link href="/"><FaTiktok size={31}/></Link></li>
                        </ul>
                    </div>
                </div>
             

                {/* <div className="flex gap-4">
                    <div className="flex flex-col">
                        <ul className=" text-base flex flex-col gap-2">
                            <li><Link href="mailto:mediabystephenson@gmail.com" target="_blank" aria-label="Email us now!">trishane@figmentstudios.ca</Link></li>
                            <li>(647)-472-4119</li>
                            <li><Link href="/https://www.instagram.com/stephenson.media/" target="_blank" aria-label="View more of our work on instagram">Instagram</Link></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </section>
        </div>
        <div className="lg:w-[80%] flex gap-2 text-sm mt-8">
            <p>@2025 WALIDS COLLECTION</p>
            <p>ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer