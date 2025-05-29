import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";
import { addBook } from "../services/bookService";
import BookFormModal from "../components/BookFormModal"; // <-- import

const myListBooks = [
  { id: 1, cover: "src/assets/13596809.jpg", title: "Reflected in You", author: "Sylvia Day", progress:70},
  { id: 2, cover: "src/assets/a0665e6c79eb920a_400x400ar.jpg", title: "Enwined with You", author: "Sylvia Day",progress: 50 },
  { id: 3, cover: "src/assets/BaredToYou_cover_hires.jpg", title: "Bared To You", author: "Sylvia Day" , progress: 30},
];

const popularBooks = [
  { id: 4, cover: "src/assets/62047984.jpg", title: "Yellowface", author: "R.F. Kuang" },
  { id: 5, cover: "src/assets/images.jpg", title: "Twisted Love", author: "Ana Huang" },
];

const categories = [
  { name: "All" },
  { name: "Romance" },
  { name: "Fiction" },
  { name: "Manga" },
  { name: "Education" },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddBook = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = async (data) => {
    try {
      await addBook(data);
      alert("Book added!");
      setModalOpen(false);
      // Optionally refresh book list here
    } catch (e) {
      alert("Failed to add book");
    }
  };

  return (
    <>
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-20 z-10">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <main className="ml-20 min-h-screen bg-white overflow-y-auto">
        <TopBar />
        {/* Categories List moved here */}
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
        <HeroSection />
        
        <BookList title="My List" books={myListBooks} showAdd onAddClick={handleAddBook} />
        <BookList title="Popular" books={popularBooks} />
      </main>
      <BookFormModal
        open={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </>
  );
}