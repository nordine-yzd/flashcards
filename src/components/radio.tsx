//todo
import React from "react";

type MyTypeFlashCardRadio = {
  id: number;
  question: string;
  answer: string;
  falseAnswer: string[];
};

type FlashcardRadioProps = {
  bdd: MyTypeFlashCardRadio[];
  // toto: string;
};

export default function FlashCardRadio(
  props: FlashcardRadioProps
): JSX.Element {
  let [count, setCount] = React.useState(true);
  let [selected, setSelected] = React.useState(0);
  let [checkedOne, setChekedOne] = React.useState(false);

  if (count === true) {
    return (
      <div>
        {() => setSelected(Math.floor(Math.random() * 3))}
        <div>
          <h1> {props.bdd[selected].question}</h1>
        </div>
        {props.bdd[selected].falseAnswer.map((element) => {
          return (
            <div>
              <input
                type="radio"
                onClick={() => setCount((checkedOne = true))}
                id="idradioo"
                name="nameradioo"
                value="valueradioo"
                // checked
              />
              <label>{element}</label>
            </div>
          );
        })}
        <div>
          <button>confirm</button>
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
