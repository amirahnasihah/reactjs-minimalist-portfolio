import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiHashnode } from "react-icons/si";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import ButtonHome from "../components/ButtonHome";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
      <Navbar />
      <div>
        <h1 className=" text-3xl font-bold pb-8">📲 Contact</h1>

        {/* TODO */}
        <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
          <div className="grid mb-8  border-gray-200 rounded-lg  md:mb-12 md:grid-cols-2 gap-2">
            <Link href="http://www.linkedin.com/in/amirahnasihah">
              <button
                type="button"
                className="text-white bg-[#007AB6] hover:bg-[#007AB6]/90 focus:ring-4 focus:outline-none focus:ring-[#007AB6]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#007AB6]/55 mr-2 mb-2 w-full"
              >
                <FaLinkedinIn
                  className="w-4 h-4 mr-2 -ml-1"
                  viewBox="0 0 448 512"
                />
                Get in touch with me on LinkedIn!
              </button>
            </Link>
            <Link href="https://twitter.com/amrhnshh">
              <button
                type="button"
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 w-full"
              >
                <FaTwitter className="w-4 h-4 mr-2 -ml-1" />
                Get updates from me on Twitter!
              </button>
            </Link>
            <Link href="https://github.com/amirahnasihah">
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 w-full"
              >
                <FaGithub className="w-4 h-4 mr-2 -ml-1" />
                Check out my code on GitHub!
              </button>
            </Link>
            <Link href="https://amirahnasihah.hashnode.dev/">
              <button
                type="button"
                className="text-white bg-[#2962FF] hover:bg-[#2962FF]/90 focus:ring-4 focus:outline-none focus:ring-[#2962FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2962FF]/55 mr-2 mb-2 w-full"
              >
                <SiHashnode className="w-4 h-4 mr-2 -ml-1" />
                Check out my blog at Hashnode!
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* BACK TO HOME */}
      <ButtonHome />
      <Footer />
    </div>
  );
};

export default Contact;
