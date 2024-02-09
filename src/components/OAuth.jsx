import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { GithubSignIn } from "./Sign_in_controllers";
import { LoaderIcon } from "lucide-react";

const OAuth = ({ className }) => {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = React.useState(false);
  let router = useRouter();
  React.useEffect(() => {
    if (session?.user) {
      router.replace("/");
    }
  }, [session?.user]);
  return (
    <div className={cn("space-y-3", className)}>
      <form
        action={() => {
          GithubSignIn();
        }}
      >
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-700 hover:bg-blue-500 w-full"
        >
          {status === "loading" && <LoaderIcon className="animate-spin" />}
          CONTINUE WITH GITHUB
        </Button>
      </form>
    </div>
  );
};

export default OAuth;
