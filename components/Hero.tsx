import { Code,CodeXml } from 'lucide-react';
import Image from 'next/image';
import RingGlow from './Ring';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
   weight: ['400', '600'],
 
});

export function IconExample() {
  return (
      
      <div className="mt-8 flex items-center justify-center">
        <div className="p-4 border-4 border-cyan-500 rounded-full w-fit ">
          <Code className="w-16 h-16 stroke-amber-500 fill-transparent  "
            strokeWidth={3.5}
             strokeDasharray="5 3" 
             strokeDashoffset ={4} />
        </div>
     
      </div>
  );

    
 
}

export default function Hero() {
  const SponsorsSection = () => {
  return (
    <div className=" bg-midnight w-full flex-col  shadow-gray-900 justify-center items-center">
      <div className="w-full mx-auto flex flex-wrap justify-around gap-8 py-12 ">
        <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
          Skillset
        </p>
        <div className="flex items-center w-full flex-wrap sm:justify-evenly px-4  gap-3">
          <a 
          className=' sm:text-xl text-gray-500 font-semibold'
          href="#">
            Javascript
          </a>
          <a 
          className=' sm:text-xl text-gray-500 font-semibold'
          href="#">
           css3
          </a>
          <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
            Tailwind
          </a>
          <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
         NodeJs
          </a>
          <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
           NextJs
          </a>
          <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
           PostgreSQL
          </a>
           <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
          Git
          </a>
            <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
          Github
          </a>
            <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
         React
          </a>
             <a 
          className='sm:text-xl text-gray-500 font-semibold'
          href="#">
       Framermotion 
          </a>
        </div>
      </div>
    </div>
  );
};
  return (
    < div className='flex flex-col bg-gradient-to-tl  overflow-hidden  from-midnight via-gray-900 to-midnight'>
      <div className="antialiased flex   flex-col lg:flex-row justify-between">
         <section className="py-14b flex text-center justify-center flex-col mt-4 sm:w-1/2   ">
      <h1 className="text-6xl font-bold text-white">Hi, I'm samuel Ebube</h1>
      <p className={`mt-4 text-lg text-white ${poppins.className}}`}>Frontend Developer & Creative Coder...</p>
      <p  className={`mt-4 text-lg text-white ${poppins.className}}`}>"I'm a Frontend Engineer who builds user-friendly and good-looking websites.
         I use tools like React, Next.js, and Tailwind CSS to create smooth and responsive web experiences."</p>
      <div className="flex w-full-600 items-center mt-12 justify-center gap-4" >
        
         <button className=' p-2 bg-cyan-500'>
        Got a project?
      </button>
      <button className=' p-2  border-2 border-cyan-500 text-white'>
       My Resume
      </button>
      </div>
     
    </section>
    {/* imG */}
    <section className=' flex flex-col sm:w-1/2 py-10  ' >
<div className="mt-8 flex justify-baseline sm:ml-19   w-full px-12">

        <IconExample />
      </div>
  

    
      <div className="flex  w-full justify-center  relative">
            <div className='absolute flex justify-center items-center mb-19 inset-0'>
        <Image
        src="/images/samuel.png" // path is relative to /public
        alt="Samuel Profile"
        width={200}
        height={200}
        className="rounded-full z-20 object-cover "
      />
      </div>
        {/* Example 1: Basic Cyan Glow */}
        <div className="flex flex-col items-center ">
           <RingGlow size={250} glowColor="skyblue" glowIntensity={40} borderThickness={15}>
            <span className="text-white text-2xl font-bold"></span>
          </RingGlow>
        
        </div>
       
        </div>      
 
        <div className="mt-8 flex justify-end  w-full px-12">
        <div className="p-4 border-4 border-cyan-500 rounded-full w-fit sm:mr-17   ">
          <CodeXml className="w-16 h-16 stroke-amber-500 fill-transparent  "
            strokeWidth={3.5}
             strokeDasharray="5 3" 
             strokeDashoffset ={4} />
        </div>
      </div>
        
    </section>
  
      </div>
        <SponsorsSection />
   
    </div>
  );
}
