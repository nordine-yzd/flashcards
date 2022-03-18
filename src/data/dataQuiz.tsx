// import request from "@fewlines-education/request";

export type MyTypeAnswerQuestion = {
  id: number;
  question: string;
  answer: string;
  falseAnswer: string[];
};

// request(`https://videogame-api.fly.dev/games/${slug.id}`, (error, body) => {
//   if (error) {
//     throw error;
//   }
//   const json = JSON.parse(body);
//   // console.log(json);
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
    answer: "Macron",
    falseAnswer: ["Melanchon", "Jadot", "Nordine", "Macron"],
  },
  {
    id: 4,
    question: "Qui a dessiné la statue de la liberté ?",
    answer: "Gustave Eiffel",
    falseAnswer: [
      "Gustave Eiffel",
      "Richard Nixon",
      "Bill Clinton",
      "Mister liberty",
    ],
  },
  {
    id: 5,
    question: "Combien y a-t-il de quarts d’heure dans une journée ?",
    answer: "96",
    falseAnswer: ["96", "24", "162", "62"],
  },
];

export default arrayQuestAnsw;
