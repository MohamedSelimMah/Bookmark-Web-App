import React from "react";

export default function BookCard({ cover, title, author, isAdd }) {
  if (isAdd) {
    return (
      <div className="w-28 h-40 flex items-center justify-center bg-[#eaf2f5] rounded-xl border-2 border-dashed border-gray-300 cursor-pointer">
        <span className="text-4xl text-gray-400">+</span>
      </div>
    );
  }
  return (
    <div className="w-28 h-40 bg-white rounded-xl shadow flex flex-col overflow-hidden">
      <img src={cover} alt={title} className="h-28 w-full object-cover" />
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div className="text-xs font-semibold text-[#445b70] truncate">{title}</div>
        <div className="text-[10px] text-gray-500 truncate">{author}</div>
      </div>
    </div>
  );
}