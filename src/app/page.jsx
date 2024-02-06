import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Roboto_Serif } from "@next/font/google";
import { cn } from "@/lib/utils";

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex mt-16 gap-16 ">
      <div className="flex-1 relative">
        <h1
          className={cn(
            "text-7xl text-wrap font-semibold",
            roboto_serif.className
          )}
        >
          Creative <span className="textstroke text-clip">Thoughts</span> Agency
        </h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          alias aliquam, doloremque veritatis rem quos amet ipsum quisquam
        </p>
        <div className="mt-8 flex gap-10">
          <Button className="bg-blue-800 hover:bg-blue-600 text-base">
            Learn More
          </Button>
          <Button
            variant="outline"
            className="bg-white  text-black text-base 
          hover:bg-slate-400"
          >
            Contact
          </Button>
        </div>
        <div className="flex mt-3">
          <img src={"/brands.png"} />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src={"/hero.gif"} fill />
      </div>
    </div>
  );
}
