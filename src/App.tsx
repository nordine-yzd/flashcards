import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import arrayQuestAnsw from "./data/dataQuiz";
import { FlashCardMentale } from "./components/mental";
import { FlashCardInput } from "./components/input";
import FlashCardRadio from "./components/radio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlashCardMentale bdd={arrayQuestAnsw} />
        <hr />
        <FlashCardRadio bdd={arrayQuestAnsw} />
        <hr />
        <FlashCardInput bdd={arrayQuestAnsw} />
      </header>
    </div>
  );
}

export default App;
