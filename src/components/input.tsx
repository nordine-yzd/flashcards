// //todo cree un composent avec input qui permet d'ecrire la reponse un use state qui affiche et cache la reponse au clic
import React from "react";

type MyTypeAnswerQuestions = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardMentalProps = {
  bdd: MyTypeAnswerQuestions[];
};

export function FlashCardInput(props: FlashcardMentalProps): JSX.Element {
  const [input, setInput] = React.useState("");
  let [state, setstate] = React.useState(true);
  let [random, setRandom] = React.useState(0);
  console.log(input);
  console.log(state);
  console.log(random);

  function getInput() {
    if (input !== "") {
      setstate((state = false));
    }
  }
  return (
    <div>
      {state ? (
        <div>
          <h1> {props.bdd[random].question}</h1>
          <div>
            <input
              type="text"
              onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={getInput}>confirm</button>
          </div>
          <br />
          <button
            onClick={() =>
              setRandom(Math.floor(Math.random() * props.bdd.length))
            }
          >
            Show Random
          </button>
        </div>
      ) : input === props.bdd[random].answer ? (
        <div className="App-header-green">
          <p className="display-1">Correct answer was :</p> <br />
          <h1>{props.bdd[random].answer}</h1> <br />
          <button onClick={() => setstate((state = true))}>
            Other Questions
          </button>
        </div>
      ) : (
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
                <h3>{input}</h3>
              </div>
              <div className="col">
                <h3>{props.bdd[random].answer}</h3>
              </div>
            </div>
          </div>
          <br />
          <button onClick={() => setstate((state = true))}>
            Other Questions
          </button>
        </div>
      )}
    </div>
  );
}
