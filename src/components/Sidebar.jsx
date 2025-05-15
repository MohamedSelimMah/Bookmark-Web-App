import React from "react";
import { FaHeart, FaList, FaUserCircle, FaBell } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center bg-[#d6eef4] w-20 h-full min-h-screen py-6 justify-between">
      {/* User Avatar */}
      <button className="rounded-full">
        <FaUserCircle className="text-4xl text-gray-400 " />
      </button>
      {/* Navigation Icons */}
      <nav className="flex flex-col gap-5 flex-1 justify-center">
        <button className="bg-white rounded-full p-3 shadow hover:text-white hover:bg-[#445b70] text-[#445b70] transition">
          <FaHeart size={24} />
        </button>
        <button className="bg-white rounded-full p-3 shadow hover:text-white hover:bg-[#445b70] text-[#445b70] transition">
          <FaList size={24} />
        </button>
      </nav>
      {/* Subscribe Button */}
      <div className="flex flex-col items-center ">
        <button
          className="bg-[#617886] text-white w-10 h-30 rounded-full flex items-center justify-center text-sm shadow hover:bg-[#445b70] transition rotate-180 pt-2"  
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
        >
          Subscribe 
          <div className="bg-[#c6beb3] w-8 h-8 rounded-full flex items-center justify-center border-3 border-[#617886] rotate-180 mt-2">
          <FaBell className="text-white text-s" />
        </div>
        </button>
      </div>
    </aside>
  );
}