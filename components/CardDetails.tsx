"use client"
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { pokemonCards } from "@/data";
import Link from "next/link";
import { ChevronRight, Minus, Plus } from "lucide-react";

const CardDetails = () => {
  return (
    <div className="flex flex-col mt-44">
      <div className="flex flex-col lg:flex-row justify-between  gap-8 w-full px-8 pb-20 border-b-[1px] xl:px-60">
        <section className="flex items-center justify-center p-2 rounded-md text-black w-[68%]">
          <Image
            height={500}
            width={500}
            src="/assets/images/pokemon15.png"
            alt="pokemon card main image"
            className=""
          />
        </section>

        <section className="flex flex-col gap-2 lg:w-[32%] text-base lg:text-lg">
          <p className="tracking-widest text-sm text-gray-600">OBSIDIAN FLAMES</p>
          <p className="font-bold text-2xl lg:text-2xl  tracking-widest">CHARIZARD DRAGON STORM</p>
          <p className="text-2xl lg:text-xl pb-8 border-b-[1px] border-gray-300">$27.99</p>

          <p className="text-sm lg:text-base mt-6">As the next best set for value after Boosters, this product will appeal to general consumers and increase exposure to ONE PIECE Card Game in stores!The packaging doubles as a card case, making this product more economical, accessible, and collectible!</p>

          <div className="flex flex-col my-6">
            <p className="text-base"><span className="font-bold">Grade:</span> PSA 9</p>
            <p className="text-base"><span className="font-bold">Size:</span> 5x4</p>
          </div>

          <p className="text-base"><span className="font-bold">Stock:</span> 4 Left</p>

          <div className="flex flex-col my-2">
            <p className="text-base"><span className="font-bold">Set:</span> Obsidian Flames</p>
            <p className="text-base"><span className="font-bold">Year:</span> 2013</p>
          </div>



          <p className="text-sm lg:text-base italic">*For single sales, or if product is temporarily sold out, we may have more available - Please contact us via direct message or email walidscollection@gmail.com</p>
          <p className="text-sm lg:text-base font-bold">FREE SHIPPING on orders above $100</p>

          <div className="flex gap-1 border-[1.5px] border-gray-300 w-[120px] h-[48px] my-4">
            <div className="w-[40px] h-[48px] flex items-center justify-center">
                <Minus size={15}/>
            </div>
            <div className="w-[40px] h-[48px] flex items-center justify-center text-sm">
                <p>1</p>
            </div>
            <div className="w-[40px] h-[48px] flex items-center justify-center">
                <Plus size={15}/>
            </div>
          </div>

          <Link
            href="/pricing"
            className="relative w-full h-[45px] bg-black overflow-hidden group z-10 border-[1.5px] border-black mt-4"
          >
            <Button className="absolute top-0 h-full w-full flex justify-center items-center  tracking-wide bg-transparent">
              <p className="z-10 group-hover:text-black duration-700 transition-all text-sm cursor-pointer tracking-widest">
                ADD TO CART
              </p>
            </Button>
            <p className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center font-semibold tracking-wide -ml-[28rem] group-hover:ml-0 duration-700 transition-all"></p>
          </Link>
        </section>
      </div>

      <div className="flex justify-center w-full border-t-[1px] border-gray-300 pt-20">
        <p className="text-2xl lg:text-3xl tracking-widest">RELATED PRODUCTS</p>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-6 xl:px-52">
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
    </div>
  );
};

export default CardDetails;
