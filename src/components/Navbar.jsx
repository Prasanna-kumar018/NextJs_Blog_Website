"use server";
import Image from "next/image";
import { Links } from "./Links";
const Navbar = () => {
  return (
    <div className="flex  justify-between gap-10  items-center p-2  mt-2">
      <span className="text-2xl font-bold  ">Raja_Rani</span>
      <div className="relative h-full md:hidden">
        <Image src={"/menu.png"} fill alt="No-image" />
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
