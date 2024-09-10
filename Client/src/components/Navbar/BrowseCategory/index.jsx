import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo.svg";
import { FcShop } from "react-icons/fc";
import { AiOutlineAppstore } from "react-icons/ai";
import Search from "../Search";
import Cart from "../Cart";
import Authentication from "../Authenticate";

const Navbar = () => {
  const [clickCategories, setClickCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navItems = ['Home', 'About', 'Shop', 'Contact'];
  const categories = [
    { id: 1, name: "Electronics", children: [
      { id: 11, name: "Smartphones", slug: "/electronics/smartphones" },
      { id: 12, name: "Laptops", slug: "/electronics/laptops" },
    ]},
    { id: 2, name: "Clothing", children: [
      { id: 21, name: "Men's Wear", slug: "/clothing/mens-wear" },
      { id: 22, name: "Women's Wear", slug: "/clothing/womens-wear" },
    ]},
  ];

  const renderCategory = () => {
    return categories.map((category) => (
      <motion.h4
        key={category.id}
        className={`cursor-pointer text-sm font-semibold py-2 px-4 hover:bg-gray-100 ${selectedCategory === category.id ? 'text-teal-600' : 'text-gray-700'}`}
        onClick={() => setSelectedCategory(category.id)}
        whileHover={{ x: 5 }}
      >
        {category.name}
      </motion.h4>
    ));
  };

  const renderChildCategories = (children) => {
    return children.map((child) => (
      <motion.div key={child.id} className="py-1">
        <a href={child.slug} className="text-gray-600 hover:text-teal-600 text-sm font-medium block py-1">
          {child.name}
        </a>
        {child.children && child.children.length > 0 && (
          <div className="pl-4">
            {renderChildCategories(child.children)}
          </div>
        )}
      </motion.div>
    ));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={logo} 
              alt="logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex-1 mx-8">
            <Search />
          </div>
          
          <div className="flex items-center space-x-4">
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
            
            <Cart />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <AiOutlineAppstore
                  className="text-gray-500 text-2xl mr-2 cursor-pointer hover:text-gray-700"
                  onClick={() => setClickCategories(!clickCategories)}
                />
                <h3 className="text-lg font-semibold text-teal-600 cursor-pointer hover:text-teal-700">
                  Browse Categories
                </h3>
              </div>
            </div>

            {/* Category dropdown */}
            <AnimatePresence>
              {clickCategories && (
                <motion.div
                  className="absolute left-0 w-full bg-white shadow-lg z-50 sm:static sm:block sm:w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4 border-b sm:border-b-0 sm:border-r border-gray-200">
                      {renderCategory()}
                    </div>
                    <div className="w-full sm:w-3/4 p-4">
                      {selectedCategory && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {categories.find(c => c.id === selectedCategory).name}
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {renderChildCategories(categories.find(c => c.id === selectedCategory).children)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
