import { FaLaptopCode } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { TbCloudCode } from "react-icons/tb";
export default function Info() {
    return (
        <div className="flex flex-col  " >
            <div className=" sm:flex-row flex flex-col w-full gap-2 rounded py-10 px-2 ">
                <div className="w-full text-orange-400   p-4 sm:w-1/3 h-full flex flex-col items-center justify-center">
                    <FaLaptopCode size={50} color="orange" className="w-full"/>
                    <p className="  font-semibold text-3xl  text-[transparent]
            [-webkit-text-stroke-width:1.5px]
            [-webkit-text-stroke-color:grey]">W3bsite Development</p>
                </div>
                 <div className=" text-orange-400 w-full  p-4 h-full sm:w-1/3 flex flex-col rounded items-center justify-center">
                 
                    <FaShoppingCart size={50} color="orange" className="w-full"/>
                    <p className=" font-semibold text-3xl text-[transparent]
            [-webkit-text-stroke-width:1.5px]
            [-webkit-text-stroke-color:grey] "> E-commerce</p>
                </div>
                 <div className=" text-orange-400 w-full  p-4 sm:w-1/3 h-full rounded flex flex-col items-center justify-center">
                    <TbCloudCode size={50} color="orange" className="w-full"/>
                    <p className=" font-semibold text-3xl text-[transparent]
                    [-webkit-text-stroke-width:1.5px]
            [-webkit-text-stroke-color:grey] ">Api integration</p>
                </div>
          </div>
           <div className="bg-white dark:bg-gray-800  py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
         

          
        </div>

         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              VR
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tech
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dev
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Retro
            </span>
          </a>
        </div> 
      </div>
    </div>
          
       </div>
    )

}