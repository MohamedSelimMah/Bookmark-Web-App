import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";
import { addBook, getBooks } from "../services/bookService";
import BookFormModal from "../components/BookFormModal"; // <-- import

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
  const [myListBooks, setMyListBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const books = await getBooks();
        // If paginated, use books.results
        const bookArray = Array.isArray(books) ? books : books.results;
        setMyListBooks(
          bookArray.map((book) => ({
            id: book.id,
            cover: book.cover_image || "src/assets/placeholder.jpg",
            title: book.title,
            author: book.author,
            progress: book.progress || 0,
          }))
        );
      } catch (e) {
        console.error("Failed to fetch books", e);
      }
    }
    fetchBooks();
  }, []);

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
      // Refresh book list after adding
      const books = await getBooks();
      setMyListBooks(
        books.map((book) => ({
          id: book.id,
          cover: book.cover_image || "src/assets/placeholder.jpg",
          title: book.title,
          author: book.author,
          progress: book.progress || 0,
        }))
      );
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