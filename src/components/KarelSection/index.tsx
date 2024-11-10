import React, { useState } from 'react';
import { DndContext, DragEndEvent, useDraggable } from '@dnd-kit/core';

// Add DraggableBlock component
const DraggableBlock = ({ id, children, color }: { id: string; children: React.ReactNode; color: string }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id
  });

  return (
    <div 
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`${color} p-2 rounded mb-2 cursor-move text-sm font-mono`}
    >
      {children}
    </div>
  );
};

const categories = [
  {
    name: 'Commands',
    color: 'bg-red-200',
    blocks: [
      { id: 'move', label: 'move();' },
      { id: 'turnLeft', label: 'turnLeft();' },
      { id: 'putBall', label: 'putBall();' },
      { id: 'takeBall', label: 'takeBall();' },
      { id: 'turnRight', label: 'turnRight();' },
      { id: 'turnAround', label: 'turnAround();' }
    ]
  },
  {
    name: 'Control flow',
    color: 'bg-yellow-100',
    blocks: [
      { id: 'for', label: 'for (var i = 0; i < 5; i++) {' },
      { id: 'while', label: 'while (yourCondition) {' }
    ]
  },
  {
    name: 'Functions',
    color: 'bg-purple-200',
    blocks: [
      { id: 'function', label: 'function yourFunctionName() {' },
      { id: 'closeBrace', label: '}' }
    ]
  },
  {
    name: 'Conditions',
    color: 'bg-teal-200',
    blocks: [
      { id: 'frontIsClear', label: 'frontIsClear()' },
      { id: 'ballsPresent', label: 'ballsPresent()' },
      { id: 'facingNorth', label: 'facingNorth()' }
    ]
  }
];

const KarelInterface = () => {
  const [activeTab, setActiveTab] = useState('Commands');
  const [code, setCode] = useState([]);
  const [karel, setKarel] = useState({
    x: 0,
    y: 0,
    direction: 0, // 0=east, 1=north, 2=west, 3=south
    world: Array(10).fill(null).map(() => Array(10).fill(false))
  });

  const executeCommand = (cmd) => {
    setKarel(prev => {
      const next = {
        ...prev,
        world: prev.world.map(row => [...row])
      };

      switch(cmd) {
        case 'move();':
          const dx = [1, 0, -1, 0][prev.direction];
          const dy = [0, -1, 0, 1][prev.direction];
          const newX = prev.x + dx;
          const newY = prev.y + dy;
          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            next.x = newX;
            next.y = newY;
          }
          break;
        case 'turnLeft();':
          next.direction = (prev.direction + 1) % 4;
          break;
        case 'putBall();':
          next.world[prev.y][prev.x] = true;
          break;
        case 'takeBall();':
          next.world[prev.y][prev.x] = false;
          break;
      }
      return next;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const block = categories
      .find(cat => cat.blocks.find(b => b.id === event.active.id))
      ?.blocks.find(b => b.id === event.active.id);
    
    if (block) {
      setCode(prev => [...prev, block.label]);
    }
  };

  const runCode = () => {
    setKarel({
      x: 0,
      y: 0,
      direction: 0,
      world: Array(10).fill(null).map(() => Array(10).fill(false))
    });

    code.forEach((cmd, i) => {
      setTimeout(() => executeCommand(cmd), i * 500);
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-[calc(100vh-6rem)]"> {/* Adjusted height */}
        {/* Left: Smaller Commands Panel */}
        <div className="w-48 bg-white border-r flex flex-col"> {/* Reduced width */}
          <div className="flex flex-col">  {/* Vertical tabs */}
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`px-2 py-1 text-sm ${activeTab === cat.name ? cat.color : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto p-2">
            {categories
              .find(cat => cat.name === activeTab)
              ?.blocks.map(block => (
                <DraggableBlock 
                  key={block.id} 
                  id={block.id}
                  color={categories.find(cat => cat.name === activeTab)?.color}
                >
                  {block.label}
                </DraggableBlock>
              ))}
          </div>
        </div>
  
        {/* Middle: Code - Made wider */}
        <div className="flex-1 bg-white border-r p-2">
          <div className="bg-gray-50 p-2 rounded h-full font-mono text-sm">
            {code.map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-gray-400">{i + 1}</span>
                <span>{line}</span>
                <button 
                  onClick={() => setCode(code.filter((_, idx) => idx !== i))}
                  className="text-red-500 ml-auto"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Right: Karel World - Adjusted size */}
        <div className="w-80 p-2">
          <div className="grid grid-cols-10 gap-px bg-gray-200 border rounded">
            {/* Existing Karel world code */}
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default KarelInterface;

