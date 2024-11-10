import React from 'react';
import QuizSection from '@/components/QuizSection';
import KarelPractical from './karel-practical'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <QuizSection />
      <KarelPractical />
    </div>
  );
}