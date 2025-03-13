"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
        placeholder="Search for a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => query.trim() && onSearch(query.trim())}
      >
        Search
      </button>
    </div>
  );
}
