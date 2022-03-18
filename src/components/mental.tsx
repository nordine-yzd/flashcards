import React from "react";

type MyTypeAnswerQuestions = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardMentalProps = {
  bdd: MyTypeAnswerQuestions[];
};

export function FlashCardMentale(props: FlashcardMentalProps): JSX.Element {
  let [count, setCount] = React.useState(true);
  let [selected, setSelected] = React.useState(0);

  if (count === true) {
    return (
      <div>
        <div>
          <h1> {props.bdd[selected].question}</h1>
          <button onClick={() => setSelected(Math.floor(Math.random() * 3))}>
            Show Random
          </button>
          <button onClick={() => setCount((count = false))}>Answer</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.bdd[selected].answer}</h1>
        <button onClick={() => setCount((count = true))}>
          Other Questions
        </button>
      </div>
    );
  }
}
