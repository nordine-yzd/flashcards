import React from "react";

type MyTypedAnswerButton = {
  firstProp: boolean;
};

export function FlashCardMentale(): any {
  let [count, setCount] = React.useState(true);

  if (count === true) {
    return (
      <div>
        <p>Quelle science étudie les atomes et les molécules ?</p>
        <button onClick={() => setCount((count = false))}>
          Answer {count}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>La chimie</p>
        <button onClick={() => setCount((count = true))}>
          Other Questions {count}
        </button>
      </div>
    );
  }
}
