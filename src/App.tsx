import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import { FlashCardMentale } from "./components/mental";
import arrayQuestAnsw from "./data/dataQuiz";
// import { anecdotes } from "./data/dataQuiz";
// import { ShowRandom } from "./components/mental";

console.log(arrayQuestAnsw);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlashCardMentale bdd={arrayQuestAnsw} />
        {/* <ShowRandom rand={anecdotes} /> */}
      </header>
    </div>
  );
}

export default App;
