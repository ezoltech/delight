import React, { useState, useEffect } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topArea, setTopArea] = useState(0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setTopArea(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="nav min-h-[8vh] text-white fixed top-0 left-0 w-full flex justify-between items-center px-[3rem] z-20"
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
      <div className="phonenum">+25198278387</div>
    </nav>
  );
};
