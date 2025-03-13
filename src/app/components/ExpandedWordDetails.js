"use client";

export default function ExpandedWordDetails({ entry }) {
  return (
    <div className="mt-4">
      {entry.phonetics?.map((phonetic, index) => (
        <div key={index} className="mb-2">
          {phonetic.text && <p><strong>Pronunciation:</strong> {phonetic.text}</p>}
          {phonetic.audio && (
            <audio controls src={phonetic.audio} className="mt-1">
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
      {entry.meanings.map((meaning, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{meaning.partOfSpeech}</h3>
          {meaning.definitions.map((def, idx) => (
            <div key={idx} className="ml-4 my-2">
              <p><strong>Definition:</strong> {def.definition}</p>
              {def.example && <p><strong>Example:</strong> {def.example}</p>}
              {def.synonyms && def.synonyms.length > 0 && (
                <p>
                  <strong>Synonyms:</strong> {def.synonyms.join(", ")}
                </p>
              )}
              {def.antonyms && def.antonyms.length > 0 && (
                <p>
                  <strong>Antonyms:</strong> {def.antonyms.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
