import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AudioBookPlayer from "../components/AudioBookPlayer";
import axios from "axios";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      setError("");
      try {
        // Replace with your actual backend endpoint
        const response = await axios.get(`http://localhost:8000/api/books/${id}/`);
        setBook(response.data);
      } catch (err) {
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-lg">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-red-600">{error}</span>
      </div>
    );
  }

  if (!book) return null;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={book.cover || "/placeholder.jpg"}
          alt={book.title}
          className="w-40 h-56 object-cover rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-4">by {book.author}</p>
          <p className="mb-6">{book.description}</p>
          {/* Progress visualization */}
          {typeof book.progress === "number" && (
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-sky-500 h-2 rounded-full"
                  style={{ width: `${book.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-right text-gray-500 mt-1">{book.progress}% completed</div>
            </div>
          )}
          {/* Audiobook player */}
          {book.audio_file && (
            <AudioBookPlayer
              audioSrc={book.audio_file}
              cover={book.cover}
              title={book.title}
              author={book.author}
            />
          )}
        </div>
      </div>
    </div>
  );
}