"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "@components/presentational/TabNav";
import ButtonTransport from "@components/container/ButtonTransport";
import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const Nav = ({ changes = false }) => {
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
      } ${isScrolled ? "fixed" : "block"} `}
    >
      <nav className="mb-4">
        <div className="navbar flex-between w-full py-2">
          <Link href="/" className="flex gap-2 flex-center">
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
              <div className="flex gap-3 md:gap-5 items-center">
                <Link href="/">Promo</Link>
                {/* <Link href="" onClick={handleMenuToggle}>
                  Bantuan
                </Link> */}
                <div className="relative inline-block text-left">
                  <div>
                    <a
                      className="inline-flex w-full justify-center  rounded-md  py-2  ring-inset"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Options
                      <svg
                        className="-mr-1 size-5 text-white {isO"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
                  <div
                    className="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Account settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Support
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        License
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <Link href="/">Jadi Mitra</Link>
                <Link href="/">For Corporates</Link>
                <Link href="/">Pesanan</Link>
                <Link href="/login" className="outline_btn">
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
        </div>
        {(!isScrolled && !changes) && <div class="divider-nav"></div>}
        <Tab scroll={changes || isScrolled} />
        {(!isScrolled && !changes) && <div class="divider-nav"></div>}
      </nav>
    </div>
  );
};

export default Nav;
