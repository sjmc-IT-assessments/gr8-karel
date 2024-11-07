import React from 'react';
import { Commands } from '@/components/Commands';
import { BlockEditor } from '@/components/BlockEditor';
import { KarelWorld } from '@/components/KarelWorld';
import { ControlBar } from '@/components/ControlBar';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar - Command Categories */}
      <div className="w-64 flex flex-col bg-white border-r">
        <div className="flex flex-col space-y-1 p-2">
          <button className="bg-red-200 p-2 rounded text-left">Commands</button>
          <button className="bg-blue-100 p-2 rounded text-left">Functions</button>
          <button className="bg-green-100 p-2 rounded text-left">Control flow</button>
          <button className="bg-cyan-100 p-2 rounded text-left">Conditions</button>
          <button className="bg-orange-100 p-2 rounded text-left">Comments</button>
          <button className="bg-yellow-100 p-2 rounded text-left">Paint</button>
        </div>
        <Commands />
      </div>

      {/* Center - Block Editor */}
      <div className="flex-1 flex flex-col">
        <div className="h-12 bg-white border-b flex items-center justify-between px-4">
          <button className="text-sm text-blue-600">
            Switch to Code View
          </button>
        </div>
        <BlockEditor />
        <ControlBar />
      </div>

      {/* Right - Karel World */}
      <div className="w-[400px] bg-white border-l p-4">
        <div className="flex justify-between items-center mb-4">
          <select className="border rounded p-1 text-sm">
            <option>World: Create your Project</option>
          </select>
        </div>
        <KarelWorld />
      </div>
    </div>
  );
}