import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Card = ({ item }) => {
  return (
    <div className=" max-w-[300px] shadow-md mb-10 shadow-[#D59AD8]">
      <div className="w-full relative">
        <div className=" relative flex aspect-square flex-grow-1 w-11/12">
          <Image src="/music.jpg" fill alt="No-image" />
        </div>
        <p
          className="absolute  right-0 -rotate-90  origin-bottom-right   
          -translate-y-1/2 top-[70px]
          bg-black    inline-block"
        >
          {new Date().getTime()}
        </p>
      </div>
      <h1 className="my-2 font-bold text-lg p-2">Title</h1>
      <p className="text-base px-2 pb-1">Description</p>
      <Button className="underline">Read More</Button>
    </div>
  );
};

export default Card;
