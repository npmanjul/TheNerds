import Image from "next/image";
import React from "react";

const profilePic = "https://randomuser.me/api/portraits/women/44.jpg";

const suggestions = [
  { name: "Ananya Panday", college: "IIT Mumbai", img: profilePic },
  { name: "Vijay", college: "IIT Roorkee", img: profilePic },
  { name: "Narendra Modi", college: "SRCC Delhi", img: profilePic },
  { name: "Narendra Modi", college: "SRCC Delhi", img: profilePic },
];

const Suggestions = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Nerds you may know</div>
      {suggestions.map((s, i) => (
        <div
          key={i}
          className="flex items-center mb-2 bg-white border border-gray-300 rounded px-2 py-1"
        >
          <Image
            src={s.img}
            alt="profile"
            width={200}
            height={200}
            className="w-12 h-12 rounded mr-2 "
          />
          <div>
            <div className="flex-1">
              <div className="text-xs font-bold leading-tight">{s.name}</div>
              <div className="text-xs text-gray-600 leading-tight">
                {s.college}
              </div>
            </div>
            <button className="bg-[#3b5998] text-white text-xs px-2 py-0.5 rounded mr-1">
              add friend
            </button>
            <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
              ignore
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Suggestions;
