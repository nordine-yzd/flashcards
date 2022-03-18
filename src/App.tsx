import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
// import { FlashCardMentale } from "./components/mental";
import arrayQuestAnsw from "./data/dataQuiz";
import FlashCardRadio from "./components/radio";
// import Example from "./components/input";
// import { anecdotes } from "./data/dataQuiz";
// import { ShowRandom } from "./components/mental";

console.log(arrayQuestAnsw);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FlashCardMentale bdd={arrayQuestAnsw} /> */}
        {/* <ShowRandom bdd={arrayQuestAnsw} /> */}
        {/* <Example /> */}
        <FlashCardRadio bdd={arrayQuestAnsw} />
      </header>
    </div>
  );
}

export default App;
