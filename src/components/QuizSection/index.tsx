import { useState } from 'react'
import { multipleChoice, shortAnswer } from '../../data/questions'

export default function QuizSection() {
  const [mcAnswers, setMcAnswers] = useState<(number | null)[]>(new Array(multipleChoice.length).fill(null))
  const [textAnswers, setTextAnswers] = useState<string[]>(new Array(shortAnswer.length).fill(''))
  const [currentSection, setCurrentSection] = useState<'mc' | 'short'>('mc')
  
  const handleMCAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...mcAnswers]
    newAnswers[questionIndex] = answerIndex
    setMcAnswers(newAnswers)
  }

  const handleTextAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...textAnswers]
    newAnswers[questionIndex] = answer
    setTextAnswers(newAnswers)
  }

  const handleSubmit = () => {
    // TODO: Add Google Form submission
    console.log('Multiple Choice Answers:', mcAnswers)
    console.log('Short Answer Responses:', textAnswers)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex gap-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            currentSection === 'mc' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200'
          }`}
          onClick={() => setCurrentSection('mc')}
        >
          Multiple Choice
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            currentSection === 'short' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200'
          }`}
          onClick={() => setCurrentSection('short')}
        >
          Short Answer
        </button>
      </div>

      {currentSection === 'mc' ? (
        <div className="space-y-8">
          {multipleChoice.map((question, qIndex) => (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">
                {qIndex + 1}. {question.text}
              </h3>
              <div className="space-y-3">
                {question.options.map((option, oIndex) => (
                  <label key={oIndex} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={mcAnswers[qIndex] === oIndex}
                      onChange={() => handleMCAnswer(qIndex, oIndex)}
                      className="h-4 w-4"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Topic: {question.concept}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {shortAnswer.map((question, qIndex) => (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">
                {qIndex + 1}. {question.text}
              </h3>
              <textarea
                value={textAnswers[qIndex]}
                onChange={(e) => handleTextAnswer(qIndex, e.target.value)}
                className="w-full h-32 p-3 border rounded-lg"
                placeholder="Enter your answer..."
              />
              <div className="mt-2 text-sm text-gray-500">
                Topic: {question.concept} | Marks: {question.marks}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <button 
          className="px-6 py-2 bg-green-500 text-white rounded-lg"
          onClick={handleSubmit}
        >
          Submit Assessment
        </button>
      </div>
    </div>
  )
}