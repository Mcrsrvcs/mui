import React from 'react'
import Reactlogo from '../imgs/react.png'
import tailwindcss from '../imgs/tailwindcss.png'
import materialui from '../imgs/materialui.png'
import next from '../imgs/next.png'

function Technologies() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Technologies</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We use Modren UI technologies and most popular frontend library REACTjs with tailwindcss and Material UI to make websites and webapps beutiful. </p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
           <img src={Reactlogo} class="text-indigo-400 w-15 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium lg:text-3xl text-white">React</h2>
          <p class="leading-relaxed">JS Library</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <img src={tailwindcss} class="text-indigo-400 w-15 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium lg:text-3xl text-white">Tailwindcss</h2>
          <p class="leading-relaxed">CSS Framwork</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <img src={materialui} class="text-indigo-400 w-15 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium lg:text-3xl text-white">Material UI</h2>
          <p class="leading-relaxed">UI/React</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <img src={next} class="text-indigo-400 w-15 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium lg:text-3xl text-white">Next</h2>
          <p class="leading-relaxed">JS Framwork</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Technologies
