import React from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-mono">
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
              social networks at schools.
            </p>
            <p className="text-sm text-black mb-3 max-w-xl">
              The site is open to a lot of Indian schools, but not everywhere
              yet. We're working on it.
            </p>
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

export default Home;
