import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const factorBackground = scrollPos;
  const factorForeground = scrollPos * 0.2;
  return (
    <div>
      <header className="flex justify-center items-center text-white h-[100vh]">
        <div className="top-[30vw] z-10" style={{position: 'absolute', top: `${factorBackground * 0.08 + 35}vh`}}>
          <h1 className=" text-3xl">Lorem, ipsum dolor.</h1>
          <h3 className="w-full text-right">Accommodation</h3>  
        </div>
        
      </header>
    </div>
  );
};
