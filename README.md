# 📖 Dictionary App

A modern dictionary web application built with **Next.js**, **React**, and **shadcn UI components**. This app allows users to search for words and view their definitions, examples, synonyms, antonyms, and even audio pronunciation.

---

## ✨ Features

- **Search for Words:** Type in a word and get a quick definition.
- **Detailed View:** Click on a word card to reveal comprehensive details.
- **API Integration:** Fetches data from [DictionaryAPI](https://dictionaryapi.dev).
- **Responsive Design:** Built mobile-first using Tailwind CSS and shadcn UI.
- **Error Handling:** Displays friendly error messages and loading indicators during API calls.

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS** (shadcn UI components)
- **JavaScript** (or TypeScript if preferred)

---

## 📌 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

---

## 🔧 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/dictionary-app.git
cd dictionary-app
npm install
# or
yarn install
npm run dev
# or
yarn dev
```
## 4️⃣ Open the App in Your Browser
- Visit http://localhost:3000 to start using the Dictionary App.

## 📂 Folder Structure
```bash
/dictionary-app
├── /app
│   ├── /components
│   │   ├── SearchBar.js           // Search input field component
│   │   ├── WordCard.js            // Displays word preview card
│   │   ├── ExpandedWordDetails.js // Shows full word details on expansion
│   │   └── TitleHeader.js         // Sets the page title and meta tags
│   ├── /services
│   │   └── dictionaryApi.js       // Contains the API fetching logic
│   └── page.js                    // Main page file
├── /public                        // Static assets (images, fonts, etc.)
├── package.json                   // Project dependencies and scripts
└── next.config.js                 // Next.js configuration file
```
## 🏗 Components Overview

### TitleHeader.js
A reusable header component that sets the page title and meta tags using Next.js's `<Head>` component.

### SearchBar.js
A user input field for entering words to search. Triggers a search when the Enter key is pressed or when the search button is clicked.

### WordCard.js
Displays the searched word with a brief preview of its definition. Toggles between a collapsed preview and an expanded view when clicked.

### ExpandedWordDetails.js
When the WordCard is expanded, this component shows the full details of the word, including:
- Full definitions
- Parts of speech
- Example sentences
- Synonyms and antonyms
- Audio pronunciation (if available)

### dictionaryApi.js
Handles API calls to the DictionaryAPI to fetch word data.

## 🏗 Components Overview

### TitleHeader.js
A reusable header component that sets the page title and meta tags using Next.js's `<Head>` component.

### SearchBar.js
A user input field for entering words to search. Triggers a search when the Enter key is pressed or when the search button is clicked.

### WordCard.js
Displays the searched word with a brief preview of its definition. Toggles between a collapsed preview and an expanded view when clicked.

### ExpandedWordDetails.js
When the WordCard is expanded, this component shows the full details of the word, including:
- Full definitions
- Parts of speech
- Example sentences
- Synonyms and antonyms
- Audio pronunciation (if available)

### dictionaryApi.js
Handles API calls to the DictionaryAPI to fetch word data.

---

## 🎯 How It Works

**User Interaction:**  
The user enters a word in the search bar.

**API Fetch:**  
The app sends a request to the DictionaryAPI to fetch data related to the word.

**Display Preview:**  
A card is shown with the word and a brief definition.

**Expand for Details:**  
Clicking the card expands it to reveal full details such as definitions, examples, synonyms, antonyms, and audio pronunciation.

---

## 🚀 Future Enhancements

- **Search History:**  
  Store recent searches in localStorage for quick access.
- **Favorites:**  
  Allow users to mark and save favorite words.
- **Progressive Web App (PWA):**  
  Enable offline usage and enhance the app with a native-like experience.
- **Multilingual Support:**  
  Extend functionality to support translations and definitions in multiple languages.

## Made with ❤️ using Next.js, React
