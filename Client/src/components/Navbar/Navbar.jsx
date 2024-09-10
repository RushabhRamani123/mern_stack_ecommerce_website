import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FcShop } from "react-icons/fc";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import Search from "./Search";
import Cart from "./Cart";
import Authentication from "./Authenticate";
import BrowseCategory from "./BrowseCategory";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="logo"
              className="h-8 w-auto md:h-10"
            />
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-8">
            <BrowseCategory />
            <div className="relative w-full max-w-xl">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Search className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Authentication />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-green-600 transition-colors duration-200"
              onClick={() => {
                window.location.href = "http://localhost:5174/signin";
              }}
            >
              <FcShop className="text-2xl" />
              <span className="text-sm font-medium">Become Seller</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Cart>
                {({ itemCount }) => (
                  <div className="relative">
                    <FiShoppingCart className="text-2xl text-gray-700 hover:text-green-600" />
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </div>
                )}
              </Cart>
            </motion.div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Search className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          </div>
          <BrowseCategory />
          <Authentication />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-green-600 transition-colors duration-200 py-2"
            onClick={() => {
              window.location.href = "http://localhost:5174/signin";
            }}
          >
            <FcShop className="text-2xl" />
            <span className="text-sm font-medium">Become Seller</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="py-2">
            <Cart>
              {({ itemCount }) => (
                <div className="relative inline-block">
                  <FiShoppingCart className="text-2xl text-gray-700 hover:text-green-600" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
              )}
            </Cart>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;