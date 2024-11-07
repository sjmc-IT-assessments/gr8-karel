export const multipleChoice = [
    {
      id: 1,
      marks: 1,
      text: "Which of the following commands is correctly formatted for Karel?",
      options: [
        "Move();",
        "move;",
        "move();",
        "MOVE();"
      ],
      correct: 2,
      concept: "Basic Syntax",
      explanation: "Karel commands must be lowercase and end with parentheses and semicolon"
    },
    {
      id: 2,
      marks: 1,
      text: "What will happen if Karel executes turnLeft(); four times?",
      options: [
        "Karel will face the same direction as the start",
        "Karel will crash",
        "Karel will face right",
        "Karel will face left"
      ],
      correct: 0,
      concept: "Basic Commands",
      explanation: "Four left turns brings Karel back to the original direction"
    },
    {
      id: 3,
      marks: 1,
      text: "Which condition checks if Karel can move forward?",
      options: [
        "movePossible()",
        "frontIsClear()",
        "canMove()",
        "pathClear()"
      ],
      correct: 1,
      concept: "Conditions",
      explanation: "frontIsClear() checks if Karel can move forward"
    },
    {
      id: 4,
      marks: 1,
      text: "How many times will the code 'for(var i = 0; i < 3; i++)' repeat?",
      options: [
        "2 times",
        "3 times",
        "4 times",
        "Infinite times"
      ],
      correct: 1,
      concept: "For Loops",
      explanation: "The loop runs when i is 0, 1, and 2 (three times total)"
    },
    {
      id: 5,
      marks: 1,
      text: "What is the correct way to define a new function for Karel?",
      options: [
        "func moveThree() { }",
        "void moveThree() { }",
        "function moveThree { }",
        "function moveThree() { }"
      ],
      correct: 3,
      concept: "Functions",
      explanation: "Functions need 'function' keyword, name, parentheses, and curly braces"
    },
    {
      id: 6,
      marks: 1,
      text: "Which loop should be used when you don't know how many times to repeat?",
      options: [
        "for loop",
        "while loop",
        "repeat loop",
        "do loop"
      ],
      correct: 1,
      concept: "While Loops",
      explanation: "While loops continue until a condition becomes false"
    },
    {
      id: 7,
      marks: 1,
      text: "What happens if Karel tries to move forward when frontIsBlocked()?",
      options: [
        "Karel turns right",
        "Karel stops moving",
        "Karel crashes",
        "Karel turns around"
      ],
      correct: 2,
      concept: "Error Conditions",
      explanation: "Karel crashes if trying to move into a wall"
    },
    {
      id: 8,
      marks: 1,
      text: "Which function must every Karel program include?",
      options: [
        "main()",
        "start()",
        "run()",
        "program()"
      ],
      correct: 0,
      concept: "Program Structure",
      explanation: "Every Karel program must have a main() function"
    },
    {
      id: 9,
      marks: 1,
      text: "What's the difference between defining and calling a function?",
      options: [
        "There is no difference",
        "Defining uses function keyword, calling executes it",
        "Defining executes code, calling creates it",
        "Defining and calling both execute code"
      ],
      correct: 1,
      concept: "Functions",
      explanation: "Defining creates the function, calling executes it"
    },
    {
      id: 10,
      marks: 1,
      text: "Which command is NOT available in basic Karel (without SuperKarel)?",
      options: [
        "move()",
        "turnLeft()",
        "turnRight()",
        "putBall()"
      ],
      correct: 2,
      concept: "Basic vs Super Karel",
      explanation: "turnRight() is only available in SuperKarel"
    }
  ];
  
  export const shortAnswer = [
    {
      id: 11,
      marks: 2,
      text: "List Karel's four basic commands.",
      expectedAnswer: "move(), turnLeft(), putBall(), takeBall()",
      concept: "Basic Commands"
    },
    {
      id: 12,
      marks: 2,
      text: "What condition would you use to check if Karel is standing on a tennis ball?",
      expectedAnswer: "ballsPresent()",
      concept: "Conditions"
    },
    {
      id: 13,
      marks: 2,
      text: "Name two conditions that check Karel's direction (example: facingNorth()).",
      expectedAnswer: "Any two of: facingNorth(), facingSouth(), facingEast(), facingWest()",
      concept: "Conditions"
    },
    {
      id: 14,
      marks: 2,
      text: "What is the difference between SuperKarel and regular Karel? Name two extra commands.",
      expectedAnswer: "SuperKarel has turnRight() and turnAround() built-in",
      concept: "Karel Variants"
    },
    {
      id: 15,
      marks: 2,
      text: "When would you use a while loop instead of a for loop in Karel? Give one example.",
      expectedAnswer: "When you don't know how many times to repeat, like moving until hitting a wall",
      concept: "Loops"
    }
  ];