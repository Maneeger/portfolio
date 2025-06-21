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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
  {projects.map((project) => (
    <div key={project.id} className="rounded-xl overflow-hidden   shadow-md shadow-black">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline inline-block mt-2"
        >
          Visit project →
        </a>
      </div>
    </div>
  ))}
</div>
  );
}


