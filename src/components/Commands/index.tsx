import React from 'react';

export const Commands = () => {
  const basicCommands = [
    'move();',
    'turnLeft();',
    'putBall();',
    'takeBall();',
    'turnRight();',
    'turnAround();'
  ];

  return (
    <div className="p-2">
      {basicCommands.map((command) => (
        <div
          key={command}
          className="bg-red-100 p-2 my-1 rounded cursor-pointer hover:bg-red-200 transition-colors"
          draggable
        >
          {command}
        </div>
      ))}
    </div>
  );
};