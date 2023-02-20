import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HandleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar-new" className="fixed w-full h-14 shadow-lg bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">Welcome</Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="mx-5 uppercase hover:border-b">
              <a href="/kawkak" className="text-sm">
                hellow
              </a>
            </li>

            <li className="mx-5 uppercase hover:border-b">
              <a href="/" className="text-sm">
                About
              </a>
            </li>

            <li className="mx-5 uppercase hover:border-b">
              <a href="" className="text-sm">
                Contact Me !
              </a>
            </li>
          </ul>
        </div>

        <div onClick={HandleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in-out duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={HandleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <a href="/">Hellow</a>
            </li>

            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <a href="/">About</a>
            </li>

            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <a href="/">Contact Me !</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-around pt-10 items-center">
          <FaInstagram size={30}></FaInstagram>
          <FaGithub size={30}></FaGithub>
          <FaLinkedinIn size={30}></FaLinkedinIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
