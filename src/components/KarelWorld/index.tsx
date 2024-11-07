import React from 'react';

export const KarelWorld = () => {
  return (
    <div className="border rounded">
      <div className="grid grid-cols-10 grid-rows-10 gap-[1px] bg-gray-200">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i} 
            className="w-8 h-8 bg-white flex items-center justify-center"
          >
            {i === 90 && (
              <div className="w-6 h-6 bg-[url('/karel-sprite.png')] bg-contain bg-no-repeat" />
            )}
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};