import blog from "../public/icon/blog-svgrepo-com.png";
import contact from "../public/icon/contact-svgrepo-com.png";
import project from "../public/icon/rocket-svgrepo-com.png";
import avatar from "../public/avatar.png";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full h-[40px] bg-gray-100 shadow-2xl fixed bottom-0 z-20 border-t grid grid-cols-4 md:hidden first-letter:fixed left-0 ">
        <div className="flex justify-center items-center p-1 hover:bg-gray-200">
          <div className=" w-[24px] h-[24px]  ">
            <Link href="/">
              <Image src={avatar} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center p-1 hover:bg-gray-200">
          <div className="w-[24px] h-[24px]">
            <Link href="/project">
              <Image src={project} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center p-1 hover:bg-gray-200">
          <div className="w-[24px] h-[24px]">
            <Link href="/blog-posts">
              <Image src={blog} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center p-1 hover:bg-gray-200">
          <div className="w-[24px] h-[24px]">
            <Link href="/contact">
              <Image src={contact} alt="logo" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
