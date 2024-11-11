// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';
import QuizSection from '@/components/QuizSection';
import KarelHelper from '@/components/KarelHelper'
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Grade 8 Karel Assessment</h1>
      <QuizSection />
      <div className="mt-8 text-center">
        <Link href="/gr8-karel/karel-practical" className="bg-blue-500 text-white px-6 py-2 rounded">
          Continue to Practical Section
        </Link>
      </div>
    </div>
  );
}