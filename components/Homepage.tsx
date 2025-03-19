import { pokemonCards } from "@/data";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:px-32 xl:px-52 lg:mt-20 px-4">
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full mt-20">
          <p className="text-2xl lg:text-3xl tracking-widest">GRADED SINGLES</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-2">
          {pokemonCards.slice(5, 10).map((pokemon, idx) => (
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

      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center w-full mt-20">
          <p className="text-2xl lg:text-3xl tracking-widest">BOOSTER PACKS</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-2">
          {pokemonCards.slice(10, 15).map((pokemon, idx) => (
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

export default Homepage;
