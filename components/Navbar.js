import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../public/avatar.png";

import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=" max-w-lg z-10  mx-auto items-center justify-center md:flex md:p-0 ">
      <nav className="pb-1 my-8">
        <ul className=" w-full hidden  top-0 md:flex text-xl">
          <li className="px-4 py-2 hover:text-white bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700  ">
            <Link href="/project">project</Link>
          </li>
          <li className="px-4 py-2 hover:text-white dark:hover:text-gray-300 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <Link href="/blog-posts">posts</Link>
          </li>
          <li className="px-4 py-2  hover:text-white dark:hover:text-gray-300 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <Link href="/contact">contact</Link>
          </li>
          {/* <li className="cursor-pointer px-4 py-2 shadow rounded-full bg-slate-400">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:text-white"
              />
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
