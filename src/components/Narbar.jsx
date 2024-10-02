import React from "react";
import { useState } from "react";
import '../styles/Navbar.css'
import Menu from '../../public/images/menu.svg'



export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="navbar box z-50">
      <div className="max-w-8xl mx-auto">
        <div className="flex mx-auto justify-between w-11/12">
          <div className="flex items-center my-2">
            {/* logo */}
            <a

              className="flex gap-1 font-bold text-4xl items-center text-white"
            >

              Kylie.
            </a>
          </div>
          {/* pages */}
          <div
            id="links"
            className="items-center justify-end ml-auto font-[410] hidden text-base lg:flex gap-20 text-white"
          >
            <a href="#hero-section" className="">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#project-header-text">Projects</a>
            <a href="#ex-sect">Experince</a>
            <a href="#contact-sect">Contact</a>
          </div>
          {/* mobile */}
          <div className="flex gap-4">
            <div className="lg:hidden flex items-center">
              <button onClick={() => setSideMenu(!sideMenu)}>
                <img src={Menu} alt="nav button" height="27" width="27" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        id="mobile"
        className={`fixed z-40 w-full opacity-95 bg-black overflow-hidden absolute flex flex-col lg:hidden gap-16 origin-top duration-700 ${!sideMenu ? "h-0" : "h-50"
          }`}
      >
        <div className="px-8 my-3">
          <div className="flex flex-col gap-8 font-[450] tracking-wider items-center text-lg text-white">
            <a href="../" className="">
              Home
            </a>
            <a href="../about">About</a>
            <a href="../joinus">Join Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
