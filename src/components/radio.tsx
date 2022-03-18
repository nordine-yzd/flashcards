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
  let [random, setRandom] = React.useState(0);
  let [checkedOne, setChekedOne] = React.useState("");
  console.log(checkedOne + " checkedone");
  console.log(random);

  function resetCheckedOne() {
    console.log(checkedOne + " ds la fonction");
    checkedOne = "";
    setRandom(Math.floor(Math.random() * 3));
  }

  //affiche  les question reopnses
  if (count === true) {
    return (
      <div className="App-header">
        {() => setRandom(Math.floor(Math.random() * 3))}
        <div>
          <h1> {props.bdd[random].question}</h1>
          <br />
        </div>
        <div>
          {props.bdd[random].falseAnswer.map((element) => {
            return (
              <div className="d-flex align-items-center">
                <input
                  key={props.bdd[random].id}
                  type="radio"
                  onClick={() => setChekedOne((checkedOne = element))}
                  id="idradioo"
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
        <div>
          <br />
          <button
            onClick={() =>
              checkedOne === ""
                ? setCount((count = true))
                : setCount((count = false))
            }
          >
            confirm
          </button>
          <button onClick={resetCheckedOne}>Show Random</button>
        </div>
      </div>
    );
  } else if (checkedOne !== props.bdd[random].answer) {
    //mauvaise reponse
    return (
      <div className="App-header-red">
        <p className="display-1">Wrong answer</p>
        <div className="container ">
          <br />
          <div className="row ">
            <div className="col ">
              <p className="display-6">Your answer</p>
            </div>
            <div className="col">
              <p className="display-6">Correct answer</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>{checkedOne}</h3>
            </div>
            <div className="col">
              <h3>{props.bdd[random].answer}</h3>
            </div>
          </div>
        </div>
        <br />
        <button onClick={() => setCount((count = true))}>
          Other Questions
        </button>
      </div>
    );
  }
  //bonne reponse
  else {
    return (
      <div className="App-header-green">
        <p className="display-1">Correct answer was :</p> <br />
        <h1>{props.bdd[random].answer}</h1> <br />
        <button onClick={() => setCount((count = true))}>
          Other Questions
        </button>
      </div>
    );
  }
}
