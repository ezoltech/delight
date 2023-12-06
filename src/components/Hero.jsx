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

  const factorBackground = scrollPos * 0.4;
  const factorForeground = scrollPos * 0.2;
  return (
    <div>
      <header className="flex justify-center items-center text-white z-10">
        <div className="top-[30vw]" style={{position: 'absolute', top: 1 * scrollPos}}>
          <h1 className="text-white text-3xl z-20">Lorem, ipsum dolor.</h1>
          <h3 className="w-full text-right">Accommodation</h3>  
        </div>
        
      </header>
    </div>
  );
};
