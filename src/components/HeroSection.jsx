import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#eaf2f5] rounded-xl my-6 mx-8 flex items-center p-8">
      {/* Illustration placeholder */}
      <div className="w-1/3 flex justify-center">
        {/* Replace this div with an <img> for your illustration */}
        <div className="w-40 h-40 bg-blue-200 rounded-full flex items-center justify-center">
          <span className="text-6xl text-blue-400">📚</span>
        </div>
      </div>
      {/* Text content */}
      <div className="flex-1 pl-10">
        <h2 className="text-3xl font-bold text-[#445b70] mb-2">Read.<br />Listen.<br />Enjoy.</h2>
        <p className="text-[#445b70] mb-4">
          Read, listen, and track your progress effortlessly. Personalize, share, and enjoy—your books, your way.
        </p>
        <button className="bg-[#445b70] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#223344] transition">
          View Out
        </button>
      </div>
    </section>
  );
}