import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";
import { getBooks, addBook } from "../services/bookService";

const myListBooks = [
  { id: 1, cover: "src/assets/13596809.jpg", title: "Reflected in You", author: "Sylvia Day", progress:70},
  { id: 2, cover: "src/assets/a0665e6c79eb920a_400x400ar.jpg", title: "Enwined with You", author: "Sylvia Day",progress: 50 },
  { id: 3, cover: "src/assets/BaredToYou_cover_hires.jpg", title: "Bared To You", author: "Sylvia Day" , progress: 30},
];

const popularBooks = [
  { id: 4, cover: "src/assets/62047984.jpg", title: "Yellowface", author: "R.F. Kuang" },
  { id: 5, cover: "src/assets/images.jpg", title: "Twisted Love", author: "Ana Huang" },
];

export default function HomePage() {
  const [books, setBooks] = useState([]);

  // Fetch books on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // const token = localStorage.getItem("token");
        const data = await getBooks(/*token*/);
        setBooks(data);
      } catch (e) {
        alert("Failed to fetch books");
      }
    };
    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    const title = prompt("Book title?");
    const author = prompt("Author?");
    if (!title || !author) return;
    try {
      await addBook({
        title,
        author,
        description: "",
        cover_image: "",
        audio_file: ""
      }, /*token*/);
      alert("Book added!");
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
        <HeroSection />
        <BookList title="My List" books={myListBooks} showAdd onAddClick={handleAddBook} />
        <BookList title="Popular" books={popularBooks} />
        <BookList title="All Books" books={books} />
      </main>
    </>
  );
}