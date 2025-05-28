import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import bookmark from "../assets/bookmark.png";
import { FaSearch } from "react-icons/fa";
import cover1 from "../assets/13596809.jpg";

// Mock book data with extra fields for demo
const allBooks = [
  {
    id: 1,
    cover: cover1,
    title: "Reflected in You",
    author: "Sylvia Day",
    progress: 70,
    description: `Gideon Cross. As beautiful and flawless on the outside as he was damaged and tormented on the inside. He was a bright, scorching flame that singed me with the darkest of pleasures. I couldn't stay away. I didn't want to. He was my addiction... my every desire... mine.

My past was as violent as his, and I was just as broken. We’d never work. It was too hard, too painful... except when it was perfect. Those moments when the driving hunger and desperate love were the most exquisite insanity.

We were bound by our need. And our passion would take us beyond our limits to the sweetest, sharpest edge of obsession...`,
    genres: ["Romance", "Fiction", "Adult"],
    pages: 432,
    published: "October 2, 2012",
    rating: 4.1,
    ratingsCount: 120000,
    authorImg: "src/assets/author.jpg",
    authorBio: "Sylvia Day is a bestselling author known for her romance novels.",
  },
  // ...other books
];

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  // Ref for Chapters Table
  const chaptersRef = useRef(null);

  // Scroll to Chapters Table handler
  const handleReadClick = () => {
    if (chaptersRef.current) {
      chaptersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const foundBook = allBooks.find((b) => b.id === Number(id));
    setBook(foundBook);
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-red-600">Book not found.</span>
      </div>
    );
  }

  // Place this above the Chapter 1 Section
  const chapters = Array.from({ length: 19 }, (_, i) => {
    const chapterNum = i + 1;
    return {
      number: chapterNum,
      title: `Reflected in You: Chapter ${chapterNum}`,
      date: "August 20, 2023",
      pdfUrl: `/pdfs/chapter-${chapterNum}.pdf`, // Adjust path as needed
    };
  });

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-20 z-10">
        <Sidebar />
      </div>
      <main className="ml-20 min-h-screen bg-white overflow-y-auto">
        <div className="flex flex-col gap-2 py-6 px-10 bg-white">
          {/* Top Row: Logo, Search, Button */}
          <div className="flex items-center gap-6 mb-8">
            {/* Logo/avatar */}
            <div className="w-15 h-15 rounded-full bg-[#d6eef4] flex items-center justify-center overflow-hidden">
              <img src={bookmark} alt="Bookmark Logo" className="w-16 h-16 object-contain" />
            </div>
            {/* Search Bar */}
            <div className="flex items-center flex-1 bg-[#d6eef4] rounded-full px-6 py-3">
              <FaSearch className="text-[#445b70] mr-3" />
              <input
                type="text"
                placeholder="find book"
                className="bg-transparent outline-none flex-1 text-white placeholder-white font-semibold"
              />
            </div>
            {/* Search Button */}
            <button className="bg-[#617886] text-white font-bold px-8 py-2 rounded-full ml-2 shadow hover:bg-[#445b70] transition">
              search
            </button>
          </div>
          <div className="max-w-5xl mx-auto p-8">
            <div className="flex flex-col md:flex-row gap-10 bg-[#f7f6f3] rounded-xl shadow p-8">
              {/* Book Cover and Rate Section */}
              <div className="flex flex-col items-center">
                <img
                  src={book.cover || "/placeholder.jpg"}
                  alt={book.title}
                  className="w-60 h-100 object-cover rounded-lg shadow mb-4"
                />
                {/* Rate the Book */}
                <div className="mt-2 w-full flex flex-col items-center">
                  <div className="font-semibold mb-1" style={{ color: "#617886" }}>Rate this book</div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-2xl cursor-pointer text-gray-300 hover:text-yellow-400 transition"
                        // Add onClick logic here if you want to handle rating
                      >★</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Book Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2" style={{ color: "#917F74" }}>{book.title}</h1>
                <p className="text-xl text-gray-700 mb-2">{book.author}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">★</span>
                  <span className="font-semibold text-lg">{book.rating || "4.0"}</span>
                  <span className="text-gray-500 ml-2">({book.ratingsCount || "100,000"} ratings)</span>
                </div>
                <p className="mb-4 border-l-4 border-[#917F74] pl-4 bg-white py-2">{book.description || "No description available."}</p>
                {/* Action Buttons */}
                <div className="flex gap-4 mb-4">
                  <button
                    className="bg-[#617886] text-white font-bold px-8 py-2 rounded-full ml-2 shadow hover:bg-[#445b70] transition"
                    onClick={handleReadClick}
                  >
                    Read
                  </button>
                  <button
                    className="bg-white text-[#617886] px-6 py-2 rounded-full font-semibold border border-[#617886] hover:border-[#617886] transition flex items-center gap-2"
                    onClick={() => {
                      // Scroll to chapters table and focus on audio column
                      if (chaptersRef.current) {
                        chaptersRef.current.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <polygon points="6,4 16,10 6,16" />
                    </svg>
                    Listen to Audiobook
                  </button>
                  {/* Favorites Circle Button */}
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#617886] text-[#617886] hover:bg-[#617886] hover:text-white transition"
                    title="Add to Favorites"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                  </button>
                </div>
                {/* Book Info */}
                <div className="text-sm text-gray-600 mb-2">
                  <span>{book.pages || "400"} pages</span>
                  <span className="mx-2">•</span>
                  <span>Published {book.published || "2020"}</span>
                </div>
                {/* Progress Bar */}
                {typeof book.progress === "number" && (
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-sky-500 h-2 rounded-full"
                        style={{ width: `${book.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-right text-gray-500 mt-1">{book.progress}% completed</div>
                  </div>
                )}
              </div>
            </div>
            {/* About the Author */}
            <div className="mt-10 bg-[#f7f6f3] rounded-xl shadow p-6 flex items-center gap-6">
              <img
                src={book.authorImg || "/placeholder-author.jpg"}
                alt={book.author}
                className="w-20 h-20 object-cover rounded-full border-2 border-[#917F74]"
              />
              <div>
                <div className="font-bold text-lg mb-1" style={{ color: "#917F74" }}>About the author</div>
                <div className="font-semibold">{book.author}</div>
                <div className="text-gray-700">{book.authorBio || "No bio available."}</div>
              </div>
            </div>
            {/* Chapters Table - New Section */}
            <div
              className="mt-10 bg-white rounded-xl shadow p-0 overflow-x-auto"
              ref={chaptersRef}
            >
              <div className="bg-[#d6eef4] text-white font-bold px-6 py-3 rounded-t-xl text-lg">
                Chapters
              </div>
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-[#f7f6f3] text-[#445b70]">
                    <th className="px-6 py-3 font-semibold">Vol/Ch</th>
                    <th className="px-6 py-3 font-semibold">Chapter Title</th>
                    <th className="px-6 py-3 font-semibold">Release Date</th>
                    <th className="px-6 py-3 font-semibold">Audio</th> {/* Added Audio column */}
                  </tr>
                </thead>
                <tbody>
                  {chapters.map((ch) => (
                    <tr key={ch.number} className="border-b hover:bg-[#f3f1fa] text-[#617886]">
                      <td className="px-6 py-3 font-bold">Ch. {ch.number}</td>
                      <td className="px-6 py-3">
                        <a
                          href={ch.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#617886] hover:underline"
                        >
                          {ch.title}
                        </a>
                      </td>
                      <td className="px-6 py-3">{ch.date}</td>
                      <td className="px-6 py-3">
                        {/* Audio play icon instead of "Listen" */}
                        <a
                          href={`/audios/chapter-${ch.number}.mp3`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#617886] hover:underline flex items-center"
                          title="Play Audio"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <polygon points="6,4 16,10 6,16" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}