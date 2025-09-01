'use client'
import Image from "next/image";
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPage from "./projects/page";

export default function HomePage() {
    useEffect(() => {
    // Add the desired Tailwind classes to the body element//
    document.body.classList.add(
      'bg-midnight',
    );

  }, []); 
  return (
    <>
      <Hero />
      <ProjectsPage/>

    </>
  );
}


