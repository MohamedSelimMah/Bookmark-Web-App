import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";
import { addBook } from "../services/bookService";

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
  // Assume books is an array of book objects fetched from your backend
  const books = [
    // Example: { id: 1, title: "Book Title" }
  ];

  const handleAddBook = async () => {
    // Replace with a proper form in production!
    const title = prompt("Book title?");
    const author = prompt("Author?");
    if (!title || !author) return;
    try {
      // If using JWT, get token from localStorage
      // const token = localStorage.getItem("token");
      await addBook({ title, author }, /*token*/);
      alert("Book added!");
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
        <HeroSection />
        <BookList title="My List" books={myListBooks} showAdd onAddClick={handleAddBook} />
        <BookList title="Popular" books={popularBooks} />
        {/* Remove this block unless you plan to use it:
        <div>
          {books.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <div className="p-4 border rounded mb-2 hover:bg-gray-100 cursor-pointer">
                {book.title}
              </div>
            </Link>
          ))}
        </div>
        */}
      </main>
    </>
  );
}