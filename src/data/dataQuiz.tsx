// import express from "express";
// const app = express();

export type MyTypeAnswerQuestion = {
  id: number;
  question: string;
  answer: string;
  falseAnswer: string[];
};

// app.request(`https://videogame-api.fly.dev/games/${slug.id}`, (error, body) => {
//   if (error) {
//     throw error;
//   }
//   const json = JSON.parse(body);
//   // console.log(json);
//   res.render("details_of_game.njk", { details: json });
// });

const arrayQuestAnsw: MyTypeAnswerQuestion[] = [
  {
    id: 1,
    question: "Quel est le plus long fleuve du monde ? ",
    answer: "Nil",
    falseAnswer: ["Le robinet", "La piscine de Lille", "Nil", "Le Rhin"],
  },
  {
    id: 2,
    question: "Quelle est la plus grande ville du continent européen ? ",
    answer: "Londres",
    falseAnswer: ["Lyon", "Amsterdam", "Madrid", "Londres"],
  },
  {
    id: 3,
    question: "Comment s'appelle le president français ? ",
    answer: "Nordine",
    falseAnswer: ["Lepen", "Jadot", "Nordine", "Macron"],
  },
];

// export const anecdotes = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

export default arrayQuestAnsw;
