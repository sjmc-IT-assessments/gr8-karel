import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    title: 'Question 1: Row and Back',
    description: 'Place balls across entire row and return to start facing East.',
    points: 5,
    tests: ['All spaces have balls', 'Karel at start', 'Karel facing East'],
    startState: {
      worldSize: { width: 8, height: 1 },
      karelPos: { x: 0, y: 0, dir: 'east' }
    }
  },
  {
    id: 2, 
    title: 'Question 2: Opposite Squares',
    description: 'Draw squares at both ends. Work in any size world (min 4x2).',
    points: 5,
    tests: ['Squares drawn correctly', 'Works in different sizes', 'End position correct'],
    startState: {
      worldSize: { width: 8, height: 4 },
      karelPos: { x: 0, y: 0, dir: 'east' }
    }
  },
  {
    id: 3,
    title: 'Question 3: K for Karel',
    description: 'Draw a K shape with balls and return to start.',
    points: 5,
    tests: ['K pattern correct', 'Returns to start', 'Uses functions'],
    startState: {
      worldSize: { width: 10, height: 10 },
      karelPos: { x: 0, y: 0, dir: 'east' }
    }
  },
  {
    id: 4,
    title: 'Question 4: Target Pattern',
    description: 'Find random ball location and create cross pattern from that point.',
    points: 5,
    tests: ['Finds ball', 'Creates cross pattern', 'Ends at ball facing East'],
    startState: {
      worldSize: { width: 8, height: 8 },
      karelPos: { x: 0, y: 0, dir: 'east' }
    }
  }
];

export default function KarelQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Karel Programming Questions</h1>
      
      {/* Question Navigation */}
      <div className="flex gap-2 mb-4">
        {questions.map((q, i) => (
          <button 
            key={q.id}
            onClick={() => setCurrentQuestion(i)}
            className={`px-4 py-2 rounded ${
              i === currentQuestion ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Question {i + 1}
          </button>
        ))}
      </div>

      {/* Current Question */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{questions[currentQuestion].title}</h2>
        <p className="text-gray-600 mb-2">{questions[currentQuestion].description}</p>
        <p className="text-sm text-gray-500">Points: {questions[currentQuestion].points}</p>
        
        {/* Add Karel interface here */}
        <div className="mt-4 flex gap-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 h-64 p-2 font-mono text-sm border rounded"
            placeholder="Write your Karel code here..."
          />
          <div className="w-96 bg-gray-100 rounded p-2">
            {/* Karel world preview will go here */}
          </div>
        </div>

        <button 
          onClick={() => {/* Submit logic */}}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}