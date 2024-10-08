import React from 'react'
import './index.css'

const QuestionScreen = ({playerName, question, onAnswer, correctAnswer}) => {
  return (
    <div>
        <h2>Question for {playerName}</h2>
        <h3>{question.question}</h3>
        <ul style={{listStyle: "none", padding: 0}}>
            {question.options.map((option) => (
                <li key={option} onClick={() => onAnswer(option[0])} style={{cursor:"pointer", marginBottom:"10px"}}>
                    {option}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default QuestionScreen;
