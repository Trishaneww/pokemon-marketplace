import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="flex px-4 xl:px-52 pb-20 mt-4">
      <div className="flex flex-col lg:flex-row justify-between items-center px-20 py-8 w-full lg:h-[400px] border-[1px] border-gray-300 mt-12 rounded-xl relative bg-[#FAFAFA]">
        <section className="flex flex-col gap-2 text-center lg:text-left">
          <p>15% OFF</p>
          <p className="text-2xl lg:text-5xl font-medium">OBSIDIAN FLAMES</p>
          <p className="text-2xl lg:text-5xl font-medium -mt-3">
            LIMITED OFFER
          </p>
          <Link
            href="/pricing"
            className="relative w-[210px] h-[46px] bg-black overflow-hidden group z-10 border-[1.5px] border-black mt-4"
          >
            <Button className="absolute top-0 h-full w-full flex justify-center items-center  tracking-wide bg-transparent">
              <p className="z-10 group-hover:text-black duration-700 transition-all text-sm cursor-pointer tracking-widest">
                SHOP SELECTION
              </p>
            </Button>
            <p className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
          </Link>
        </section>

        <Image
          width={650}
          height={650}
          src="/assets/images/cta.png"
          alt="obsidean flames blitz pack"
          className="mt-8 lg:mt-0 min-w-[320px]"
        />
      </div>
    </div>
  );
};

export default CTA;
