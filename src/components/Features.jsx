import React from 'react'

function Features(props) {
  return (
      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-lg overflow-hidden">
          <img class=" object-center" src={props.img} alt="blog"/>
          <div class="p-6">
            <h2 class="text-center text-gray-500 my-3 h1">{props.title}</h2>
            {/* <h1 class="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1> */}
            <p class="leading-relaxed mb-3 mt-3 text-center">{props.text}</p>
            <div class="flex items-center flex-wrap justify-center">
              <a class="text-indigo-400 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Features
