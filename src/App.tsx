import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import { FlashCardMentale } from "./components/mental";
import arrayQuestAnsw from "./data/dataQuiz";

console.log(arrayQuestAnsw);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlashCardMentale />
      </header>
    </div>
  );
}

export default App;
