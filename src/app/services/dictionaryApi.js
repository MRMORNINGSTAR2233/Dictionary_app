export async function fetchWordData(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
      throw new Error("Word not found. Please try another word.");
    }
    const data = await response.json();
    return data;
  }
  