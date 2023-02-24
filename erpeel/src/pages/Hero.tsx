import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
<section className="bg-gray-50">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Welcome !
        <strong className="font-extrabold text-pink-500 sm:block">
          This is the Hero Section of my page
        </strong>
      </h1>

      <p className="mt-4 text-gray-600 sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get to know me more!
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-pink-500 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Contact Me?
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
