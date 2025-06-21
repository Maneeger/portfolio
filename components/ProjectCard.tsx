interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <a href={link} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </a>
  );
}
