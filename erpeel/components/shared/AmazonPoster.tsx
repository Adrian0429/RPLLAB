import React from "react";
import Image from "next/image";
import Link from "next/link";
import RedButton from "components/GreenButton";

interface posterprops {
  title: string;
  prices: number;
  image: string;
  link: string;
}
2;
const AmazonPoster = ({ title, prices, image, link }: posterprops) => {
  return (
    <>
      <Link href={`/keyboard/${link}`}>
        <div className="bg-white p-2 m-1 rounded-lg flex flex-col items-center">
          <Image
            className="mt-auto"
            src={image}
            alt={title}
            width={200}
            height={300}
          />

          <div className="max-w-xl flex flex-col items-center mt-auto">
            <Link href={link}>
              <p className="text-justify line-clamp-3 my-4 hover:text-blue-500">
                {title}
              </p>
            </Link>

            <h1 className="font-semibold">`$ {prices.value}`</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AmazonPoster;
