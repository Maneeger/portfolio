"use client"
import React, { useState } from "react";
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "data dash",
    description: "data subscription built with react.js.",
    image: "/images/data-dashjpg.png", // in public folder
    link: "https://data-dash-vert.vercel.app/",
  },
  {
    id: 2,
    title: "Nexus naija",
    description: "chat interactive platform connecting brands.",
    image: "/images/chat-appjpg.png",
    link: "https://chat-app-vnoc.vercel.app",
  },
    {
    id: 3,
    title: "Gymguru",
    description: "fitness website.",
    image: "/images/fitnessimg.jpg",
    link: "https://fitnesswebapp-zqic.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <div>
       <div >
         {/* <h1 className="text-7xl font-bold text-[transparent]  w-full text-center mb-6  [-webkit-text-stroke-width:1.5px]
            [-webkit-text-stroke-color:grey] ">My projects</h1> */}
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
      
  {projects.map((project) => (
    <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
  ))}
</div>
</div>
  );
}


