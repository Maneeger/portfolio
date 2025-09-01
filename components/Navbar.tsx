'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';


export default function Navbar() {
   const pathname = usePathname();
     console.log('Current pathname:', pathname); // Add this line
  // ... rest of your component

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-ful antialised bg-gradient-to-a  from-gray-900 via-Cblack text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:px-22 sm:flex sm:items-center sm:justify-between">
        <Logo/>
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
             
              front_Sam
            </span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex antialiased text-base flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className=" text-white font-semibold focus:outline-none"
              href="/"
              aria-current="page"
            >
              Landing
            </Link>
            <Link
              className="className= text-white font-semibold hover:text-amber-400 focus:outline-none focus:text-amber-400
               {pathname === '/projects' ? 'text-teal-400 font-bold' : 'text-white'}"
              href="projects"
            >
              Projects
            </Link>
            <Link
              className="font-semibold text-white hover:text-amber-400 focus:outline-none focus:text-amber-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="about"
            >
            About
            </Link>
            <Link
              className="font-semibold text-white hover:text-amber-400 focus:outline-none focus:text-amber-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="contact"
            >
             Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
