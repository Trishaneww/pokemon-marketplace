import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { pokemonCards } from "@/data";

const SlabsHero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 xl:px-52 mt-44 z-10 px-4 pb-8">
        <Image
          width={450}
          height={450}
          src="/assets/images/hero4.png"
          alt="prismatic evolution pictures"
          className="hidden lg:flex"
          priority
        />

        <div className="flex flex-col">
          <p className="tracking-widest text-4xl lg:text-5xl text-center">
            GRADED SLABS
          </p>
        </div>

        <div className="flex justify-center lg:hidden mt-8">
          <Image
            width={200}
            height={200}
            src="/assets/images/hero4.png"
            alt="prismatic evolution pictures hidden"
            priority
          />

          <Image
            width={200}
            height={200}
            src="/assets/images/hero5.png"
            alt="prismatic evolution pictures"
            priority
          />
        </div>

        <Image
          width={450}
          height={450}
          src="/assets/images/hero5.png"
          alt="prismatic evolution pictures hidden"
          className="hidden lg:flex"
          priority
        />
      </div>

      <p className="tracking-widest text-base text-center mt-6 text-gray-600 border-y-[1px] border-gray-300 py-5">15 PRODUCTS</p>

      <div className="flex flex-wrap justify-center lg:justify-between items-center lg:px-32 xl:px-52 gap-6 mt-8 lg:mt-32">

          {pokemonCards.slice(0, 15).map((pokemon, idx) => (
            <div
              className="flex flex-col max-w-[150px] lg:max-w-[250px] mt-6"
              key={idx}
            >
              <Link href="/card">
                <div className="flex items-center justify-center p-2 rounded-md text-black">
                  <Image
                    height={350}
                    width={350}
                    src={pokemon.src}
                    alt={pokemon.title}
                    className="hover:scale-105 duration-500 transition-transform ease-in-out"
                  />
                </div>
              </Link>

              <section className="flex flex-col items-center mt-2 text-black text-center">
                <p className="tracking-widest text-[15px]">{pokemon.title}</p>
                {/* <p className="">{pokemon.descr}</p> */}
                <p className="text-[15px] mt-1 text-gray-700">
                  {pokemon.price}
                </p>
                {/* <Link href="/">
                  <Button className="h-[46px] w-full mt-2 text-base cursor-pointer">
                    Add to Cart
                  </Button>
                </Link> */}
              </section>
            </div>
          ))}
        </div>
    </div>
  );
};

export default SlabsHero;
