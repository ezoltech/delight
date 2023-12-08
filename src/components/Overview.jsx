import React from "react";
import { Fade } from "react-awesome-reveal"
import Splide from './splide'
export const Overview = () => {
  const imgsrcs = [];
  return (
    <div className="px-[7px] md:px-[10rem]">
    <Fade>
      <div className="mt-10">
        <div className="flex justify-between md:flex-row flex-col py-6">
          <div className="flex flex-col gap-4 md:w-[50%] md:text-left text-center">
            <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">____glap with breathtaking..</span>
            <h1 className="text-[3rem] leading-[1] tracking-[-2px] text-[#02b1b4] uppercase font-bold">
              <span className="text-[#fba61b]  uppercase font-bold">mountainous </span>
              views of ethiopia
            </h1>
            <p className="mt-5 leading-[1.8] font-medium text-[#555] text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              distinctio numquam eveniet similique aliquid nam alias? Ea,
              dignissimos sapiente expedita consequatur magni iusto aliquid illum
              alias voluptatibus placeat mollitia possimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore ipsam veritatis.
            </p>
            <button className="md:mx-0 mx-auto mb-10 bg-[#02b1b4] text-xl text-gray-200 rounded-xl hover:bg-[#02989b] py-2 px-4 w-fit">Book Now</button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fHww"
              alt="overview"
              className="h-[75vh] object-cover max-w-[27rem] rounded-[50px] "
            />
          </div>
        </div>
        <p className="mt-5 leading-[1.8] font-medium text-[#555] text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quaerat placeat sequi, ipsa sunt, temporibus eaque suscipit totam repudiandae vero dolorum magni, reiciendis voluptas sint recusandae hic ratione dolorem fugiat repellendus consectetur? Vero facere, tempora illo vitae autem optio dolores!</p>
      </div>
      </ Fade>
      <div className="mt-10">
        <Fade>
        <div className=" flex justify-between flex-col md:flex-row-reverse py-6">
          <div className="flex flex-col gap-4 md:w-[50%] md:text-left text-center">
            <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">____various</span>
            <h1 className="text-[3rem] text-[#02b1b4] uppercase font-bold">
              <span className="text-[#fba61b]  uppercase font-bold">locations </span>
              near ethiopia
            </h1>
            <p className="mt-1 leading-[1.6] font-medium text-[#555] text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              distinctio numquam eveniet similique aliquid nam alias? Ea,
              dignissimos sapiente expedita consequatur magni iusto aliquid illum
              alias voluptatibus placeat mollitia possimus.
              Lorem ipsumalias voluptatibus placeat mollitia possimus.
              Lorem ipsum alias voluptatibus placeat mollitia possimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore ipsam veritatis.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/210709150511-hotels-outdoor-bed-ol-donyo-lodge.jpg?q=w_1110,c_fill/f_webp"
              alt="overview"
              className="h-[75vh] object-cover max-w-[27rem] rounded-[50px] "
            />
          </div>
        </div>
        </Fade>
        <p className="mt-5 leading-[1.4] font-medium text-[#555] text-lg">Lorem ipsum dolor sit, suscipit totam repudiandae vero dolorum magni, reiciendis voluptas sint recusandae hic ratione dolorem fugiat repellendus consectetur? Vero facere, tempora illo vitae autem optio dolores!</p>
      </div>
      <Fade>
      <Splide />
      </Fade>
    </div>
  );
};
