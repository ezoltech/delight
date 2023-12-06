import React from "react";
import { Button } from "flowbite-react";
export const Overview = () => {
  const imgsrcs = [];
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1>
            mountainous <br />
            views of medelin
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            distinctio numquam eveniet similique aliquid nam alias? Ea,
            dignissimos sapiente expedita consequatur magni iusto aliquid illum
            alias voluptatibus placeat mollitia possimus.
          </p>
          <Button>Book Now</Button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/12470921/pexels-photo-12470921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="overview"
            className="h-[390px] w-[350px] rounded-[50px] "
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1>
            mountainous <br />
            views of medelin
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            distinctio numquam eveniet similique aliquid nam alias? Ea,
            dignissimos sapiente expedita consequatur magni iusto aliquid illum
            alias voluptatibus placeat mollitia possimus.
          </p>
          <Button>Book Now</Button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/12470921/pexels-photo-12470921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="overview"
            className="h-[390px] w-[350px] rounded-[50px] "
          />
        </div>
      </div>
    </div>
  );
};
