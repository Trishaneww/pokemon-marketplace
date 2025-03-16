"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Instagram, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";
import { navItems } from "@/data";
import "../styles/global.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center py-11 gap-8 px-4 lg:px-12  z-[100]  backdrop-blur-3xl h-[60px] bg-black text-[#FAFAFA] fixed top-0">
      {/* <div className="flex justify-between items-center w-full lg:w-[80%]"> */}

      <div className="hidden lg:flex gap-6 items-center w-[40%]">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              "relative dark: items-center hidden lg:flex space-x-1 tracking-widest cursor-pointer text-sm"
            )}
            aria-label="navigation link"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="flex gap-6 items-center justify-start lg:justify-center w-full lg:w-[20%] lg:min-w-[200px]">
        <Link href="/" className="" aria-label="logo">
          {/* <Image 
            width={200}
            height={200}
            src="/assets/images/logo.png"
            alt=""
          /> */}
          <p className="text-xl font-medium flex items-center">
            WALIDS COLLECTION
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex gap-6 items-center  justify-end w-[40%]">
        <Link
          href="https://www.instagram.com/figmentstudios.ca/"
          target="_blank"
          className=""
          aria-label="instagram link"
        >
          <Instagram className="hidden lg:flex" />
        </Link>
        <Link href="/" className="hidden lg:flex">
          <Search />
        </Link>
        <Link href="/" className="hidden lg:flex">
          <ShoppingBag />
        </Link>
      </div>

      <nav className="lg:hidden bg-transparent">
        <input type="checkbox" id="sidebar-active" />
        <label
          htmlFor="sidebar-active"
          className="open-sidebar-button mt-3 text-white"
        >
          <Menu size={23} />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container bg-gray-100 lg:hidden">
          <label
            htmlFor="sidebar-active"
            className="close-sidebar-button relative left-56 text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-gray-100 mb-12"
          >
            <X size={20} />
          </label>
          <div className="flex flex-col gap-2 z-50 bg-gray-100">
            {navItems.map((item, idx) => (
              <Link
                href={item.href}
                className="text-slate-50 text-sm tracking-widest -mt-4"
                aria-label="navigation link"
                key={idx}
              >
                {item.title}
              </Link>
            ))}

            <Link href="/">
              <Button className="w-full h-[52px] tracking-widest text-sm -mt-2">SHOP LATEST ARRIVALS</Button>
            </Link>


            {/* <Link
              href="/"
              className="relative w-[30px] h-[52px] bg-black overflow-hidden group z-10 border-[1.5px] border-black ml-8"
            >
              <Button className="absolute top-0 h-full w-full flex justify-center items-center  tracking-wide bg-transparent">
                <p className="z-10 group-hover:text-black duration-700 transition-all text-sm cursor-pointer tracking-widest">
                  SHOP LATEST
                </p>
              </Button>
              <p className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
            </Link> */}
          </div>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
