import Image from "next/image";
import React from "react";

const profilePic = "https://randomuser.me/api/portraits/women/44.jpg";

const birthdays = [
  { name: "Ananya Panday", msg: "Celebrating 20th bday!", img: profilePic },
  { name: "Ananya Panday", msg: "Celebrating 20th bday!", img: profilePic },
];

const Birthdays = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Birthdays</div>
      {birthdays.map((b, i) => (
        <div
          key={i}
          className="flex items-center mb-2 bg-white border border-gray-300 rounded px-2 py-1"
        >
          <Image
            src={b.img}
            alt="profile"
            width={200}
            height={200}
            className="w-12 h-12 rounded mr-2"
          />
          <div>
            <div className="flex-1">
              <div className="text-xs font-bold leading-tight">{b.name}</div>
              <div className="text-xs text-gray-600 leading-tight">{b.msg}</div>
            </div>
            <button className="bg-[#3b5998] text-white text-xs px-2 py-0.5 rounded">
              send wishes
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Birthdays;
