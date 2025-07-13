import React from "react";
import NavbarMain from "@/components/Common/NavbarMain";
import FeedPost from "@/components/Feed/FeedPost";
import FriendRequest from "@/components/Feed/FriendRequest";
import Applications from "@/components/Feed/Applications";
import Events from "@/components/Feed/Events";
import TodayHotTake from "@/components/Feed/TodayHotTake";
import Birthdays from "@/components/Feed/Birthdays";
import Suggestions from "@/components/Feed/Suggestions";
import SearchBar from "@/components/Common/SearchBar";
import PostInput from "@/components/Feed/PostInput";

const FeedPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-mono">
      <NavbarMain />

      <div className="flex justify-center w-full px-2 py-8">
        <div className="w-full max-w-7xl flex gap-6">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="mb-6">
              <SearchBar />
            </div>
            <div className="mb-6">
              <FriendRequest />
            </div>
            <div className="mb-6">
              <Applications />
            </div>
            <div>
              <Events />
            </div>
          </div>

          {/* Center Feed */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="font-bold text-lg mb-4">News feed</div>
            <PostInput />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="mb-6">
              <TodayHotTake />
            </div>
            <div className="mb-6">
              <Birthdays />
            </div>
            <div>
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
