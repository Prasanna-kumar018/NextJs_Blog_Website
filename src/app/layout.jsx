import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "BLOG_WEBSITE | Next14.js",
    template: "%s | Next14.js",
  },
  description: "Create your blog now | Next14.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " lg:mx-36 mx-10"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
