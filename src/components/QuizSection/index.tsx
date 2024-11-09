import { useState } from 'react';
import { multipleChoice, shortAnswer } from '../../data/questions';
import { submitForm } from '@/utils/submitForm';
import Modal from '@/components/Modal';

export default function QuizSection() {
  const [mcAnswers, setMcAnswers] = useState<(number | null)[]>(new Array(multipleChoice.length).fill(null));
  const [textAnswers, setTextAnswers] = useState<string[]>(new Array(shortAnswer.length).fill(''));
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMCAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...mcAnswers];
    newAnswers[questionIndex] = answerIndex;
    setMcAnswers(newAnswers);
  };

  const handleTextAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...textAnswers];
    newAnswers[questionIndex] = answer;
    setTextAnswers(newAnswers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !studentClass || mcAnswers.some(answer => answer === null) || textAnswers.some(answer => answer.trim() === '')) {
      alert('Please fill in all required fields.');
      return;
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
    };

    const success = await submitForm(formattedAnswers);
    if (success) {
      setModalVisible(true);
    } else {
      alert('Error submitting assessment. Please try again.');
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalConfirm = () => {
    window.location.href = "/karel-practical";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Grade 8 Karel Assessment</h1>
        <div className="mb-6">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full md:w-1/2 lg:w-1/3 mx-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Class</span>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="mt-1 block w-full md:w-1/2 lg:w-1/3 mx-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your class"
              required
            />
          </label>
        </div>

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
          
          {shortAnswer.map((question, qIndex) => (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">
                {qIndex + 1 + multipleChoice.length}. {question.text}
              </h3>
              <textarea
                value={textAnswers[qIndex]}
                onChange={(e) => handleTextAnswer(qIndex, e.target.value)}
                className="w-full h-32 p-3 border rounded-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your answer..."
              />
              <div className="mt-2 text-sm text-gray-500">
                Topic: {question.concept} | Marks: {question.marks}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button 
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Submit Assessment
          </button>
        </div>
      </form>

      {isModalVisible && (
        <Modal
          title="Assessment Submitted"
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        >
          Your assessment has been submitted successfully! Would you like to move on to the practical section?
        </Modal>
      )}
    </>
  );
}

function convertToLabel(value: number | null): string {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  return value !== null ? labels[value] : '';
}
