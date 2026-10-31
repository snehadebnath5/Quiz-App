import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question.jsx";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Database", "Operating System", "Browser"],
      answer: "Library"
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useState", "useEffect", "useRouter", "usePage"],
      answer: "useState"
    },
    {
      question: "Which language is mainly used with React?",
      options: ["JavaScript", "Python", "C++", "PHP"],
      answer: "JavaScript"
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "JSON XML"
      ],
      answer: "JavaScript XML"
    },
    {
      question: "Which method is used to render a list in React?",
      options: ["map()", "loop()", "repeat()", "list()"],
      answer: "map()"
    },
    {
      question: "Which file usually contains the main App component?",
      options: ["App.js", "index.html", "package.json", "style.css"],
      answer: "App.js"
    },
    {
      question: "Which hook is used to perform side effects?",
      options: ["useEffect", "useState", "usePage", "useData"],
      answer: "useEffect"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  function nextQuestion() {
    if (selectedAnswer === "") {
      alert("Please select an answer!");
      return;
    }

    let newScore = score;

    if (selectedAnswer === questions[currentQuestion].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      navigate("/result", {
        state: {
          score: newScore,
          total: questions.length
        }
      });
    }
  }

  return (
    <div className="quiz-container">
      <h1>Online Quiz</h1>

      <p className="question-number">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />

      <button className="next-button" onClick={nextQuestion}>
        {currentQuestion === questions.length - 1
          ? "Finish Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}

export default Quiz;