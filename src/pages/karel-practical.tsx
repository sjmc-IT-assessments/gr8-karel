import { useState } from 'react'
import KarelHelper from '@/components/KarelHelper'
import Image from 'next/image'

export default function KarelPractical() {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '',
  })
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
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
  }


  const starterCode = `function start() {
    // Write your code here
    // Remember to call the functions you create
  }

  // Create your helper functions below
  `

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="py-8 bg-gray-200 mb-4">
        <h1 className="text-3xl font-bold text-center">Grade 8 Karel Assessment</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">

        <div className="min-h-screen bg-gray-50 py-8">
          <KarelHelper />
          <div className="px-8">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-2xl font-bold mb-8">Section B - Practical (20 marks)</h1>

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
            {/* Questions */}
            {/* Q1 */}

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">1. Row and Back (5 marks)</h2>

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
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="list-disc ml-5">
                    <li>Karel starts at (1,1) facing East</li>
                    <li>Place one ball on every position in the first row</li>
                    <li>Return to starting position</li>
                    <li>End facing East</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Guide:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create a function to put balls while moving</li>
                    <li>Create a function to turn around and come back</li>
                    <li>Make sure to put a ball on the last square too</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  value={starterCode}
                  onChange={(e) => setAnswers({ ...answers, 1: e.target.value })}
                />
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">2. Opposite Squares (5 marks)</h2>

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
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="list-disc ml-5">
                    <li>World is at least 4 columns wide and 2 rows high</li>
                    <li>Draw a square at both ends of the world</li>
                    <li>Each square should be outlined with balls</li>
                    <li>End facing East at bottom right corner</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Guide:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create a function to build one square using a loop</li>
                    <li>Use move() and turnLeft() to draw square sides</li>
                    <li>Move to the other end of the world for second square</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  value={starterCode}
                  onChange={(e) => setAnswers({ ...answers, 2: e.target.value })}
                />
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">3. K for Karel (5 marks)</h2>

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
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="list-disc ml-5">
                    <li>In a 10x10 world starting from bottom left</li>
                    <li>Create letter 'K' using tennis balls</li>
                    <li>Draw vertical line first, then diagonal branches</li>
                    <li>Return to starting position facing East</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Guide:</h3>
                  <ul className="list-disc ml-5">
                    <li>Create a function to draw the vertical line</li>
                    <li>Make functions for upper and lower diagonal lines</li>
                    <li>Use putBall() at each position of the K</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  value={starterCode}
                  onChange={(e) => setAnswers({ ...answers, 3: e.target.value })}
                />
              </div>
            </div>

            {/* Q4 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">4. Target Pattern (5 marks)</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold mb-2">Start World:</p>
                  <Image src="/gr8-karel/images/p4-start.png"
                    alt="Target Pattern start"
                    {...imageSize}
                    className="border" />
                </div>
                <div>
                  <p className="font-semibold mb-2">End World:</p>
                  <Image src="/gr8-karel/images/p4-end.png"
                    alt="Target Pattern start"
                    {...imageSize}
                    className="border" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="list-disc ml-5">
                    <li>Find the ball in the world</li>
                    <li>Create cross pattern on that ball's row and column</li>
                    <li>Fill entire row and column with balls</li>
                    <li>End facing East at target ball position</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Guide:</h3>
                  <ul className="list-disc ml-5">
                    <li>Make a function to search each row until ball is found</li>
                    <li>Create separate functions for filling row and column</li>
                    <li>Use while loops with frontIsClear() to move</li>
                  </ul>
                </div>

                <textarea
                  className="w-full mt-4 p-3 border rounded font-mono"
                  rows={10}
                  value={starterCode}
                  onChange={(e) => setAnswers({ ...answers, 4: e.target.value })}
                />
              </div>
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
      {showModal && (
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
      )}
    </div>
  )
}