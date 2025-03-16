import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { categories, pokemonCards } from "@/data";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col  lg:px-32 xl:px-52 mt-44 z-10 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 border-b-[1px] border-gray-300">
        <section className="flex flex-col items-center lg:items-start gap-4 lg:w-[50%]">
          <p className="text-3xl lg:text-6xl font-medium text-center lg:text-left">
            CATCH RARE CARDS & BUILD YOUR ULTIMATE COLLECTION!
          </p>
          <p className="text-lg text-center lg:text-left">
            Looking for ultra-rare and vintage Pokémon cards? We’ve got the
            hard-to-find gems that every collector needs. Start building your
            dream deck today!
          </p>

          <Link
            href="/pricing"
            className="relative w-[240px] h-[52px] bg-black overflow-hidden group z-10 border-[1.5px] border-black"
          >
            <Button className="absolute top-0 h-full w-full flex justify-center items-center  tracking-wide bg-transparent">
              <p className="z-10 group-hover:text-black duration-700 transition-all text-sm cursor-pointer tracking-widest">
                SHOP LATEST ARRIVALS
              </p>
            </Button>
            <p className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
          </Link>
        </section>
        <Image
          width={600}
          height={600}
          src="/assets/images/hero2.png"
          alt="prismatic evolution pictures"
          priority
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full mt-20">
          <p className="text-2xl lg:text-3xl tracking-widest">
            LATEST ARRIVALS
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-2">
          {pokemonCards.slice(0, 5).map((pokemon, idx) => (
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

              <section className="flex flex-col items-center mt-2 text-black">
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

        <Link
          href="/pricing"
          className="relative w-[160px] h-[46px] bg-black overflow-hidden group z-10 border-[1.5px] border-black mt-10"
        >
          <Button className="absolute top-0 h-full w-full flex justify-center items-center  tracking-wide bg-transparent">
            <p className="z-10 group-hover:text-black duration-700 transition-all text-sm cursor-pointer tracking-widest">
              VIEW MORE
            </p>
          </Button>
          <p className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
