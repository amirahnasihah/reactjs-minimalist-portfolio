import Link from "next/link";
import React from "react";
import { SiHashnode, SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

const Heading = () => {
  return (
    <div>
      <div className="text-center py-1 text-gray-800 md:text-xl  mx-auto ">
        <h1 className="mb-2 font-mono text-4xl text-cyan-100 md:text-6xl font-bold">
          Amirah Nasihah👋
        </h1>
        <p className="text-md py-2 text-gray-800 md:text-xl sm:text-xl max-w-md mx-auto ">
          I didn&apos;t have access to formal education in the field. So, I{" "}
          <span className=" text-cyan-100 underline font-semibold">
            {" "}
            taught myself how to code
          </span>{" "}
          and started learning everything I could about technology development.
        </p>
      </div>
      <div className="text-2xl flex justify-center gap-10 text-cyan-100 md:text-3xl sm:text-xl py-5">
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
    </div>
  );
};

export default Heading;
