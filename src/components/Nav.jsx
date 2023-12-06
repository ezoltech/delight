import React, { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="nav min-h-[8vh] bg-gradient-to-b z-10  text-white fixed top-0 left-0 w-full from-black to-[transparent] flex justify-between items-center px-[3rem]"
    >
      <div className="log">
        <img src="" alt="" />
        <h2>Lorem, ipsum.</h2>
      </div>
      <ul className="w-[40%] flex justify-evenly">
        <li>Home</li>
        <li>Tours</li>
        <li>services</li>
        <li>Contact</li>
      </ul>
      <div className="phonenum">+25198278387</div>
    </nav>
  );
};
