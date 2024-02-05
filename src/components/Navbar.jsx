"use server";
import { Links } from "./Links";
const Navbar = () => {
  return (
    <div className="flex  justify-between gap-10  items-center p-2  mt-2">
      <span className="text-2xl font-bold  ">Raja_Rani</span>
      <Links/>
    </div>
  );
};

export default Navbar;
