"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const Contactpage = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters long",
      })
      .max(50, {
        message: "Username must be at most 50 characters long",
      }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    phonenumber: z.string().refine(
      (value) => {
        let regex = /^[0-9]{10}$/;
        return regex.test(value);
      },
      {
        message: "Phone number is invalid",
      }
    ),
    message: z.string(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(form) {
    console.log(form);
    console.log("no change");
  }
  return (
    <div className="flex mt-16 gap-20">
      <div className="flex-1 max-md:hidden  relative">
        <Image src="/contact.png" alt="No-image" fill />
      </div>
      <div className="font-bold flex-1  text-black px-10">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      className="text-base py-6"
                      {...field}
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
                      className="text-base py-6"
                      placeholder="Email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-base py-6"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="text-base"
                      rows="6"
                      placeholder="Enter your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#867FE6] hover:bg-[#867FE6]
            hover:shadow-[0px_0px_50px_5px_#867fe67a] text-base p-3"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contactpage;
