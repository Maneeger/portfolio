interface Props {
  title: string;
  description: string;
  link: string;
  image:string;
}

const ProjectCard = ({ title, description, image, link }:Props) => {
  // Define explicit width and height for the <img> tag since next/image is not used.
  // These should ideally match the aspect ratio of your actual images.
  return (
    <div className="rounded-xl overflow-hidden shadow-md shadow-black flex flex-col h-full">
      {/* Using standard <img> tag to avoid Next.js Image component resolution issues */}
      <div className="relative w-full h-48"> {/* Added fixed height for the image container */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full" // Ensure image covers the container
         
        />
      </div>
      <div className="p-4 flex flex-col flex-grow"> {/* flex-grow to ensure consistent height */}
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 flex-grow">{description}</p> {/* text-gray-400 for better contrast on dark bg */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:underline inline-block mt-auto text-sm font-medium" // mt-auto pushes button to bottom
        >
          Visit project →
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;