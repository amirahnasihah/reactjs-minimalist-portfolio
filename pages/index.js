import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import avatar from "../public/avatar.png";
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
import blog from "../public/icon/blog-svgrepo-com.png";
import contact from "../public/icon/social-media-branding-advertising-promotion-svgrepo-com.png";
import project from "../public/icon/rocket-svgrepo-com.png";
import home from "../public/icon/dashboard-svgrepo-com.png";
import { SiHashnode, SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <Head>
        <title>amirahnasihah</title>
        <meta
          name="description"
          content="nextjs + tailwind minimalist portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MAIN - HOME */}
      <main className=" px-10 md:px-20 lg:px-40 ">
        {/* NAVBAR */}
        <section className="text-xl mb-12 ">
          <nav className="py-5 flex justify-between ">
            <div className="flex w-full max-w-md z-10 relative mx-auto p-4">
              <Image
                src={avatar}
                className="m-1 w-9 h-9 rounded-full "
                alt="logo"
              />
              <ul className="items-center w-full hidden absolute top-0 py-4 z-30 justify-center md:flex">
                <li className="px-4 py-2  ">
                  <Link
                    href="/project"
                    className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    project
                  </Link>
                </li>
                <li className="px-4 py-2 over:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  <Link href="/blog-posts">posts</Link>
                </li>
                <li className="px-4 py-2  over:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  <Link href="/contact">contact</Link>
                </li>
                <li className="cursor-pointer px-4 py-2 shadow rounded-full bg-slate-400">
                  <BsFillMoonStarsFill />
                </li>
              </ul>
            </div>
          </nav>
          <div className="text-center pb-5 ">
            <h2 className="text-5xl py-2 text-cyan-500 font-bold ">
              Amirah Nasihah
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl sm:text-xl max-w-lg mx-auto  ">
              I didn&apos;t have access to formal education in the field. So, I
              <span className=" text-cyan-500"> taught myself how to code</span>{" "}
              and started learning everything I could about technology
              development.
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-10 text-gray-600 md:text-3xl sm:text=xl py-5">
            <Link
              className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              href="https://twitter.com/amrhnshh"
              target="_blank"
              rel="noreferrer"
            >
              <SiTwitter />
            </Link>
            <Link
              className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              href="http://www.linkedin.com/in/amirahnasihah"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </Link>
            <Link
              className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              href="https://github.com/amirahnasihah"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub />
            </Link>
            <Link
              className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              href="https://hashnode.com/@amirahnasihah"
              target="_blank"
              rel="noreferrer"
            >
              <SiHashnode />
            </Link>
          </div>
        </section>

        {/* STACK + WHAT I DO */}
        <section className="pb-16">
          {/* STACK */}
          <div className=" w-full max-w-md z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
            <h3 className="text-3xl py-2 font-bold">🪄 Stack</h3>
            <div className="shadow bg-gray-400 rounded-lg py-2 items-center justify-between">
              <div className="w-full flex flex-wrap px-2 items-center gap-5 my-4">
                <Image src={markdown} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={html} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={css} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={javascript} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={reactjs} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={nextjs} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={materialui} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={tailwind} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={figma} className="mr-3 w-8 h-8 " alt="logo" />
                <Image src={canva} className="mr-3 w-8 h-8 " alt="logo" />
              </div>
            </div>
          </div>

          {/* WHAT I DO */}
          <div className="w-full max-w-md z-10 relative mx-auto p-4 md:p-0 lg:my-8">
            <h3 className="text-3xl py-5 font-bold">🪐 What I do</h3>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 gap-2">
              <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    💻 Building
                  </h3>
                  <p className="my-4 font-light">
                    Building products is always my passion. It&apos;s something
                    I do every week.
                  </p>
                </blockquote>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    ✍️ Blogging
                  </h3>
                  <p className="my-4 font-light">
                    to help many people I mentor. I will help you become a
                    better coder.
                  </p>
                </blockquote>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    🌏 Sharing
                  </h3>
                  <p className="my-4 font-light">
                    I share high-quality content every day so you can take
                    benefit from them. Follow me, please.
                  </p>
                </blockquote>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center border-b  rounded-lg g md:border-r bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    📔 Documenting
                  </h3>
                  <p className="my-4 font-light">
                    I mix tech, design, and business to manage products and
                    solve user problems.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full h-[40px] bg-gray-100 shadow-2xl fixed bottom-0 z-20 border-t grid grid-cols-4 md:hidden first-letter:fixed left-0 ">
          <div className="flex justify-center items-center p-1 hover:bg-gray-200">
            <div className="mr-3 w-8 h-8 rounded-full ">
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
      </main>
    </div>
  );
}
