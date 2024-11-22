import { useState, useEffect } from 'react'

const KarelHelper = () => {
  const [showHelper, setShowHelper] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null)

  const handleCopy = (text: string, category: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedSnippet(`${category}-${index}`)
    setTimeout(() => setCopiedSnippet(null), 1000)
  }
  const openKarelSandbox = () => {
    window.open('hhttps://codehs.com/editor/explore_demo_in_sandbox', '_blank')
  }
  const codeSnippets = {
    basic: [
      { name: 'move()', desc: 'Move Karel forward one space' },
      { name: 'turnLeft()', desc: 'Turn Karel 90° to the left' },
      { name: 'putBall()', desc: 'Put a tennis ball down' },
      { name: 'takeBall()', desc: 'Pick up a tennis ball' }
    ],
    conditions: [
      { name: 'frontIsClear()', desc: 'Check if front is clear' },
      { name: 'frontIsBlocked()', desc: 'Check if front is blocked' },
      { name: 'ballsPresent()', desc: 'Check if balls are present' },
      { name: 'noBallsPresent()', desc: 'Check if no balls present' },
      { name: 'notFacingNorth()', desc: 'Check if Karel is not facing north' },
      { name: 'notFacingWest()', desc: 'Check if Karel is not facing west' }
    ],
    'Control Structures': [
      {
        name: `if (condition) {
        // code
    } else {
        // code
    }`, desc: 'Execute different code based on a condition'
      }
    ],
    loops: [
      { name: 'while (condition) {\n  // code\n}', desc: 'Repeat while condition is true' },
      { name: 'for (let i = 0; i < n; i++) {\n  // code\n}', desc: 'Repeat n times' }
    ],
    functions: [
      { name: 'function name() {\n  // code\n}', desc: 'Create a new function' }
    ]

  }


  useEffect(() => {
    // Random spin animation
    const initialTimeout = setTimeout(() => {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 4000)
    }, 1000)

    const spinInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        setIsSpinning(true)
        setTimeout(() => setIsSpinning(false), 1000)
      }
    }, 4000)

    // Random speech bubble
    const bubbleInterval = setInterval(() => {
      if (Math.random() < 0.5) {
        setShowBubble(true)
        setTimeout(() => setShowBubble(false), 4000)
      }
    }, 2000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(spinInterval)
      clearInterval(bubbleInterval)
    }
  }, [])

  return (
    <div>
      <div className="mb-4 text-center">
        <button 
          onClick={openKarelSandbox}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
        >
          Open Karel Sandbox
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Test your code in the sandbox, then copy it back to submit
        </p>
      </div>
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div className={`
          bg-white px-3 py-2 rounded-lg shadow-lg mb-2 
          transition-opacity duration-300
          ${showBubble ? 'opacity-100' : 'opacity-0'}
          relative
        `}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white" />
          Click me for help!
        </div>

        <button
          onClick={() => setShowHelper(true)}
          className={`
            w-16 h-16 rounded-full 
            transition-transform duration-300
            ${isSpinning ? 'animate-spin' : ''}
          `}
        >
          <img
            src="/gr8-karel/images/dog-sprite.png"
            alt="Karel Helper"
            className="w-full h-full"
          />
        </button>
      </div>

      {showHelper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowHelper(false)}
              className="absolute -top-10 right-0 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            >
              Close
            </button>

            <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Karel Code Helper</h3>
              </div>

              <div className="space-y-6">
                {Object.entries(codeSnippets).map(([category, snippets]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {snippets.map((snippet, i) => (
                        <div key={i} className="p-2 bg-gray-50 rounded relative">
                          <pre
                            className="font-mono text-purple-600 cursor-grab"
                            onClick={() => handleCopy(snippet.name, category, i)} //change to onclick for single click or onDoubleClick for 2x
                          >
                            {snippet.name}
                          </pre>
                          <span className="text-sm text-gray-600">{snippet.desc}</span>
                          {copiedSnippet === `${category}-${i}` && (
                            <div className="absolute top-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                              Copied! {/*{copyMessage}*/}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default KarelHelper