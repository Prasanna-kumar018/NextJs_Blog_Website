"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const NotfoundPage = () => {
  let router = useRouter();
  return (
    <div className="flex  my-10 justify-center">
      <div className="flex flex-col text-xl">
        <h1>This page does not exist</h1>
        <Button
          className="my-5 bg-[#8680e6]  hover:bg-[#8680e6]
           hover:shadow-[#8780e682]  hover:shadow-lg text-lg p-7  "
          onClick={() => {
            router.replace("/");
          }}
        >
          Return to Home Page
        </Button>
      </div>
    </div>
  );
};

export default NotfoundPage;
