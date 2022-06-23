import React from "react";

function Project(props) {
  return (
    <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <img
          alt="gallery"
          class="absolute inset-0 w-full h-full object-center"
          src={props.imgsrc}
        />
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
            THE SUBTITLE
          </h2>
          <h1 class="title-font text-lg font-medium text-white mb-3">
            {props.title}
          </h1>
          <p class="leading-relaxed">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
