import React from "react";

const PostInput = () => {
  return (
    <>
      <div className="bg-white border border-gray-300 rounded mb-6 p-4">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Nerd it out..."
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs font-mono"
          />
        </div>
        <textarea
          placeholder="What is on your mind ?"
          className="w-full border border-gray-300 rounded px-2 py-1 text-xs font-mono mb-2"
          rows={2}
        ></textarea>
        <div className="flex gap-2 mb-2">
          <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
            add media
          </button>
          <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
            category
          </button>
          <button className="bg-[#3b5998] text-white text-xs px-3 py-0.5 rounded ml-auto">
            post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostInput;
