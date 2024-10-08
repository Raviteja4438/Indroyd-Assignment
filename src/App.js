import React, {useState} from 'react'
import { QRCodeSVG } from "qrcode.react"; // For SVG format
import QuestionScreen from './components/QuestionScreen'
import PlayerScreen from './components/PlayerScreen'
import './App.css'

const questions = [
  { question: "What is the capital of France?", options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"], answer: "C" },
  { question: "Which planet is known as the Red Planet?", options: ["A: Earth", "B: Mars", "C: Jupiter", "D: Saturn"], answer: "B" },
  { question: "What is the largest ocean on Earth?", options: ["A: Atlantic", "B: Indian", "C: Arctic", "D: Pacific"], answer: "D" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["A: Oxygen", "B: Nitrogen", "C: Carbon Dioxide", "D: Hydrogen"], answer: "C" },
  { question: "What is the hardest natural substance on Earth?", options: ["A: Gold", "B: Diamond", "C: Iron", "D: Silver"], answer: "B" }
];

function App() {
  const [playerName, setPlayerName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false);

  const handleJoinGame = (name) => {
    setPlayerName(name);
  };

  const handleAnswerSubmission = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setCorrectAnswer(true);
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
          setIsGameOver(true);
        }
        setCorrectAnswer(false);
      }, 1000);
    } else {
      alert("Wrong answer! Try again.")
    }
  }

  return (
    <div className='App'>
      {!playerName ? (
        <>
          <h2>Scan the QR code to join</h2>
          <QRCodeSVG
            value="http://localhost:3000"
            size={200}
            bgColor="#ffffff"
            fgColor="#007bff"
            level="Q"
          />
          <PlayerScreen onJoin={handleJoinGame} />
        </>
      ) : isGameOver ? (
        <h2>Game Over! Well done, {playerName}!</h2>
      ) : (
          <QuestionScreen
            playerName={playerName}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswerSubmission}
            correctAnswer={correctAnswer}
          />
      )}
    </div>
  )
}

export default App;
