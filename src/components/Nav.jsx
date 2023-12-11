import React, { useState, useEffect } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [topArea, setTopArea] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setTopArea(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isMenuOpen ? 'menu-open ' : ""} nav md:h-[8vh] text-white md:bg-transparent py-3 md:py-0 fixed top-0 left-0 w-full flex md:justify-between justify-start flex-col md:flex-row items-center text-center px-[3rem] z-20`}
      style={{
        backgroundImage: topArea >= 450 ? 'linear-gradient(#f7f7f7, #f7f7f7)' : 'linear-gradient(#01010199, transparent)',
        color: topArea >= 450 ? '#111' : '#f7f7f7',
        transition: 'color .6s'
    }}
    >
      <div className="log">
        <img src="" alt="" />
        <h2>Lorem, ipsum.{topArea}</h2>
      </div>
      <ul className="w-[40%] flex justify-evenly">
        <li><a href="">Home</a> </li>
        <li><a href="">Tours</a> </li>
        <li><a href="">services</a> </li>
        <li><a href="">Contact</a> </li>
      </ul>
      <div className="phonenum  md:visible invisible">+25198278387</div>
      <div onClick={toggleMenu} className=" select-none cursor-pointer md:hidden text-2xl absolute px-2 py-1 right-4 top-5">
        {isMenuOpen ? "X" : '☰'}
      </div>
    </nav>
  );
};
