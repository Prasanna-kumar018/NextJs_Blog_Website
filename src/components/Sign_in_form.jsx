"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import OAuth from "./OAuth";
import { toast } from "sonner";
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
const Sign_in_form = () => {
  let [loading, setLoading] = React.useState(false);
  let [error, seterror] = React.useState(false);
  let [errormsg, seterrormsg] = React.useState(null);
  let formSchema = z.object({
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
  function onSubmit(data) {
    console.log(data);
    // setLoading(true);
    // seterror(false);
    // fetch("/api/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Password: data.password,
    //     Email: data.email,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.title) {
    //       setLoading(false);
    //       seterror(true);
    //       seterrormsg(data.message);
    //       return;
    //     }
    //     setLoading(false);
    //     let date = new Date();
    //     toast("You have Signed In Successfully", {
    //       description: `@ ${date.toLocaleString()}`,
    //       action: {
    //         label: "Close",
    //         onClick: () => {
    //           toast.dismiss();
    //         },
    //       },
    //     });
    // dispatch(user.actions.setuser(data));
    // navigate("/");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     seterror(true);
    //     seterrormsg(err.message);
    //     console.error("Fetch Error:", err);
    //   });
  }
  return (
    <div className="md:w-1/3 h-full mt-4">
      <h1 className="font-bold text-3xl text-center my-5">Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="font-[600] focus-visible:ring-offset-0 text-lg py-6 focus-visible:ring-0 text-black"
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
            className=" w-full cursor-pointer bg-[#8A7CFF] hover:bg-[#867FE6]
            hover:shadow-[0px_0px_50px_5px_#867fe67a] text-black text-lg"
          >
            {loading && <LoaderIcon className="animate-spin" />}
            <p className="ml-2">SIGN IN</p>
          </Button>
        </form>
        <OAuth className="space-y-5 mt-5" />
        <div className="flex gap-2 mt-3 text-lg">
          <p>Dont have an account?</p>
          <Link href={"/register"}>
            <span className="text-blue-700 cursor-pointer">Sign Up</span>
          </Link>
        </div>
        {error && <h1 className="text-red-700 font-bold mt-3">{errormsg}</h1>}
      </Form>
    </div>
  );
};

export default Sign_in_form;
