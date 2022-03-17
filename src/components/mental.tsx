import React from "react";

export type MyTypeAnswerQuestions = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardMentalProps = {
  bdd: MyTypeAnswerQuestions[];
  // toto: string;
};
type ShowRandomProps = {
  rand: string[];
  // toto: string;
};

// export function ShowRandom(anecdotes: ShowRandomProps): JSX.Element {
//   let [selected, setSelected] = React.useState(0);
//   return (
//     <div className="App">
//       <h1> {anecdotes.rand[selected]}</h1>
//       <button
//         onClick={() =>
//           setSelected(Math.floor(Math.random() * anecdotes.rand.length))
//         }
//       >
//         Show Random
//       </button>
//     </div>
//   );
// }

export function FlashCardMentale(props: FlashcardMentalProps): JSX.Element {
  let [count, setCount] = React.useState(true);

  if (count === true) {
    return (
      <div>
        {props.bdd.map((element, index) => {
          return (
            <div key={index}>
              <p key={element.question}>{element.question}</p>
            </div>
          );
        })}
        <button onClick={() => setCount((count = false))}>Answer</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.bdd[0].answer}</p>
        <button onClick={() => setCount((count = true))}>
          Other Questions
        </button>
      </div>
    );
  }
}
