import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

const questions = [
  {
    id: 1223,
    question: "what language is react based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "what are the building blocks of react app?",
    answer: "Componenets",
  },
  {
    id: 8832,
    question: "what's the name of the syntax we use to describe a UI in react?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "what language is react based on?",
    answer: "JavaScript",
  },
  {
    id: 1523,
    question: "what language is react based on?",
    answer: "JavaScript",
  },
  {
    id: 7836,
    question: "what are the building blocks of react app?",
    answer: "Componenets",
  },
  {
    id: 8732,
    question: "what's the name of the syntax we use to describe a UI in react?",
    answer: "JSX",
  },
  {
    id: 1997,
    question: "what language is react based on?",
    answer: "JavaScript",
  },
];
function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id);
  }
  return (
    <div className="flash">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
