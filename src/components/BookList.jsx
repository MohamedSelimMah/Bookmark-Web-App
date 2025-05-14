import React from "react";
import BookCard from "./BookCard";

export default function BookList({ title, books, showAdd, onAddClick }) {
  return (
    <section className="my-6 mx-8">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-[#445b70]">{title}</h3>
        <button className="text-xs text-[#445b70] bg-[#eaf2f5] px-3 py-1 rounded-full">view all</button>
      </div>
      <div className="flex gap-4">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
        {showAdd && <BookCard isAdd onClick={onAddClick} />}
      </div>
    </section>
  );
}