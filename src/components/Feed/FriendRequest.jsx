import Image from "next/image";
import React from "react";
const profilePic = "https://randomuser.me/api/portraits/women/44.jpg";
const friendRequests = [
  { name: "Ananya Panday", college: "IIT Mumbai", img: profilePic },
  { name: "Karina Kapoor", college: "IIT Madras", img: profilePic },
  { name: "Karina Kapoor", college: "IIT Madras", img: profilePic },
];

const FriendRequest = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Friend requests</div>
      {friendRequests.map((f, i) => (
        <div key={i} className="flex items-center mb-2">
          <Image
            src={f.img}
            alt="profile"
            width={200}
            height={200}
            className="w-8 h-8 rounded mr-2"
          />
          <div className="flex-1">
            <div className="text-xs font-bold leading-tight">{f.name}</div>
            <div className="text-xs text-gray-600 leading-tight">
              {f.college}
            </div>
            <div className="flex gap-1 mt-1">
              <button className="bg-[#3b5998] text-white text-xs px-2 py-0.5 rounded">
                accept
              </button>
              <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
                decline
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequest;
