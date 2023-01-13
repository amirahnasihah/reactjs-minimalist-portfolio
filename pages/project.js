import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="bg-slate-500 px-10 md:px-20 lg:px-40 min-h-screen">
      <h1 className=" text-3xl font-bold">Project</h1>
      <div>
        <Link href="/" className=" text-cyan-500">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Project;
