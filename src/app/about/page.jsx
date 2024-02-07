import Image from "next/image";
export const metadata = {
  title: "About Page",
  description: "About Description",
};
const Aboutpage = () => {
  return (
    <div className="flex mt-10 gap-10 ">
      <div className="flex-1">
        <h1 className="font-extrabold text-blue-600 my-10 text-xl">
          About Agency
        </h1>
        <p className="text-4xl leading-[45px] font-bold my-5 " id="textclip">
          We Create digital ideas that are bigger, bolder, braver and better.
        </p>
        <p className="mt-10 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          consectetur voluptas omnis corrupti quae, dolorem voluptate nulla
          voluptates nostrum dolor?
        </p>
        <div className="flex mt-5">
          <div className="flex-1 flex flex-col">
            <span className="font-extrabold text-3xl  my-2 text-blue-500">
              10 K+
            </span>
            <p className="">Year of experience</p>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="font-extrabold text-3xl  my-2 text-blue-500">
              234 K+
            </span>
            <p>People reached</p>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="font-extrabold text-3xl  my-2 text-blue-500">
              5 K+
            </span>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative m-2">
        <Image src="/about.png" fill alt="No-image..." />
      </div>
    </div>
  );
};

export default Aboutpage;
