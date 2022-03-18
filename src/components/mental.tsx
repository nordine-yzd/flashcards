import React from "react";

type MyTypeFlashCardMentale = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardMentalProps = {
  bdd: MyTypeFlashCardMentale[];
};

export function FlashCardMentale(props: FlashcardMentalProps): JSX.Element {
  let [state, setstate] = React.useState(true);
  let [selected, setSelected] = React.useState(0);

  // if (state === true) {
  //   return (
  //     <div>
  //       <div>
  //         <h1> {props.bdd[selected].question}</h1>
  //         <button onClick={() => setSelected(Math.floor(Math.random() *  props.bdd.length))}>
  //           Show Random
  //         </button>
  //         <button onClick={() => setstate((state = false))}>Answer</button>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>{props.bdd[selected].answer}</h1>
  //       <button onClick={() => setstate((state = true))}>
  //         Other Questions
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div>
      {state ? (
        <div>
          <h1> {props.bdd[selected].question}</h1>
          <button
            onClick={() =>
              setSelected(Math.floor(Math.random() * props.bdd.length))
            }
          >
            Show Random
          </button>
          <button onClick={() => setstate((state = false))}>Answer</button>
        </div>
      ) : (
        <div>
          <h1>{props.bdd[selected].answer}</h1>
          <button onClick={() => setstate((state = true))}>
            Other Questions
          </button>
        </div>
      )}
    </div>
  );
}
