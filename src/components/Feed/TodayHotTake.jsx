import Image from "next/image";
import React from "react";

const profilePic = "https://randomuser.me/api/portraits/women/44.jpg";

const TodayHotTake = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Today's hot take</div>
      <div className="bg-white border border-gray-300 rounded p-3 mb-2">
        <div className="flex items-center mb-1">
          <Image
            src={profilePic}
            alt="profile"
            className="w-7 h-7 rounded mr-2"
            width={200}
            height={200}
          />
          <div>
            <span className="font-bold text-xs">Ananya Panday</span>
            <span className="text-xs ml-1">• IIT Mumbai</span>
            <div className="text-xs text-gray-500">
              @awesomeananya • posted 2hrs ago
            </div>
          </div>
        </div>
        <div className="text-xs mb-2">
          Matka is ugly ass drink chai and coffee is the way to go - prove me
          wrong mfs !
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
            comment
          </button>
          <button className="bg-gray-200 text-xs px-2 py-0.5 rounded">
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default TodayHotTake;
