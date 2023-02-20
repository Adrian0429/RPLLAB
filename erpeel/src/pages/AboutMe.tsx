import React, { useState } from "react";

const AboutMe = () => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(true);
  };
  return (
    <div className="w-full h-screen text-center">
      <div className="w-[80%] h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" text-lg font-semibold tracking-widest">
            Hello There !!
          </p>
          <h2 className="py-2 text-3xl text-gray-600 text-center">
            My name is{" "}
            <span className="text-blue-500">Adrian Karuna Soetikno</span>
          </h2>
          <h3 className=" text-gray-600 text-center">
            This is my &apos;about me&apos; page, here&apos;s some of my
            funfacts{" "}
          </h3>

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
  );
};

export default AboutMe;
