import React from "react";
import Features from "./Features";
import Project from "./Project";
import Technologies from "./Technologies";
import img1 from "../imgs/feature_1.png";
import img2 from "../imgs/feature_2.png";
import img3 from "../imgs/feature_3.png";
import web1 from "../imgs/web4.webp";
import web2 from "../imgs/web2.webp";
import web3 from "../imgs/web3.webp";

function Main() {
  return (
    <div>
      <section class="py-12 text-gray-400 bg-gra-gif bg-gray-100 body-font">
        <div class="container mx-auto flex px-5 lg:py-20 md:py-12 sm:py-8 md:flex-row flex-col items-center">
          <div class="lg:hidden md:hidden sm:block sm:max-w-sm sm:w-full sm:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://perfectwebservices.com/wp-content/uploads/2019/10/responsive-gif.gif"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Modren and Responsive 
              <br class="hidden lg:inline-block" />
              <span> </span>Webdesigns
            </h1>
            <p class="mb-8 leading-relaxed">
            We Create Modren and Good Loking Websites for your business potential and growth opportunities. We use REACTjs,Tailwindcss,NEXTjs and other technologies. We help our clients to grow their business by a web platform and building relationships with their users.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>window.scrollTo(0,740)}>
               Learn More
              </button>
            </div>
          </div>
          <div class="hidden lg:block  lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block ">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://perfectwebservices.com/wp-content/uploads/2019/10/responsive-gif.gif"
            />
          </div>
        </div>
      </section>
      <div>
        <section class="bg-gray-900 text-gray-100 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <Features
                img={img1}
                title="Responsive"
                text="All the Website will be totaly responsive and Mobile-Friendly. Webpages will be Compatable to All the Devices."
              />
              <Features
                img={img2}
                title="Modren"
                text="Design of Website Will be based on Modren Sites Styles . Modren UI/UX by using Tailwindcss."
              />
              <Features
                img={img3}
                title="Fast"
                text="In order to make website faster , all the content and pages will be compresed and well maintained."
              />
            </div>
          </div>
        </section>
      </div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            The idea behind responsive web design lies in building a flexible website whose content and design behave like water that fills the container.Beautiful websites that use responsive web design. Being fully adaptive doesn’t mean solely being mobile and tablet friendly.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <Project
              title="Shooting Stars"
              text="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              imgsrc={web1}
            />
            <Project
              title="The Catalyzer"
              text="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              imgsrc={web2}
            />
            <Project
              title="The 400 Blows"
              text="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              imgsrc={web3}
            />
          </div>
        </div>
      </section>
      <section>
        <Technologies />
      </section>
    </div>
  );
}

export default Main;
