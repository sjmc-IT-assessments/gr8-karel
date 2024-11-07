import React from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from 'lucide-react';

export const ControlBar = () => {
  return (
    <div className="h-16 border-t bg-white flex items-center px-4 gap-2">
      <button className="p-2 rounded bg-green-500 text-white hover:bg-green-600">
        <Play size={20} />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <RotateCcw size={20} />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <SkipBack size={20} />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <Pause size={20} />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <SkipForward size={20} />
      </button>
    </div>
  );
};