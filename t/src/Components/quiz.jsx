// App.jsx
import React, { useState } from "react";

const questions = [
  {
    question: "What did we do the first day we started dating?",
    options: [
      "Bowling & Dutch",
      "Pedicure & Mall",
      "Minigolf & Tacos",
      "Gym and Relax",
    ],
    correctIndex: 1, // B
  },
  {
    question: "What gift did I get you for our 2 month?",
    options: [
      "Candles &",
      "Blanket & Candy",
      "Massage",
      "A nice dinner out",
    ],
    correctIndex: 2, // C
  },
  {
    question: "What gift did I get you for our 3 month?",
    options: [
      "Flowers and Drawings",
      "Flowers and a Picture of us",
      "Flowers and a Poster",
      "Flowers and a Massage",
    ],
    correctIndex: 0, // A
  },
  {
    question: "What is my favorite thing about you?",
    options: [
      "You make me feel like the best version of myself",
      "You motivate me to achieve all my wants and goals",
      "You always being there to talk to you whenever I need you to be",
      "All of the above",
    ],
    correctIndex: 3, // D
  },
  {
    question: "What is my favorite memory about us dating?",
    options: [
      "Sedona Trip",
      "Los Angeles Trip",
      "Our 3 month",
      "Our 2 month",
    ],
    correctIndex: 2, // C
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (selectedOption === questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div style={styles.container}>
        <h1>Our Quiz 💕</h1>
        <p>
          You scored {score} out of {questions.length}
        </p>
        <button style={styles.button} onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div  style={styles.container}>
      <h1 style={{ textShadow: "0 0 10px rgba(255, 192, 203, 0.7)" }}>Quiz About Us 💞</h1>
      <div style={styles.card}>
        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p>{question.question}</p>
        <div>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              style={{
                ...styles.optionButton,
                ...(selectedOption === index ? styles.selectedOption : {}),
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          style={{
            ...styles.button,
            ...(selectedOption === null ? styles.disabledButton : {}),
          }}
          onClick={handleNext}
          disabled={selectedOption === null}
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "45rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Romantic",
    background: "radial-gradient(circle at bottom, #550037 0%, #000000 40%, #0b0b14 100%)",
    padding: "0rem",
    color: "white",
    borderTop: "2px solid hotpink",
    // borderBottom: "2px solid hotpink",
  },
  card: {
    background: "#000000ff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    maxWidth: "500px",
    width: "100%",
    border: ".5px solid hotpink",
  },
  optionButton: {
    width: "100%",
    textAlign: "left",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    borderRadius: "8px",
    border: "1px solid hotpink",
    background: "#fafafa",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
  selectedOption: {
    borderColor: "#ff4b7a",
    background: "#b9b9b9ff",
  },
  button: {
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    background: "#ff4b7a",
    color: "#fff",
  },
  disabledButton: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

export default Quiz;
