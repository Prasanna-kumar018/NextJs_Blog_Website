import Image from "next/image";
import Form_Component from "@/components/Form_Component";

export const metadata = {
  title: "Contact Page",
  description: "Contact Description",
};
const Contactpage = () => {
  return (
    <div className="flex mt-16 gap-20">
      <div className="flex-1 max-md:hidden  relative ">
        <Image
          src="/contact.png"
          alt="No-image"
          fill
          className="max-h-[448px]"
        />
      </div>
      <div className="font-bold flex-1  text-black px-10">
        <Form_Component />
      </div>
    </div>
  );
};

export default Contactpage;
