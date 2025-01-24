"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "@components/presentational/TabNav";
import ButtonTransport from "@components/container/ButtonTransport";
import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const Nav = ({ changes = false, display="fixed" }) => {
  const isUserLoggedIn = false;
  const [dropdownAboutOpen, setDropdownAboutOpen] = useState(false);
  const [dropdownHelpOpen, setDropdownHelpOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah state menjadi true
      setIsScrolled(window.scrollY > 50);
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full top-0 z-50  ${
        changes || isScrolled ? "bg-white shadow-lg" : "text-white"
      } ${display}`}
    >
    <div>
    <style jsx>{`
    Link :hover{
    background-color: ${changes || isScrolled? "#000" : "#fff"};}
    `}</style>
    </div>
      <nav className="">
        <div className="navbar flex-between w-full py-2">
          <Link href="/" className="flex gap-2 flex-center ">
            {/* Logo */}
            <Image
              src={changes || isScrolled ? "assets/images/logo.svg" : "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"}
              alt="Traveloka Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Mobile Navigation */}
          <div className="sm:flex hidden bg-dark">
            {isUserLoggedIn == false ? (
              <div className={`flex gap-2 items-center ${isScrolled && "text-black"}`}>
                {/* <Link href="" onClick={handleMenuToggle}>
                  Bantuan
                </Link> */}
                
                <Link className="px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30" href="/">Promo</Link>
                <Link className="hover:bg-black px-3 py-2 hover:rounded-md hover:bg-opacity-30 " href="/">Bantuan</Link>
                <Link className="px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30" href="/">Jadi Mitra</Link>
                <Link className="px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30" href="/">For Corporates</Link>
                <Link className="px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30" href="/">Pesanan</Link>
                <Link className={`px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30 outline_btn ${changes || isScrolled  ? "text-black" : "text-white hover:text-white"}`} href="/login">
                  Log in
                </Link>

                <div>
                  <div
                    className={`absolute top-0 right-[130] mt-10 w-48 bg-white shadow-lg rounded-md ру-2 ${
                      dropdownAboutOpen ? "block" : "hidden"
                    }`}
                  >
                    <a
                      href="/profile"
                      className="block px-4 ру-2 text-sm-text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block px-4 ру-2- text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </div>
                </div>

                <button type="button" className="blue_btn">
                  Daftar
                </button>
              </div>
            ) : (
              <div className="flex gap-3 md:gap-5">
                <Link href="/login">
                  <button className="black_btn">Sign In</button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Responsive */}
          <div className={`flex md:hidden`}>
            <button
              type="button"
              className={`flex gap-3 items-center px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-30 outline_btn  ${changes || isScrolled  ? "text-black" : "text-white"}`}
              onClick={handleMenuToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <Tab scroll={changes || isScrolled} />
      </nav>
    </div>
  );
};

export default Nav;
