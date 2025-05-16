import React from "react";

export default function BookCard({ cover, title, author, isAdd }) {
  if (isAdd) {
    return (
      <div className="w-28 min-w-[7rem] flex-shrink-0">
        <div className="rounded-md overflow-hidden shadow-md bg-[#eaf2f5] flex items-center justify-center h-46 border-2 border-dashed border-gray-300 cursor-pointer">
          <span className="text-4xl text-gray-400">+</span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-28 min-w-[7rem] flex-shrink-0">
      <div className="rounded-md overflow-hidden shadow-md bg-white">
        <img src={cover} alt={title} className="w-full h-40 object-cover" />
        <div className="bg-[#f5f5f5] text-xs text-center py-1 font-semibold text-gray-700 rounded-b-md truncate">
          {title}
        </div>
      </div>
    </div>
  );
}