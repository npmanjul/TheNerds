"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setShowNavbar(false); // scroll down, hide
      } else {
        setShowNavbar(true); // scroll up, show
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full bg-[#3b5998] flex items-center justify-center sm:justify-between px-8 py-6 fixed z-50 transition-transform duration-300 font-mono ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/">
          <span className="text-[#7fa7e6] text-2xl sm:text-3xl font-normal tracking-wide select-none">
            [TheNerds]
          </span>
        </Link>
        <div className="hidden md:block">
          <div className="flex space-x-10 ">
            <Link
              href="/login"
              className="text-white text-lg tracking-wide hover:text-gray-200"
            >
              login
            </Link>
            <Link
              href="/register"
              className="text-white text-lg tracking-wide hover:text-gray-200"
            >
              register
            </Link>
            <Link
              href="#"
              className="text-white text-lg tracking-wide hover:text-gray-200"
            >
              help
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
