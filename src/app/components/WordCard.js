"use client";

import { useState } from "react";
import ExpandedWordDetails from "./ExpandedWordDetails";

export default function WordCard({ wordData }) {
  const [expanded, setExpanded] = useState(false);
  // dictionaryapi returns an array; we use the first entry for display.
  const entry = wordData[0];
  const previewDefinition = entry.meanings?.[0]?.definitions?.[0]?.definition;

  return (
    <div
      className="border rounded-md p-4 mb-4 shadow hover:shadow-lg cursor-pointer transition"
      onClick={() => setExpanded((prev) => !prev)}
    >
      <h2 className="text-2xl font-bold mb-2">{entry.word}</h2>
      <p>{previewDefinition}</p>
      {expanded && <ExpandedWordDetails entry={entry} />}
    </div>
  );
}
