import React from "react";

export default function UserProfilePage() {
  // Replace with actual user data as needed
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    joined: "2024-01-01",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f6f3]">
      <div className="bg-white rounded-xl shadow p-10 w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#d6eef4] flex items-center justify-center mb-4">
          <span className="text-5xl text-[#445b70] font-bold">
            {user.name[0]}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-[#445b70]">{user.name}</h2>
        <div className="text-gray-600 mb-1">{user.email}</div>
        <div className="text-gray-400 text-sm">Joined: {user.joined}</div>
      </div>
    </div>
  );
}