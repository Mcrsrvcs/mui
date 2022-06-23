import React from 'react'
import jsac from '../imgs/jsac.png'
import mui from '../imgs/materialui.png'
import es from '../imgs/es.png'
import usetate from '../imgs/usetate.png'
import ytclone from '../imgs/ytclone.png'

function Blogs() {
  return (
    <div>
<section class="text-gray-400 body-font bg-gray-900 pt-5">
  <div class="container px-5 pb-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Bolgs about Web devlopment , Application devlopment , programming and more...</h1>
        <div class="h-1 w-24 bg-indigo-500 rounded"></div>
      </div>
      {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-center mb-6" src={jsac} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Javascript</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Asynchronous JavaScript</h2>
          <p class="leading-relaxed text-base">In this module, we take a look at asynchronous JavaScript, why it is important, and how it can be used to...</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="lg:h-40 md:h-40 sm:h-50 rounded w-full object-center mb-6" src={mui} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Material UI</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">How to use Material UI</h2>
          <p class="leading-relaxed text-base">What is material UI for?
Image result for material ui Material-UI is simply a library that allows us to import and use different components....</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={es} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Javascript</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Ecmascript</h2>
          <p class="leading-relaxed text-base">ECMAScript is a JavaScript standard meant to ensure the interoperability of web pages across different web browsers...</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-center mb-6" src={usetate} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">javscript React</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4"> useState in React</h2>
          <p class="leading-relaxed text-base">The React useState Hook allows us to track state in a function component. State generally refers to data or properties...</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
<h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white pt-12 pb-2">Most Popular Blogs    </h1>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-center object-cover h-full w-full" src="https://cdn.pixabay.com/photo/2017/06/27/23/10/youtube-2449144__340.jpg"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">YouTube Clone with Tailwindcss</h2>
        <p class="leading-relaxed text-base">Cloning Youtube by using tailwindcss is very easy. We are going to Clone Youtube with Tailwindcss...</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845__340.jpg"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Fullstack WebApp : Chatmate</h2>
        <p class="leading-relaxed text-base">In this Blog post you will learn how to create a fullstack webapp by using headless CMS and Reactjs...</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read</button>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Feb</span>
            <span class="font-medium text-lg leading-none text-gray-300 title-font">21</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">Webdev</h2>
            <h1 class="title-font text-xl font-medium text-white mb-3">React v17.0 Release Candidate: No New Features</h1>
            <p class="leading-relaxed mb-5">Today, we are publishing the first Release Candidate for React 17. It has been two and a half years...</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-white">by Dan Abramov </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
            <span class="font-medium text-lg leading-none text-gray-300 title-font">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">Javascript</h2>
            <h1 class="title-font text-xl font-medium text-white mb-3">Building Great User Experiences with Concurrent Mode</h1>
            <p className="leading-relaxed mb-5">Particular, React 17 is a “stepping stone” release that makes it safer to embed a tree... </p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-white">by Andrew Clark</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">June</span>
            <span class="font-medium text-lg leading-none text-gray-300 title-font">23</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">React</h2>
            <h1 class="title-font text-xl font-medium text-white mb-3">React Labs: What We've Been Working On – June 2022.</h1>
            <p className="leading-relaxed mb-5">In particular, we’re abandoning the idea of having forked I/O libraries (eg react-fetch), and instead adopting...</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-white">by Rachel Nabors</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Blogs
