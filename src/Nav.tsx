import React from "react";
import logo from "./assets/logo.png";

const Nav: React.FC = () => {
  return (
    <nav className="bg-white w-full top-0 left-0 shadow-lg z-50 h-24 flex justify-center items-center">
      <ul className="flex items-center justify-evenly text-orange-400 text-xl w-full">
        <li className="hover:text-black transition-colors duration-300">
          Home
        </li>
        <li className="hover:text-black transition-colors duration-300">
          Produtos
        </li>
        <li className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-16 hover:scale-110 transition-transform duration-300"
          />
        </li>
        <li className="hover:text-black transition-colors duration-300">
          Sobre
        </li>
        <li className="hover:text-black transition-colors duration-300">
          Contato
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
