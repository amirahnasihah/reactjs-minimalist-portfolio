import Head from "next/head";
import { useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
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
      <main className="p-4  px-8 md:px-20 lg:px-40 dark:bg-zinc-600 ">
        <section className="">
          <Navbar />
          <Heading />
          <Layout />
          <BottomNavbar />
        </section>
        <Footer />
      </main>
    </div>
  );
}
