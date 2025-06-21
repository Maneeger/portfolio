'use client'
import React, { useEffect } from 'react';
export default function AboutPage() {
  useEffect(() => {
      // Add the desired Tailwind classes to the body element//
      document.body.classList.add(
        'bg-midnight',
      );
  
    }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">I'm a passionate developer building cool things with web tech.</p>
    </div>
  );
}
