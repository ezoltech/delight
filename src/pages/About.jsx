import { Card } from "flowbite-react";
import React from "react";

const About = () => {
  return (
    <>
      <div className="m-10 flex flex-row gap-6">
        <div className="">
          <Card className="flex flex-col gap-2 justify-center items-center">
            <h2 className="flex justify-center items-center"> About us </h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos praesentium, inventore eligendi voluptate nemo magni
              veritatis, quaerat omnis ipsum saepe ratione tempora accusamus
              atque perferendis, culpa facere! At, praesentium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Pariatur eos
              praesentium, inventore eligendi voluptate nemo magni veritatis,
              quaerat omnis ipsum saepe ratione tempora accusamus atque
              perferendis, culpa facere! At, praesentium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Pariatur eos praesentium,
              inventore eligendi voluptate nemo magni veritatis, quaerat omnis
              ipsum saepe ratione tempora accusamus atque perferendis, culpa
              facere! At, praesentium.
            </p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos praesentium, inventore eligendi voluptate nemo magni
              veritatis, quaerat omnis ipsum saepe ratione tempora accusamus
              atque perferendis, culpa facere! At, praesentium.
            </p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos praesentium, inventore eligendi voluptate nemo magni
              veritatis, quaerat omnis ipsum saepe ratione tempora accusamus
              atque perferendis, culpa facere! At, praesentium.
            </p>

            <div className="flex flex-row justify-center items-center gap-11">
              <Card className="h-[200px] w-[200px] rounded-full"></Card>
              <Card className="h-[200px] w-[200px] rounded-full"></Card>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
