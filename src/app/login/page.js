"use client";
import LoginForm from "@/components/Auth/LoginForm";
import Navbar from "@/components/Auth/Navbar";
import React from "react";

const colleges = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT Madras",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIM Ahmedabad",
  "IIM Bangalore",
  "IIM Calcutta",
  "IIM Lucknow",
  "BITS Pilani",
  "BITS Goa",
  "BITS Hyderabad",
  "IIIT Hyderabad",
  "IIIT Delhi",
  "NID Ahmedabad",
  "NIFT Delhi",
  "SRCC",
  "St. Stephen's",
  "Hindu College",
  "Miranda House",
  "LSR",
  "Ashoka",
  "ISB Hyderabad",
  "XLRI Jamshedpur",
  "NALSAR Hyderabad",
  "Symbiosis",
  "NMIMS",
  "Christ University",
  "VIT Vellore",
  "Manipal",
  "Srishti",
  "Pearl Academy",
];

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] font-mono">
      {/* Header */}
      <Navbar />
      {/* Main Content Box */}
      <div className="flex justify-center items-center w-full min-h-[80vh] py-8 px-2">
        <div className="bg-white rounded-none shadow-none w-full max-w-5xl flex flex-col md:flex-row px-8 sm:px-12 py-12 gap-8">
          {/* Left: Welcome and Info */}
          <div className="flex-1 flex flex-col justify-center md:pr-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-2 text-black">
              Welcome to TheNerds
            </h1>
            <p className="text-sm text-black mb-3 max-w-xl">
              TheNerds is an online directory that connects people through
              social networks at colleges.
            </p>
            <p className="text-sm text-black mb-3 max-w-xl">
              We have opened up TheNerds for popular consumption at:
            </p>
            <p className="text-sm text-black mb-3 max-w-xl whitespace-pre-line">
              {colleges.join(" \u2022 ")}
            </p>
            <div className="text-sm text-black mb-3 max-w-xl">
              <span className="font-bold">You can use Thenerds to:</span>
              <ul className="list-disc list-inside mt-1">
                <li>Search for people at your school</li>
                <li>Find out who is in your classes</li>
                <li>Look up your friends' friends</li>
                <li>See a visualization of your social network</li>
              </ul>
            </div>
            <a href="#" className="text-[#3b5998] text-sm hover:underline mt-2">
              © TheNerds 2025
            </a>
          </div>
          {/* Right: Login Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
