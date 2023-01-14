import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import findmynews from "../public/thumbnail/findmynews.png";
import ninjaslist from "../public/thumbnail/ninjaslist.png";
import tailwindPortfolio from "../public/thumbnail/tailwind-design-dark.png";
import basicJsProjects from "../public/thumbnail/basic-js-projects.png";
import html from "../public/icon/html-5-svgrepo-com.png";
import css from "../public/icon/css-3-svgrepo-com.png";
import javascript from "../public/icon/javascript-svgrepo-com.png";
import reactjs from "../public/icon/react-svgrepo-com.png";
import nextjs from "../public/icon/nextjs-fill-svgrepo-com.png";
import tailwind from "../public/icon/tailwind-svgrepo-com.png";
import materialui from "../public/icon/material-ui-svgrepo-com.png";
import ButtonHome from "../components/ButtonHome";
import Navbar from "../components/Navbar";

const Project = () => {
  const [projectList, setProjectList] = useState([]);

  return (
    <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
      <Navbar />
      <div>
        <h1 className=" text-3xl font-bold pb-8">🚀 Project</h1>

        {/* TODO */}
        <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
          <div className="grid mb-8  border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 gap-2">
            {/* PROJECT 01 */}
            <figure className="flex flex-col items-center justify-center p-6  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg text-center font-semibold text-white dark:text-white ">
                  Find My News App
                  <Image
                    className="rounded-t-lg mt-2"
                    src={findmynews}
                    alt="project image"
                  />
                </h3>
                <div className="flex gap-2 mt-3">
                  <Image className="mb-2 w-5 h-5" src={materialui} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={reactjs} alt="logo" />
                </div>
                <p className="my-2 font-light">
                  A website to search for the latest news from the News API{" "}
                  <code>@talentlabs</code>
                </p>
                <Link
                  href="https://github.com/amirahnasihah/find-news-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit repo 🪧
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* PROJECT 02 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4  text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-black text-center">
                  Ninjas List
                  <Image
                    className="rounded-t-lg mt-2"
                    src={ninjaslist}
                    alt="project image"
                  />
                </h3>
                <div className="flex gap-2 mt-3">
                  <Image className="mb-2 w-5 h-5" src={javascript} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={nextjs} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={css} alt="logo" />
                </div>
                <p className="my-2 font-light">
                  A simple list of ninjas from REST API + 404 status code
                </p>
                <Link
                  href="https://ninjas-list-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit demo 🪧
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* PROJECT 03 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-white text-center">
                  Tailwind Portfolio Design
                  <Image
                    className="rounded-t-lg mt-2"
                    src={tailwindPortfolio}
                    alt="project image"
                  />
                </h3>
                <div className="flex gap-2 mt-3">
                  <Image className="mb-2 w-5 h-5" src={tailwind} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={reactjs} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={nextjs} alt="logo" />
                </div>
                <p className="my-2 font-light">
                  A simple use of Tailwind in NextJS with dark mode
                </p>
                <Link
                  href="https://tailwind-react-portfolio-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit demo 🪧
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* PROJECT 04 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-white text-center">
                  Basic JavaScript Projects
                  <Image
                    className="rounded-t-lg mt-2"
                    src={basicJsProjects}
                    alt="project image"
                  />
                </h3>
                <div className="flex gap-2 mt-3">
                  <Image className="mb-2 w-5 h-5" src={javascript} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={css} alt="logo" />
                  <Image className="mb-2 w-5 h-5" src={html} alt="logo" />
                </div>
                <p className="my-2 font-light">
                  Basics JavaScript by solving 140+ interactive coding
                  challenges and building fun projects
                </p>
                <Link
                  href="https://amirahnasihah.github.io/javascript-miniprojects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit demo 🪧
                  </span>
                </Link>
              </blockquote>
            </figure>
          </div>
          {/* SEE MORE AT HERE */}
          <p>
            more shipped at{" "}
            <Link
              href="https://whattaship.super.site/"
              target="_blank"
              className="font-medium text-gray-100 underline dark:text-blue-500 hover:no-underline"
            >
              here
            </Link>{" "}
            👈
          </p>
        </div>
      </div>

      {/* BACK TO HOME */}
      <ButtonHome />
      <Footer />
    </div>
  );
};

export default Project;
