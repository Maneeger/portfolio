'use client'
import React, { useEffect } from 'react';
import Abouthero from  '@/components/about/Abouthero'
import Testimony from  '@/components/about/Testimony'

export default function AboutPage() {
  useEffect(() => {
      // Add the desired Tailwind classes to the body element//
      document.body.classList.add(
        'bg-midnight',
      );
  
    }, []);
  return (
    <div>
     <Abouthero/>
     
    </div>
  );
}
