import React from "react";
import { Hero } from "../components/Hero";
import { Overview } from "../components/Overview";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Overview />
    </div>
  );
};

export default Home;
