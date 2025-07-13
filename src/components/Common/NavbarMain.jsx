"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        className={`w-full bg-[#3b5998] border-b-4 border-[#59aaff] font-mono fixed z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link
            href="/feed"
            className="text-[#7fa7e6] text-2xl sm:text-3xl select-none"
          >
            <span className="text-[#7fa7e6] text-2xl sm:text-3xl select-none">
              [TheNerds]
            </span>
          </Link>
          {/* Center + Right: Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-12">
            <Link
              href="/feed"
              className="text-white text-lg font-bold tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-white text-lg font-bold tracking-wide"
            >
              Profile
            </Link>
            <a href="#" className="text-white text-lg font-bold tracking-wide">
              Friends
            </a>
            <a href="#" className="text-white text-lg font-bold tracking-wide">
              Connect
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
              account
            </a>
            <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
              privacy
            </a>
            <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
              logout
            </a>
          </div>
          {/* Hamburger: Mobile */}
          <button
            className="lg:hidden flex items-center text-[#7fa7e6] focus:outline-none ml-auto"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Open menu"
          >
            <svg
              width="32"
              height="32"
              fill="none"
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
        {/* Dropdown: Mobile */}
        {menuOpen && (
          <div className="lg:hidden bg-[#3b5998] border-t border-[#59aaff] px-6 py-4 space-y-2 z-50">
            <div className="flex flex-col gap-2 mb-2">
              <a
                href="#"
                className="text-white text-lg font-bold tracking-wide"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-lg font-bold tracking-wide"
              >
                Profile
              </a>
              <a
                href="#"
                className="text-white text-lg font-bold tracking-wide"
              >
                Friends
              </a>
              <a
                href="#"
                className="text-white text-lg font-bold tracking-wide"
              >
                Connect
              </a>
            </div>
            <div className="flex flex-col gap-2 border-t border-[#59aaff] pt-2">
              <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
                account
              </a>
              <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
                privacy
              </a>
              <a href="#" className="text-[#a6c3e6] text-lg tracking-wide">
                logout
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default NavbarMain;
