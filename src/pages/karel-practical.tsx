export default function KarelPractical() {
    const problems = [
        {
          title: "Row and Back",
          points: 5,
          description: "Place balls across entire row and return to start facing East.",
          template: `function main() {
        layRow();
        returnToStart();
       }
       
       function layRow() {
        putBall();
        while(frontIsClear()) {
          move();
          putBall();
        }
       }
       
       function returnToStart() {
        // Turn around and move to wall
        turnAround(); 
        while(frontIsClear()) {
          move();
        }
        turnAround();
       }`
        },
        {
          title: "Opposite Squares", 
          points: 5,
          description: "Draw square at both ends of world (4+ columns wide, 2+ rows high). End facing East.",
          template: `function main() {
        move();
        buildSquare();
        moveToEnd();
        buildSquare(); 
       }
       
       function buildSquare() {
        for(let i = 0; i < 4; i++) {
          putBall();
          turnLeft();
          move();
        }
       }
       
       function moveToEnd() {
        while(frontIsClear()) {
          move();
        }
       }`
        },
        {
          title: "K for Karel",
          points: 5, 
          description: "Draw letter K in 10x10 world from bottom left. Return to start.", 
          template: `function main() {
        turnLeft();
        drawVertical();
        drawDiagonals();
        returnToStart();
       }
       
       function drawVertical() {
        // Draw vertical line
        while(frontIsClear()) {
          putBall();
          move();
        }
        putBall();
       }
       
       function drawDiagonals() {
        // Complete diagonal lines
        // Hint: Move to middle then draw lines up/down
       }`
        },
        {
          title: "Target Pattern",
          points: 5,
          description: "Find ball and make target pattern on that ball's street/avenue. End facing East.",
          template: `function main() {
        findBall();
        buildTarget();
       }
       
       function findBall() {
        // Move until ball is found
        while(noBallsPresent()) {
          if(frontIsClear()) {
            move();
          } else {
            moveToNextRow();
          }
        }
       }
       
       function buildTarget() {
        // Complete cross pattern
        // Hint: Build vertical then horizontal lines
       }`
        }
       ]
  
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-8">Karel Programming Assessment</h1>
          
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">{problem.title}</h2>
              <p className="text-gray-600 mb-4">{problem.description}</p>
              <p className="text-sm text-gray-500">Points: {problem.points}</p>
              <textarea 
                className="w-full mt-4 p-3 border rounded"
                rows={8}
                placeholder="Write your code here..."
              />
            </div>
          ))}
  
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Submit Solutions
          </button>
        </div>
      </div>
    )
  }