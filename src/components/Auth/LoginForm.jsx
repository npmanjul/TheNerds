import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start justify-start">
      <form className="w-full max-w-xs flex flex-col gap-4">
        <label
          className="text-xs uppercase tracking-widest text-black mb-1"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
        />
        <label
          className="text-xs uppercase tracking-widest text-black mt-2 mb-1"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="border border-gray-400 rounded px-3 py-2 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#3b5998]"
        />
        <div className="flex flex-row gap-4 mt-4">
          <button
            type="submit"
            className="bg-[#3b5998] text-white px-6 py-2 rounded text-base font-mono flex items-center gap-2 hover:bg-[#2d4373] transition-colors"
          >
            login <span className="ml-1">→</span>
          </button>
          <Link
            href="/register"
            className="border border-[#3b5998] text-[#3b5998] px-6 py-2 rounded text-base font-mono flex items-center gap-2 hover:bg-[#e6ecfa] transition-colors"
          >
            register <span className="ml-1">→</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
