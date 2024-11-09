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
    if (!name || !studentClass) {
      alert('Please fill in your name and class.');
      return;
    }
    
    // Combine all answers
    const formattedAnswers: { [key: string]: string } = {
      name,
      class: studentClass,
      ...mcAnswers.reduce((acc, ans, i) => ({
        ...acc,
        [`q${i + 1}`]: ans?.toString() || ''
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
    // Redirect to Karel practical section or perform other actions
    window.location.href = "/karel-practical"; // Replace with actual URL
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Grade 8 Karel Assessment</h1>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Class</span>
              <input
                type="text"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your class"
                required
              />
            </label>
          </div>
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
                className="w-full h-32 p-3 border rounded-lg"
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
            className="px-6 py-2 bg-green-500 text-white rounded-lg"
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
