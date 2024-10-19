import React, { useState } from 'react';
import Logo from '../assets/images/cc.png';
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  // State to handle search bar visibility
  const [searchVisible, setSearchVisible] = useState(false);
  const [user, setUser] = useState<any | null>(null); // Assuming you manage user state globally

  const clicksearch = () => {
    setSearchVisible(true);
  };

  const closesearch = () => {
    setSearchVisible(false);
  };

  return (
    <header className="bg-[#5a1413] sticky w-full top-0 z-50">
      <nav className="flex justify-between items-center py-4 px-6">
        {/* Icon of Curvz and Link to Homepage */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img className="h-6" src={Logo} alt="icon" />
          </a>
        </div>

        {/* Middle Links */}
        <div className="flex space-x-12 absolute left-[36%]">
          <a className="text-[#c6b79b] font-syne text-sm uppercase hover:text-white transition duration-300" href="/shop/mens">MEN</a>
          <a className="text-[#c6b79b] font-syne text-sm uppercase hover:text-white transition duration-300" href="/shop/womens">WOMEN</a>
          <a className="text-[#c6b79b] font-syne text-sm uppercase hover:text-white transition duration-300" href="/shop/kids">KIDS</a>
          <a className="text-[#c6b79b] font-syne text-sm uppercase hover:text-white transition duration-300" href="#">FANCY</a>
          <a className="text-[#c6b79b] font-syne text-sm uppercase hover:text-white transition duration-300" href="#">COLLECTION</a>
        </div>

        {/* Search, Cart, and Login/Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div
            className={`flex items-center bg-white rounded-full px-3 transition-all duration-300 ease-in-out ${searchVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <CiSearch onClick={closesearch} className="focus:outline-none cursor-pointer text-3xl" />
            <input
              type="text"
              className="ml-2 p-1 focus:outline-none"
              placeholder="Search"
            />
          </div>

          {/* Search Icon Button */}
          {!searchVisible && (
            <CiSearch onClick={clicksearch} className="focus:outline-none cursor-pointer text-[#c6b79b] text-3xl" />
          )}

          {/* Cart Icon */}
          <div>
            <CiShoppingCart className="text-[#c6b79b] text-3xl" />
          </div>

          {/* User Profile or Login */}
          {user ? (
            <div className="relative">
              <a href="#">
                <img src="/images/user.png" className="h-6" alt="user" />
              </a>
              <ul className="absolute mt-2 w-32 bg-white shadow-lg rounded-md">
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Profile</a>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <a href="/users/sign-out">Sign Out</a>
                </li>
              </ul>
            </div>
          ) : (
            <a
              className="text-[#c6b79b] font-syne text-sm uppercase border border-[#c6b79b] py-2 px-4 hover:text-white hover:border-white transition duration-300"
              href="/users/sign-in"
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
