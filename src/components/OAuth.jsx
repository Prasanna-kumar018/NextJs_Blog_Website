import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoaderIcon } from "lucide-react";

async function GithubSignIn() {
  await signIn("github");
}
const OAuth = ({ className }) => {
  const { data: session, status } = useSession();
  return (
    <div className={cn("space-y-3", className)}>
      <Button type="button" className="w-full bg-red-800  hover:bg-red-600 ">
        CONTINUE WITH GOOGLE
      </Button>
      <form action={GithubSignIn}>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-700 hover:bg-blue-500 w-full"
        >
          {status === "loading" && <LoaderIcon className="animate-spin" />}
          CONTINUE WITH GITHUB
        </Button >
      </form>
    </div>
  );
};

export default OAuth;
