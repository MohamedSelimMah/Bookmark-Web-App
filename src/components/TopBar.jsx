import React from "react";
import { FaSearch } from "react-icons/fa";
import bookmark from "../assets/bookmark.png"; 

const categories = [
  { name: "All" },
  { name: "Romance" },
  { name: "Fiction" },
  { name: "Manga" },
  { name: "Education" },
];
export default function TopBar() {
  return (
    <div className="flex flex-col gap-2 py-6 px-10 bg-white">
      {/* Top Row: Logo, Search, Button */}
      <div className="flex items-center gap-6">
        {/* Logo/avatar */}
        <div className="w-15 h-15 rounded-full bg-[#d6eef4] flex items-center justify-center overflow-hidden">
          <img src={bookmark} alt="Bookmark Logo" className="w-16 h-16 object-contain" />
        </div>
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
      {/* Categories */}
      <div className="flex gap-3 mt-5 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="px-4 py-1 rounded-full bg-[#d6eef4] text-[#445b70] font-semibold hover:bg-[#617886] hover:text-white transition"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}