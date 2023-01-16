import Link from "next/dist/client/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="pb-12 md:px-6 md:py-8 dark:bg-gray-900 font-medium">
        <span className="block text-sm text-gray-100 text-center dark:text-gray-400 ">
          ✨{" "}
          <Link href="#" className="hover:underline hover:text-gray-600">
            amirahnasihah
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
