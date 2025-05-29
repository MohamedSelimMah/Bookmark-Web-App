import React from "react";
import { FaSearch } from "react-icons/fa";
import bookmark from "../assets/bookmark.png"; 
import { Link } from "react-router-dom"; // <-- Add this import

export default function TopBar() {
  return (
    <div className="flex flex-col gap-2 py-6 px-10 bg-white">
      {/* Top Row: Logo, Search, Button */}
      <div className="flex items-center gap-6">
        {/* Logo/avatar */}
        <Link to="/">
          <div className="w-15 h-15 rounded-full bg-[#d6eef4] flex items-center justify-center overflow-hidden cursor-pointer">
            <img src={bookmark} alt="Bookmark Logo" className="w-16 h-16 object-contain" />
          </div>
        </Link>
        {/* Search Bar */}
        <div className="flex items-center flex-1 bg-[#d6eef4] rounded-full px-6 py-3">
          <FaSearch className="text-[#445b70] mr-3" />
          <input
            type="text"
            placeholder="find book"
            className="bg-transparent outline-none flex-1 text-white placeholder-white font-semibold"
          />
        </div>
        {/* Search Button */}
        <button className="bg-[#617886] text-white font-bold px-8 py-2 rounded-full ml-2 shadow hover:bg-[#445b70] transition">
          search
        </button>
      </div>
      {/* Categories removed from here */}
    </div>
  );
}