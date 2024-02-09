"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LoaderIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { fetchthedata } from "./RequestMaker";
const Forms = () => {
  let [loading, setLoading] = React.useState(false);
  let [error, seterror] = React.useState(false);
  let [errormsg, seterrormsg] = React.useState(null);
  let router = useRouter();
  let formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be atleast 6 characters",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(data) {
    setLoading(true);
    seterror(false);
    data = await fetchthedata(data);
    if (data.title) {
      setLoading(false);
      seterror(true);
      seterrormsg(data.message);
      return;
    }
    setLoading(false);
    toast.success("You have Signed Up Successfully");
    router.replace("/login");
  }
  return (
    <div className="md:w-1/3 h-full max-sm:mt-5 mt-3">
      <h1 className="font-bold text-3xl text-center max-sm:my-6 my-5">
        Sign Up
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-sm:space-y-5 space-y-4 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="font-[600] text-black focus-visible:ring-offset-0 text-lg py-6 focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="font-[600] text-black focus-visible:ring-offset-0 text-lg py-6 focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="font-[600] text-black focus-visible:ring-offset-0 text-lg py-6 focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#867FE6] hover:bg-[#867FE6]
            hover:shadow-[0px_0px_50px_5px_#867fe67a] text-base p-3 w-full"
          >
            {loading && <LoaderIcon className="animate-spin" />}
            <p>SIGN UP</p>
          </Button>
        </form>
        <div className="flex gap-2 mt-2">
          <p>Have an account?</p>
          <Link href={"/login"}>
            <span className="text-blue-700 cursor-pointer">Sign In</span>
          </Link>
        </div>
        {error && (
          <h1 className="text-red-700 text-lg font-bold mt-2">{errormsg}</h1>
        )}
      </Form>
    </div>
  );
};

export default Forms;
