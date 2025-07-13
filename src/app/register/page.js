"use client";
import React from "react";
import Navbar from "@/components/Auth/Navbar";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-mono">
      {/* Header */}
      <Navbar />
      {/* Main Content Box */}
      <div className="flex justify-center items-center w-full min-h-[80vh] py-8">
        <div className="bg-white w-full max-w-6xl px-12 py-12 flex flex-col">
          <form className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
            {/* First Row */}
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                Last Name:
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="universityEmail"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                University Email:
              </label>
              <input
                id="universityEmail"
                type="email"
                placeholder="Enter your university email"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            {/* Second Row */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                Set Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="iam"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                I am:
              </label>
              <select
                id="iam"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              >
                <option value="">Select sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Third Row */}
            <div className="flex flex-col">
              <label
                htmlFor="birthday"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                Birthday
              </label>
              <input
                id="birthday"
                type="date"
                placeholder="dd/mm/yyyy"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-xs uppercase tracking-widest text-black mb-1"
              >
                University Name :
              </label>
              <input
                id="universityName"
                type="text"
                placeholder="Enter your university name"
                className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
              />
            </div>
            <div></div>
          </form>
          {/* Buttons and Copyright */}
          <div className="flex flex-row items-center gap-4 mb-4">
            <button
              type="submit"
              className="bg-[#3b5998] text-white px-6 py-2 rounded text-base font-mono flex items-center gap-2 hover:bg-[#2d4373] transition-colors"
            >
              register <span className="ml-1">→</span>
            </button>
            <a
              href="/login"
              className="border border-[#3b5998] text-[#3b5998] px-6 py-2 rounded text-base font-mono flex items-center gap-2 hover:bg-[#e6ecfa] transition-colors"
            >
              login <span className="ml-1">→</span>
            </a>
          </div>
          <a href="#" className="text-[#3b5998] text-sm hover:underline mt-2">
            © TheNerds 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
