import React from "react";

const SearchBar = () => {
  return (
    <>
      <label className="text-xs uppercase tracking-widest mb-1 block">
        Search:
      </label>
      <input
        type="text"
        placeholder="Text field data"
        className="w-full border border-gray-400 rounded px-3 py-2 text-base font-mono mb-4"
      />
    </>
  );
};

export default SearchBar;
