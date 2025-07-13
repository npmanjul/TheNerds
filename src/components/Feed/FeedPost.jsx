import Image from "next/image";
import React from "react";
const profilePic = "https://randomuser.me/api/portraits/women/44.jpg";

const FeedPost = () => (
  <div className=" rounded-md p-3 mb-6 bg-white">
    <div className="flex items-center mb-2">
      <Image
        src={profilePic}
        alt="profile"
        width={200}
        height={200}
        className="w-8 h-8 rounded mr-2"
      />
      <div>
        <span className="font-bold text-sm">Ananya Panday</span>
        <span className="text-xs ml-1">• IIT Mumbai</span>
        <div className="text-xs text-gray-500">
          @awesomeananya • posted 2hrs ago
        </div>
      </div>
    </div>
    <div className="text-sm mb-2">
      Feeling an odd rush of excitement as I dive into CS prep for tomorrow's
      exam who knew studying could actually feel this good? Let's do this!!
      #StudyVibes #CSEnergy
    </div>
    <Image
      src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
      alt="post"
      className="w-full rounded"
      width={1000}
      height={1000}
    />
  </div>
);

export default FeedPost;
