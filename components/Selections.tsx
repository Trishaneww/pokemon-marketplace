import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Selections = () => {
  return (
    <div className="xl:px-52 flex flex-col lg:flex-row gap-6 mt-20 px-4">
        <section className="flex flex-col items-center pt-10 lg:pt-20 lg:w-1/2 relative overflow-hidden bg-white h-[500px] text-lg group border-[1px] border-gray-300 text-center">
            <p className="text-2xl lg:text-3xl tracking-widest mb-2">PREMIUM SINGLES</p>
            <p>Eevee ex and its diverse array of Evolutions shine</p>
            <Link href="/" className="flex items-center group mt-4 text-blue-700">
                <p>Shop all singles</p>
                <ChevronRight className="mt-[2px]" size={20}/>
            </Link>
            <Image
                width={400}
                height={400}
                src="/assets/images/blitz.png"
                alt="pokemon booster box"
                className="absolute -bottom-28 lg:-bottom-44 group-hover:scale-110 duration-500 transition-transform ease-in-out"
            />
        </section>

        <section className="flex flex-col-reverse items-center pb-10 lg:pb-20 lg:w-1/2 relative overflow-hidden bg-white h-[500px] text-lg group border-[1px] border-gray-300 text-center">
            <p className="text-2xl lg:text-3xl tracking-widest mt-2">BOOSTER BOXES</p>
            <p>Eevee ex and its diverse array of Evolutions shine</p>
            <Link href="/" className="flex items-center group text-blue-700">
                <p className="-mt-12">Shop all ETBS</p>
                <ChevronRight className="-mt-11" size={20}/>
            </Link>
            <Image
                width={400}
                height={400}
                src="/assets/images/boosterbox.png"
                alt="pokemon booster box"
                className="absolute -top-16 lg:-top-28 group-hover:scale-110 duration-500 transition-transform ease-in-out"
            />
        </section>

    </div>
  )
}

export default Selections