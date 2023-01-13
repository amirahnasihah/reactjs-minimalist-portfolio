import Link from "next/link";
import React from "react";
import { SiHashnode, SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className="bg-slate-500 px-10 md:px-20 lg:px-40 min-h-screen">
      <h1 className=" text-3xl font-bold">Contact</h1>
      <div>
        <Link href="/" className=" text-cyan-500">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
