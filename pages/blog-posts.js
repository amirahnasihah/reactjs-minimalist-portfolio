import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import blog1 from "../public/thumbnail/blog1.png";
import blog2 from "../public/thumbnail/blog2.png";
import blog3 from "../public/thumbnail/blog3.png";
import blog4 from "../public/thumbnail/conditional-rendering.png";
import badge from "../public/icon/badge-svgrepo-com.png";
import ButtonHome from "../components/ButtonHome";
import Navbar from "../components/Navbar";

const BlogPost = () => {
  return (
    <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
      <Navbar />
      <div>
        <h1 className=" text-3xl font-bold pb-8">📬 Latest Posts</h1>

        {/* TODO */}
        <div className="w-full max-w-lg z-10 relative mx-auto p-4 md:p-0 lg:my-8 ">
          <div className="grid mb-8  border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 gap-2">
            {/* BLOG 01 */}
            <figure className="flex flex-col items-center justify-center p-6  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg text-center font-semibold text-white dark:text-white ">
                  My Journey in Tech
                  <Image
                    className="rounded-t-lg mt-2"
                    src={blog1}
                    alt="blog image"
                  />
                </h3>
                <div className="flex gap-2 mt-3 text-sm">
                  <p>Dec 19, 2022</p>
                </div>
                <p className="my-2 font-light">
                  Dev Retro 2022: My Story of Switching Careers as a Beginner
                  Developer
                </p>
                <Link
                  href="https://amirahnasihah.hashnode.dev/dev-retro-2022-my-story-of-switching-careers-as-a-beginner-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit post 🔗
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* BLOG 02 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4  text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-black text-center">
                  Prompt 101: AI Art
                  <Image
                    className="rounded-t-lg mt-2"
                    src={blog2}
                    alt="blog image"
                  />
                </h3>
                <div className="flex gap-2 mt-3 text-sm">
                  <p>Dec 6, 2022</p>|
                  <Image
                    src={badge}
                    alt="badge"
                    className="w-[20px] h-[20px]"
                  ></Image>
                  <span> Featured on Hashnode</span>
                </div>

                <p className="my-2 font-light">
                  Prompt 101: Generate Cool Stable Diffusion Images with this
                  Guide
                </p>
                <Link
                  href="https://amirahnasihah.hashnode.dev/prompt-101-generate-cool-stable-diffusion-images-with-this-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit post 🔗
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* BLOG 03 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-white text-center">
                  Generate Art With AI
                  <Image
                    className="rounded-t-lg mt-2"
                    src={blog3}
                    alt="blog image"
                  />
                </h3>
                <div className="flex gap-2 mt-3 text-sm">
                  <p>Nov 28, 2022</p>
                </div>
                <p className="my-2 font-light">
                  How To Start Generate AI Art For Noob
                </p>
                <Link
                  href="https://amirahnasihah.hashnode.dev/how-to-start-generate-ai-art-for-noob"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit post 🔗
                  </span>
                </Link>
              </blockquote>
            </figure>

            {/* BLOG 04 */}
            <figure className="flex flex-col items-center justify-center p-8  border-b  rounded-lg g md:border-r bg-gray-700 ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-white dark:text-white text-center">
                  Conditional Rendering
                  <Image
                    className="rounded-t-lg mt-2"
                    src={blog4}
                    alt="blog image"
                  />
                </h3>
                <div className="flex gap-2 mt-3 text-sm">
                  <p>Oct 26, 2022</p>
                </div>
                <p className="my-2 font-light">
                  Changing Button&apos;s Text using React
                </p>
                <Link
                  href="https://amirahnasihah.hashnode.dev/changing-buttons-text-using-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    visit post 🔗
                  </span>
                </Link>
              </blockquote>
            </figure>
          </div>
          {/* SEE MORE AT HERE */}
          <p>
            more posting at{" "}
            <Link
              href="https://amirahnasihah.hashnode.dev/"
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

export default BlogPost;
