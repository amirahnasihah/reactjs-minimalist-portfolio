import Image from "next/image";
import React from "react";

import markdown from "../public/icon/markdown-svgrepo-com.png";
import html from "../public/icon/html-5-svgrepo-com.png";
import css from "../public/icon/css-3-svgrepo-com.png";
import javascript from "../public/icon/javascript-svgrepo-com.png";
import reactjs from "../public/icon/react-svgrepo-com.png";
import nextjs from "../public/icon/nextjs-fill-svgrepo-com.png";
import tailwind from "../public/icon/tailwind-svgrepo-com.png";
import materialui from "../public/icon/material-ui-svgrepo-com.png";
import figma from "../public/icon/figma-svgrepo-com.png";
import canva from "../public/icon/canva-svgrepo-com.png";

const Layout = () => {
  return (
    <div className="pb-16">
      {/* STACK */}
      <div className=" w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 md:my-8 ">
        <h3 className="text-3xl py-2 font-bold ">🪄 Stack</h3>
        <div className="py-2 items-center justify-between  ">
          <div className="w-full flex flex-wrap px-2 items-center gap-3 my-4  ">
            <Image src={markdown} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={html} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={css} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={javascript} className="mr-3 w-7 h-7 " alt="logo" />
            <Image src={reactjs} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={nextjs} className="mr-3 w-7 h-7 " alt="logo" />
            <Image src={materialui} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={tailwind} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={figma} className="mr-3 w-8 h-8 " alt="logo" />
            <Image src={canva} className="mr-3 w-8 h-8 " alt="logo" />
          </div>
        </div>
      </div>

      {/* WHAT I DO */}
      <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
        <h3 className="text-3xl py-5 font-bold">🪐 What I do</h3>
        <div className="grid mb-8  border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 gap-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-white dark:text-white">
                Building 💻
              </h3>
              <p className="my-4 font-light">
                I keep building products and learning to make one. It is always
                my passion and something I do every day
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-white dark:text-black">
                Blogging ✍️
              </h3>
              <p className="my-4 font-light">
                I document my tech journey and learning progress. It has
                inspired many people to join the tech industry
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-white dark:text-white">
                Sharing 🌏
              </h3>
              <p className="my-4 font-light">
                I share high-quality content, lessons and insights so everyone
                can take benefit from them
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-white dark:text-white">
                Designing 🎨
              </h3>
              <p className="my-4 font-light">
                I innovate design to fulfill the aesthetic requirements of the
                front-end. A mix of tech and design
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Layout;
