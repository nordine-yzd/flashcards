import React from "react";

type MyTypeAnswerQuestions = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardMentalProps = {
  bdd: MyTypeAnswerQuestions[];
  // toto: string;
};
// type ShowRandomProps = {
//   // rand: string[]
//   bdd: MyTypeAnswerQuestions[];

//   // toto: string;
// };

// export function ShowRandom(anecdotes: ShowRandomProps): JSX.Element {
//   let [selected, setSelected] = React.useState(0);
//   return (
//     <div className="App">
//       <h1> {anecdotes.bdd[selected].question}</h1>
//       <button onClick={() => setSelected(Math.floor(Math.random() * 3))}>
//         Show Random
//       </button>
//     </div>
//   );
// }

export function FlashCardMentale(props: FlashcardMentalProps): JSX.Element {
  let [count, setCount] = React.useState(true);
  let [selected, setSelected] = React.useState(0);
  // let [inout, setInput] = React.useState("");

  if (count === true) {
    return (
      <div>
        {/* <div> */}
        {/* {props.bdd.map((element, index) => {
            return (
              <div key={index}>
                <p key={element.question}>{element.question}</p>
              </div>
            );
          })} */}
        {/* <button onClick={() => setCount((count = false))}>Answer</button>
        </div> */}
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
        {/* <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" onInput={()=> setInput} />
        </form> */}
      </div>
    );
  }
}
