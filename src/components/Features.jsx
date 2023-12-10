import React from 'react'
import { Fade } from "react-awesome-reveal"
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { SiAddthis } from "react-icons/si";


function Features() {
    return (
        <Fade delay={400}>
            <div className='md:px-[10rem] px-[7px] py-10'>
                <div className=" flex justify-between flex-col md:flex-row gap-5 py-6">
                    <div className="flex flex-col gap-4 md:w-[55%] md:text-left text-center">
                        <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">____what to bring</span>
                        <h1 className="text-[2.3rem] leading-[1] text-[#02b1b4] capitalize font-bold">
                            <span className="text-[#fba61b] font-bold">on your </span>
                            gambella😁 trip
                        </h1>
                        <p className="my-3 leading-[1.4] font-medium text-[#555] text-md">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                            distinctio numquam eveniet similique aliquid nam alias? Ea,
                            dignissimos sapiente expedita consequatur magni iusto aliquid illum
                            alias voluptatibus placeat mollitia possimus.
                            Lorem ipsumalias voluptatibus placeat mollitia possimus.
                            Lorem ipsum alias voluptatibus placeat mollitia possimus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore ipsam veritatis.
                        </p>
                    </div>

                    <div className="md:w-[50%] grid grid-cols-2 justify-center content-center">
                        <div className='flex flex-col items-center mt-10 ml-8'>
                            <IoFastFoodSharp className='text-[#fba61b] md:text-[3.6rem] text-[3rem]' />
                            <h3 className='font-medium font-mont mt-2 text-gray-600 md:text-lg text-md'>Food / Snacks</h3>
                        </div>
                        <div className='flex flex-col items-center mt-10 -ml-8'>
                            <AiFillMedicineBox className='text-[#fba61b] md:text-[3.6rem] text-[3rem]' />
                            <h3 className='font-medium font-mont mt-2 text-gray-600 md:text-lg text-md'>Other Essentials</h3>
                        </div>
                        <div className='flex flex-col items-center mt-10 ml-8'>
                            <FaGears className='text-[#fba61b] md:text-[3.6rem] text-[3rem]' />
                            <h3 className='font-medium font-mont mt-2 text-gray-600 md:text-lg text-md'>Outdoor Gear</h3>
                        </div>
                        <div className='flex flex-col items-center mt-10 -ml-8'>
                            <SiAddthis className='text-[#fba61b] md:text-[3.6rem] text-[3rem]' />
                            <h3 className='font-medium font-mont mt-2 text-gray-600 md:text-lg text-md'>Medicine</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    )
}

export default Features
