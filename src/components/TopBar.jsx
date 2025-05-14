import React from "react";
import { FaSearch } from "react-icons/fa";

const categories = [
  { name: "All" },
  { name: "Romance" },
  { name: "Fiction" },
  { name: "Manga" },
  { name: "Education" },
];

export default function TopBar() {
  return (
    <div className="flex items-center gap-6 py-6 px-10 bg-white">
      {/* Logo/avatar */}
      <div className="w-14 h-14 rounded-full bg-[#d6eef4] flex items-center justify-center">
        {/* Replace with your logo image if you have one */}
        <span className="font-bold text-xs text-[#445b70]">BOOK<br />MARK</span>
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
      <button className="bg-[#617886] text-white font-bold px-8 py-2 rounded-full ml-4 shadow hover:bg-[#445b70] transition">
        search
      </button>
    </div>
  );
}