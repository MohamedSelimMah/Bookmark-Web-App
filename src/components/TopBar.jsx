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
    <div className="flex flex-col gap-4 py-4 px-8 bg-white justify-center items-center">   
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-[#eaf2f5] rounded-full px-4 py-2 w-200 ">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Find book"
          className="bg-transparent outline-none flex-1 text-gray-700"
        />
        <button className="bg-[#445b70] text-white px-5 py-2 rounded-full ml-2">
          Search
        </button>
      </div>
      {/* Categories */}
      <div className="flex gap-6 mt-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="text-[#445b70] font-medium hover:underline"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}