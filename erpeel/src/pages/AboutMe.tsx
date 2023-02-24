import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <section id="AboutMe">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="/"
              src="/assets/top-down.jpg"
              width="3200"
              height="3200"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-20">
            <h1 className=" text-pink-500 text-6xl font-bold">
              Hello!!
            </h1>

            <p className="mt-4 text-gray-600 text-xl">
              My Name is Adrian Karuna Soetikno and this is my Website for RPL
              Lab Bootcamp
            </p>

            <button
              onClick={handleClick}
              className="my-4 text-white font-bold py-2 px-4 rounded"
            >
              Show Fun Facts
            </button>
            <div className="text-justify px-[20%] py-5">
              {showList && (
                <ul className="list-disc">
                  <li>Tiga bersaudara, namanya urut ABC</li>
                  <li>Gasuka seafood tapi makan ikan bakar</li>
                  <li>gagal kuliah == bikin pom bensin</li>
                  <li>gampang banget termotivasi</li>
                  <li>suka modif keyboard</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
