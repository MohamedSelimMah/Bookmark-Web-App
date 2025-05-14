import React from "react";
import { FaHeart, FaList, FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center bg-[#D0E7ED] w-20 h-full min-h-screen py-6 justify-between">
      {/* User Avatar */}
      <div>
        <FaUserCircle className="text-4xl text-gray-400 mb-10" />
      </div>
      {/* Navigation Icons */}
      <nav className="flex flex-col gap-5 flex-1 justify-center">
        <button className="bg-white rounded-full p-3 shadow hover:text-blue-600 text-[#445b70] transition">
          <FaHeart size={24} />
        </button>
        <button className="bg-white rounded-full p-3 shadow hover:text-blue-600 text-[#445b70] transition">
          <FaList size={24} />
        </button>
      </nav>
      {/* Subscribe Button */}
      <button className="bg-[#445b70] text-white rounded-full rotate-[-90deg] my-8 px-4 py-2">
        Subscribe
      </button>
    </aside>
  );
}