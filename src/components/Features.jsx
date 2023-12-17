import React from "react";
import { Fade } from "react-awesome-reveal";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { SiAddthis } from "react-icons/si";

function Features() {
  return (
    <Fade delay={400}>
      <div className="md:px-[10rem] px-[7px] py-10">
        <div className=" flex justify-between flex-col md:flex-row gap-5 py-6">
          <div className="flex flex-col gap-4 md:w-[55%] md:text-left text-center">
            <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">
              ____what to bring
            </span>
            <h1 className="text-[2.3rem] leading-[1] text-[#02b1b4] capitalize font-bold">
              <span className="text-[#fba61b] font-bold">
                Unique Features of{" "}
              </span>
              Our Company
            </h1>
            <p className="my-3 leading-[1.4] font-medium text-[#555] text-md">
              we pride ourselves on offering top-notch city tour guidance and
              accommodation services with a family caring touch. Our dedicated
              company focuses on personalized attention and goes the extra mile
              to ensure that every aspect of your journey is taken care of with
              utmost care and consideration. From the moment you book with us,
              you'll experience our commitment to creating a warm, welcoming
              atmosphere that makes you feel right at home. What's more, our
              affordable packages come with a minimum payment guarantee, making
              it easier for families to plan their dream vacations without
              breaking the bank. With Delight Tours and Accommodation, you can
              trust that your travel needs will be expertly handled with a focus
              on personalized service and an unwavering dedication to ensuring
              your satisfaction."
            </p>
          </div>

          <div className="md:w-[50%] grid grid-cols-2 justify-center content-center">
            <div className="flex flex-col items-center mt-10 ml-8">
              <IoFastFoodSharp className="text-[#fba61b] md:text-[3.6rem] text-[3rem]" />
              <h3 className="font-medium font-mont mt-2 text-gray-600 md:text-lg text-md">
                Food / Snacks
              </h3>
            </div>
            <div className="flex flex-col items-center mt-10 -ml-8">
              <AiFillMedicineBox className="text-[#fba61b] md:text-[3.6rem] text-[3rem]" />
              <h3 className="font-medium font-mont mt-2 text-gray-600 md:text-lg text-md">
                Other Essentials
              </h3>
            </div>
            <div className="flex flex-col items-center mt-10 ml-8">
              <FaGears className="text-[#fba61b] md:text-[3.6rem] text-[3rem]" />
              <h3 className="font-medium font-mont mt-2 text-gray-600 md:text-lg text-md">
                Outdoor Gear
              </h3>
            </div>
            <div className="flex flex-col items-center mt-10 -ml-8">
              <SiAddthis className="text-[#fba61b] md:text-[3.6rem] text-[3rem]" />
              <h3 className="font-medium font-mont mt-2 text-gray-600 md:text-lg text-md">
                Medicine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Features;
