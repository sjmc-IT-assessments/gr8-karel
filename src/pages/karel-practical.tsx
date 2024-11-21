import { useState } from 'react'
import KarelHelper from '@/components/KarelHelper'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function KarelPractical() {
  const router = useRouter()
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '',
  })
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: ''
  })

  const [showModal, setShowModal] = useState(false)

  const imageSize = {
    width: 400,
    height: 200
  }

  const handleSubmit = () => {
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdeysBl-63gNCNOT8RD01_Bcood6Z3Gq-KV8W6zNZSuBFlatA/formResponse?entry.192175351=${studentInfo.name}&entry.680216375=${studentInfo.class}&entry.76138761=${answers[1]}&entry.2036080317=${answers[2]}&entry.691546682=${answers[3]}&entry.428554405=${answers[4]}`

    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = formURL
    document.body.appendChild(iframe)
    setShowModal(true)
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }


  const starterCode = `function start() {
    // Write your code here
    // Remember to call the functions you create
  }
  
  // Create your helper functions below`

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="py-8 bg-gray-200 mb-4">
        <h1 className="text-3xl font-bold text-center">Grade 8 Karel Assessment</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">

        <div className="min-h-screen bg-gray-50 py-8">
          <KarelHelper />
          {/* Instructions GIF */}
          <div className="mt-4">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="instructions.gif" alt="Instructions GIF" width="800" height="800" />
            </div>
          </div>
          <div className="mt-8 px-8">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-2xl font-bold mb-8">Student Infromation</h1>

              {/* Student Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="p-2 border rounded"
                    placeholder="Full Name"
                    value={studentInfo.name}
                    onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                  />
                  <input
                    className="p-2 border rounded"
                    placeholder="Class (e.g. 8AC)"
                    value={studentInfo.class}
                    onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-2xl font-bold mb-8">Questions </h1>
            </div>
            {/* Q1 */}

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Question 1. Make a Square (5 marks)</h2>
              <span></span>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold mb-2">Start World:</p>

                  <Image src="/gr8-karel/images/p1-start.png"
                    alt="Row and Back start"
                    {...imageSize}
                    className="border" />
                </div>
                <div>
                  <p className="font-semibold mb-2">End World:</p>
                  <Image src="/gr8-karel/images/p1-end.png"
                    alt="Row and Back end"
                    {...imageSize}
                    className="border" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Task:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create a 4x4 square of tennis balls (That means each side has 4 tennis )</li>
                    <li>Use a for loop to place the balls</li>
                    <li>Start at bottom-left facing East</li>
                    <li>End facing East after completing square</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Tips:</h3>
                  <ul className="list-disc ml-5">
                    <li> Use a for loop to repeat 4 times</li>
                    <li>After placing each ball, turn left and move</li>
                    <li>Remember to place ball at each corner</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  defaultValue={starterCode} // Changed from value to defaultValue
                  onChange={(e) => setAnswers({ ...answers, 1: e.target.value })}
                />
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Question 2.  X Marks the Spot (7 marks)</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold mb-2">Start World:</p>
                  <Image src="/gr8-karel/images/p2-start.png"
                    alt="Opposite Squares start"
                    {...imageSize}
                    className="border" />
                </div>
                <div>
                  <p className="font-semibold mb-2">End World:</p>
                  <Image src="/gr8-karel/images/p2-end.png" alt="Opposite Squares start"
                    width={400}
                    height={200}
                    className="border" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Task:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create X pattern</li>
                    <li>Start at bottom-left corner</li>
                    <li>Use functions to draw each diagonal</li>
                    <li>End at start position facing East</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Tips:</h3>
                  <ul className="list-disc ml-5">
                    <li> Create drawDiagonal() function</li>
                    <li>Move diagonally using turnLeft() and turnRight()</li>
                    <li>Use putBall() at each step</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  defaultValue={starterCode} // Changed from value to defaultValue
                  onChange={(e) => setAnswers({ ...answers, 2: e.target.value })}
                />
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Question 3. Blackout (8 marks)</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold mb-2">Start World:</p>
                  <Image src="/gr8-karel/images/p3-start.png"
                    alt="K for Karel start"
                    {...imageSize}
                    className="border" />
                </div>
                <div>
                  <p className="font-semibold mb-2">End World:</p>
                  <Image src="/gr8-karel/images/p3-end.png"
                    alt="K for Karel end"
                    {...imageSize}
                    className="border" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Task:</h3>
                  <ul className="list-disc ml-5">
                    <li>Fill every square with a tennis ball</li>
                    <li>Works on any world size bigger than 1</li>
                    <li>Use functions to organize code</li>
                    <li>Use efficient looping strategy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Tips:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create fillRow() function</li>
                    <li>Use while loops to handle variable world size</li>
                    <li>Check leftIsClear() to know when to move up</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  defaultValue={starterCode} // Changed from value to defaultValue
                  onChange={(e) => setAnswers({ ...answers, 3: e.target.value })}
                />
              </div>
            </div>
                <div>
            </div>
          </div>
        </div>



        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit Solutions
        </button>
      </div>

      {/* Modal */}
      {
        showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-4">Your exam has been submitted, well done!</h3>
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </div >
  )
}