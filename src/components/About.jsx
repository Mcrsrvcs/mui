import React from 'react'
import Technologies from './Technologies'
import getorder from '../imgs/givemeorder1.jpg'

function About() {
  return (
    <div>
     <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Who We Are
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Frontend Web developers</h2>
          <p class="leading-relaxed text-base">We build the front-end of websites and web applications. websites and applications using Modren Web Technologies .</p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">React Professional</h2>
          <p class="leading-relaxed text-base">We use react in our website because it makes website and webapps faster that means better user experience and less loading time.</p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Modren Webapps developer </h2>
          <p class="leading-relaxed text-base">We use React Native and Next to develop Android Apps and webapps. Our team always do their best to build the best.</p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="flex mx-auto justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-center rounded w-full" alt="hero" src={getorder}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Order website or Webapp
      </h1>
      <p class="mb-8 leading-relaxed">If you want to Order your own website or webApp you can visit us on fiverr and tell about your requirements .We will build good looking website with great UI for You.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Order on fiverr</button>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 lg:py-20 md:py-12 sm:py-8 md:flex-row flex-col items-center">
          <div class="lg:hidden md:hidden sm:block sm:max-w-sm sm:w-full sm:w-1/2 w-5/6 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
             More About
            </h1>
            <p class="mb-8 leading-relaxed">
              Cheak out my other projects,Websites,Webapps,Eccommerce Sites and more on my persolnal portfolio website.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Try out
              </button>
            </div>
          </div>
          <div class="hidden lg:block  lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block ">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
<section>
  <Technologies/>
</section>
    </div>
  )
}

export default About
