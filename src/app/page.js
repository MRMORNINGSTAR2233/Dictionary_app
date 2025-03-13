"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordCard from "./components/WordCard";
import { fetchWordData } from "./services/dictionaryApi";
import TitleHeader from "./components/TitleHeader";

export default function HomePage() {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (word) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWordData(word);
      setWordData(data);
    } catch (err) {
      setError(err.message || "Error fetching data");
      setWordData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <TitleHeader/>
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {wordData && <WordCard wordData={wordData} />}
    </div>
    </>
  );
}
