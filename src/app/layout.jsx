import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import Provider from "@/components/Provider";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "BLOG_WEBSITE | Next14.js",
    template: "%s | Next14.js",
  },
  description: "Create your blog now | Next14.js",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <Provider>
        <body className={cn(" xl:mx-36 mx-20 ", inter.className)}>
          <Navbar />
          <ToastContainer />
          {children}
        </body>
      </Provider>
    </html>
  );
}
