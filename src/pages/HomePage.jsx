import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";

const myListBooks = [
  { id: 1, cover: "https://covers.openlibrary.org/b/id/10523338-L.jpg", title: "Reflected in You", author: "Sylvia Day" },
  { id: 2, cover: "https://covers.openlibrary.org/b/id/10523339-L.jpg", title: "Enwined with You", author: "Sylvia Day" },
  { id: 3, cover: "https://covers.openlibrary.org/b/id/10523340-L.jpg", title: "Sylvia Day", author: "Sylvia Day" },
];

const popularBooks = [
  { id: 4, cover: "https://covers.openlibrary.org/b/id/10523341-L.jpg", title: "Yellowface", author: "R.F. Kuang" },
  { id: 5, cover: "https://covers.openlibrary.org/b/id/10523342-L.jpg", title: "Happy Place", author: "Emily Henry" },
];

export default function HomePage() {
  return (
    <>
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-20 z-10">
        <Sidebar />
      </div>
      {/* Main Content */}
      <main className="ml-20 min-h-screen bg-white overflow-y-auto ">
        <TopBar />
        <HeroSection />
        <BookList title="My List" books={myListBooks} showAdd />
        <BookList title="Popular" books={popularBooks} />
      </main>
    </>
  );
}