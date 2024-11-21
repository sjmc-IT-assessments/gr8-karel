import { useState } from 'react'
import { multipleChoice, shortAnswer } from '../../data/questions'
import { submitForm } from '@/utils/submitForm'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'

export default function QuizSection() {
  const [mcAnswers, setMcAnswers] = useState<(number | null)[]>(new Array(multipleChoice.length).fill(null))
  const [textAnswers, setTextAnswers] = useState<string[]>(new Array(shortAnswer.length).fill(''))
  const [name, setName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [showInput, setShowInput] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !studentClass || mcAnswers.some(answer => answer === null) || textAnswers.some(answer => answer.trim() === '')) {
      alert('Please fill in all required fields.')
      return
    }

    const formattedAnswers: { [key: string]: string } = {
      name,
      class: studentClass,
      ...mcAnswers.reduce((acc, ans, i) => ({
        ...acc,
        [`q${i + 1}`]: convertToLabel(ans)
      }), {}),
      ...textAnswers.reduce((acc, ans, i) => ({
        ...acc,
        [`q${multipleChoice.length + i + 1}`]: ans
      }), {})
    }

    const success = await submitForm(formattedAnswers)
    if (success) {
      setModalVisible(true)
    } else {
      alert('Error submitting assessment. Please try again.')
    }
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  const handleModalConfirm = () => {
    window.location.href = "/gr8-karel/karel-practical"
    {
      showInput ? (
        <div className="flex gap-2 mt-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button
            onClick={() => {
              if (password === "yourpassword") {
                // Handle navigation to practical
              }
            }}
          >
            Skip to Practical
          </button>
        </div>
      ) : (
        <button onClick={() => setShowInput(true)}>
          Skip to Practical
        </button>
      )
    }
  }
  const skipToPractical = () => {
    if (password === "karel123") {
      window.location.href = "/gr8-karel/karel-practical"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      {showInput ? (
        <div className="flex gap-2 justify-right">
          <input
            type="password"
            className="border p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button
            onClick={skipToPractical}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Skip to Practical
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="bg-blue-500 text-white px-4 py-1 rounded"
          style={{ display: 'block', margin: '0 auto' }}
        >
          Skip to Practical
        </button>
      )}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Section A - Theory (20 marks)</h1>
        <div className="mt-4 text-right">
        </div>

        {/* Student Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="p-2 border rounded"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 border rounded"
              placeholder="Class (e.g. 8AC)"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Multiple Choice Questions */}
        {multipleChoice.map((question, qIndex) => (
          <div key={question.id} className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {qIndex + 1}. {question.text}
            </h2>
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

        {/* Short Answer Questions */}
        {shortAnswer.map((question, qIndex) => (
          <div key={question.id} className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {qIndex + multipleChoice.length + 1}. {question.text}
            </h2>
            <textarea
              value={textAnswers[qIndex]}
              onChange={(e) => handleTextAnswer(qIndex, e.target.value)}
              className="w-full h-32 p-3 border rounded-lg"
              placeholder="Enter your answer..."
              required
            />
            <div className="mt-2 text-sm text-gray-500">
              Topic: {question.concept} | Marks: {question.marks}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit Theory Section
        </button>
      </div>
      {/* Modal */}
      {isModalVisible && (
        <Modal
          title="Theory Section Complete"
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        >
          Your theory section has been submitted successfully! Would you like to continue to the practical section?
        </Modal>
      )}
    </div>
  )

}

function convertToLabel(value: number | null): string {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  return value !== null ? labels[value] : ''
}