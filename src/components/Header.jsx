import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  const [nav, setNav] = useState(false);
  return (
    <div>
       <nav class={props.page==="home"?"absolute w-full":"bg-gray-900"}>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="true"
                onClick={() => (nav === true ? setNav(false) : setNav(true))}
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div class="flex-shrink-0 flex items-center  ">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Webstocks</span>
      </a>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4 ">
                    <Link
                      to="/"
                      class="text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      
                    >
                      Home
                    </Link>

                    <Link
                      to="/Projects"
                      class="text-gray-400   hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </Link>

                    <Link
                      to="/Blogs"
                      class=" text-gray-400   hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      Blogs
                    </Link>

                    <Link
                      to="/About"
                      class=" text-gray-400   hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/Contect"
                      class=" text-gray-400   hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contect
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sm:hidden"
          style={nav === true ? { display: "block" } : { display: "none" }}
          id="mobile-menu"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
          <Link
                      to="/"
                      class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      aria-current="page"
                    >
                      Home
                    </Link>

            <Link
                      to="/Projects"
                      class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </Link>

                    <Link
                      to="/Blogs"
                      class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Blogs
                    </Link>

                    <Link
                      to="/About"
                      class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/Contect"
                      class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contect
                    </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
