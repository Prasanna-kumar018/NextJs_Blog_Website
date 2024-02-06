"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
export const Links = () => {
  let pathname = usePathname();
  console.log(pathname);
  const isAdmin = true;
  const user = false;
  return (
    <div className="flex  gap-1 max-md:hidden">
      <Link
        href={"/"}
        prefetch={false}
        className={
          pathname !== "/"
            ? "p-3 min-w-[100px] text-center flex-1  "
            : "p-3 min-w-[100px] text-center bg-white font-bold rounded-full   text-black flex-1 "
        }
      >
        Home
      </Link>

      <Link
        href={"/about"}
        prefetch={false}
        className={
          pathname !== "/about"
            ? "p-3 min-w-[100px] text-center flex-1 "
            : "flex-1 bg-white font-bold rounded-full p-3 min-w-[100px] text-center   text-black    "
        }
      >
        About
      </Link>
      <Link
        href={"/contact"}
        prefetch={false}
        className={
          pathname !== "/contact"
            ? "p-3 min-w-[100px] text-center flex-1 "
            : "flex-1 p-3 min-w-[100px] text-center bg-white font-bold rounded-full   text-black   "
        }
      >
        Contact
      </Link>
      <Link
        href={"/blog"}
        prefetch={false}
        className={
          pathname !== "/blog"
            ? "p-3 min-w-[100px] text-center flex-1 bg-inherit"
            : "p-3 min-w-[100px] text-center bg-white font-bold rounded-full   text-black flex-1"
        }
      >
        Blog
      </Link>
      {user ? (
        <>
          <Link
            href={"/admin"}
            prefetch={false}
            className={
              pathname !== "/admin"
                ? "p-3 min-w-[100px] text-center flex-1 bg-inherit"
                : "p-3 min-w-[100px] text-center bg-white font-bold rounded-full   text-black flex-1"
            }
          >
            Admin
          </Link>
          <Button
            className="hover:shadow-[0px_0px_50px_5px_867fe67a] flex-1 min-w-[100px]
            font-bold text-base hover:bg-transparent hover:text-red-700 self-center bg-transparent
          "
          >
            Log out
          </Button>
        </>
      ) : (
        <>
          <Link
            href={"/login"}
            prefetch={false}
            className={
              pathname !== "/login"
                ? "p-3 min-w-[100px] text-center flex-1 bg-inherit"
                : "p-3 min-w-[100px] text-center bg-white font-bold rounded-full   text-black flex-1"
            }
          >
            Sign in
          </Link>
        </>
      )}
    </div>
  );
};
