import React from "react";
import { Fade } from "react-awesome-reveal";
import Splide from "./splide";

export const Overview = () => {
  return (
    <div id="overview" className="px-[7px] md:px-[10rem] ">
      <Fade delay={400}>
        <div className="mt-10">
          <div className="flex justify-between md:flex-row flex-col py-6">
            <div className="flex flex-col gap-4 md:w-[50%] md:text-left text-center">
              <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">
                ____glap with breathtaking..
              </span>
              <h1 className="text-[2.6rem] leading-[1] tracking-[-2px] text-[#02b1b4] uppercase font-bold">
                <span className="text-[#fba61b]  uppercase font-bold">
                  Visit Stunning{" "}
                </span>
                Places of Addis Ababa
              </h1>
              <p className="my-5 leading-[1.4] font-medium text-[#555] text-lg">
                Addis Ababa, Ethiopia's vibrant capital, boasts an array of
                historical wonders. Begin your journey at the National Museum, a
                treasure trove showcasing Ethiopia's ancient past. Marvel at the
                fossilized remains of Lucy, a key discovery shedding light on
                human evolution. Visit St. George's Cathedral, an architectural
                masterpiece adorned with stained glass windows and intricate
                artwork. Explore the Ethiopian National Archives and Library, a
                repository of manuscripts and artifacts offering a glimpse into
                the city's storied history.
              </p>
              <button className="md:mx-0 mx-auto mb-10 bg-[#02b1b4] text-xl text-gray-200 rounded-xl hover:bg-[#02989b] py-2 px-4 w-fit">
                Book Now
              </button>
            </div>
            <div className="flex justify-center items-center px-8">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMjEkqaszy6pWsIxREYckuVZJeQAg87a3KhvhQ7=s1360-w1360-h1020" // Your image URL
                alt="overview"
                className="h-[75vh] object-cover md:max-w-[27rem] w-full rounded-[50px]"
              />
            </div>
          </div>
          <p className="mt-2 leading-[1.4] font-medium text-[#555] text-lg">
            Addis Ababa is adorned with an array of spiritual sanctuaries,
            inviting visitors into moments of tranquility and contemplation.
            Explore the Holy Trinity Cathedral, an architectural marvel adorned
            with stunning stained glass windows and intricate artwork, and pay
            respects at the resting place of Emperor Haile Selassie. Discover
            the serene ambiance of Raguel Church, an ancient Orthodox church
            steeped in history and revered for its spiritual significance.
          </p>
        </div>
      </Fade>
      <div className="mt-10">
        <Fade delay={300}>
          <div className="flex justify-between flex-col md:flex-row-reverse py-6">
            <div className="flex flex-col gap-4 md:w-[50%] md:text-left text-center">
              <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">
                ____various
              </span>
              <h1 className="text-[2.6rem] leading-1 text-[#02b1b4] uppercase font-bold">
                <span className="text-[#fba61b]  uppercase font-bold">
                  Visitable locations{" "}
                </span>
                In Addis Ababa
              </h1>
              <p className="my-3 leading-[1.4] font-medium text-[#555] text-lg">
                Despite its urban sprawl, Addis Ababa harbors serene natural
                retreats. Ascend Entoto Hill for breathtaking panoramic views of
                the city and visit the Entoto Maryam Church, an architectural
                gem. Discover the Ostrich Farm for an up-close encounter with
                these magnificent birds or unwind amidst the lush greenery of
                Unity Park, an urban sanctuary offering tranquility and scenic
                beauty.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Your image URL
                alt="overview"
                className="h-[75vh] object-cover md:max-w-[27rem] w-full rounded-[50px]"
              />
            </div>
          </div>
        </Fade>
        <p className="mt-5 leading-[1.4] font-medium text-[#555] text-lg">
          Lorem ipsum dolor sit, suscipit totam repudiandae vero dolorum magni,
          reiciendis voluptas sint recusandae hic ratione dolorem fugiat
          repellendus consectetur? Vero facere, tempora illo vitae autem optio
          dolores!
        </p>
      </div>
      <Fade>
        <Splide />
      </Fade>
    </div>
  );
};
