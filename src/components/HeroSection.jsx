import React from "react";
import girlReading from "../assets/girl-reading-book-illustration-download-in-svg-png-gif-file-formats--female-student-read-books-lover-pack-school-education-illustrations-3238408.webp";

export default function HeroSection() {
  return (
    <section className="bg-[#d6eef4] rounded-xl my-6 mx-auto flex items-center p-8 max-h-70 max-w-250 shadow-lg">
      {/* Illustration */}
      <div className=" flex flex-1 justify-center items-center">
        <img
          src={girlReading} 
          alt="Girl reading"
          className="max-h-75 w-auto"
        />
      </div>
      {/* Text content */}
      <div className="flex-1  text-center">
        <h2 className="text-3xl font-extrabold text-[#917F74] mb-2 ">Read.<br />Listen. Enjoy.</h2>
        <p className="text-[#917F74] mb-4">
          Read, listen, and track your progress<br/> effortlessly. Personalize, share, and<br/> enjoy—your books, your way
        </p>
        <button className="bg-[#617886] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#223344] transition">
          view out
        </button>
      </div>
    </section>
  );
}