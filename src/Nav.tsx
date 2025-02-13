import React from "react";
import logo from "./assets/logo.png";

const Nav: React.FC = () => {
  return (
    <nav className="bg-white w-full top-0 left-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-between text-orange-400 text-xl">
          <li className="hover:text-black transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-black transition-colors duration-300">
            About
          </li>
          <li className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-16 hover:scale-110 transition-transform duration-300"
            />
          </li>
          <li className="hover:text-black transition-colors duration-300">
            Services
          </li>
          <li className="hover:text-black transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
