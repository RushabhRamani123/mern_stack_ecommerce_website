/* eslint-disable react/no-unescaped-entities */
import img11 from "../../assets/product-1-1.jpg";
import img12 from "../../assets/product-1-2.jpg";

import img21 from "../../assets/product-2-1.jpg";
import img22 from "../../assets/product-2-2.jpg";

import img31 from "../../assets/product-3-1.jpg";
import img32 from "../../assets/product-3-2.jpg";

import img41 from "../../assets/product-4-1.jpg";
import img42 from "../../assets/product-4-2.jpg";

import img51 from "../../assets/product-5-1.jpg";
import img52 from "../../assets/product-5-2.jpg";

import img61 from "../../assets/product-6-1.jpg";
import img62 from "../../assets/product-6-2.jpg";

import img71 from "../../assets/product-7-1.jpg";
import img72 from "../../assets/product-7-2.jpg";

import img81 from "../../assets/product-8-1.jpg";
import img82 from "../../assets/product-8-2.jpg";
import img91 from "../../assets/product-9-1.jpg";
import img92 from "../../assets/product-9-2.jpg";
import banner from "../../assets/banner-4.png";
import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa";

const Productcard = () => {
  const products = [
    {
      i1: img21,
      i2: img22,
      name: "Colorful Pattern Shirts",
      price: "₹238.85",
      ratings: "95%",
      type: "clothing",
    },
    {
      i1: img11,
      i2: img12,
      name: "Plain Color Pocket Shirts",
      price: "₹138.85",
      ratings: "90%",
      type: "clothing",
    },
    {
      i1: img31,
      i2: img32,
      name: "Vintage Floral Oil Shirts",
      price: "₹338.85 ",
      ratings: "79%",
      type: "clothing",
    },
    {
      i1: img41,
      i2: img42,
      name: "Colorful Hawaiian Shirts",
      price: "₹123.85 ",
      ratings: "70%",
      type: "clothing",
    },
    {
      i1: img51,
      i2: img52,
      name: "Flowers Sleeve Lapel Shirt",
      price: "₹268.85 ",
      ratings: "98%",
      type: "clothing",
    },
    {
      i1: img61,
      i2: img62,
      name: "Ethnic Floral Casual Shirts",
      price: "₹238.85 ",
      ratings: "80%",
      type: "clothing",
    },
    {
      i1: img71,
      i2: img72,
      name: "Stitching Hole Sandals",
      price: "₹1275.85",
      ratings: "73%",
      type: "Shoes",
    },
    {
      i1: img81,
      i2: img82,
      name: "Mens Porcelain Shirt",
      price: "₹238.85",
      ratings: "76%",
      type: "clothing",
    },
    { i1: img91, i2: img92, name: "kjdadfjf", price: "erererere" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <motion.h3
          whileHover={{ backgroundColor: "#FDE1BD", color: "green", y: -5 }}
          className="text-center py-2 px-4 bg-gray-100 rounded-md cursor-pointer"
        >
          Featured
        </motion.h3>
        {/* Add other category buttons here if needed */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-[#cce7d0] rounded-xl p-4 transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={product.i1}
                alt={product.name}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">{product.type}</p>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaRegStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-sm text-gray-500">{product.ratings}</p>
            </div>
            <p className="text-xl font-bold text-[#088178]">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 sm:mt-12 lg:mt-16 overflow-hidden">
        <div className="aspect-w-16 aspect-h-5 sm:aspect-h-4 lg:aspect-h-3">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#088178] text-sm sm:text-base md:text-lg font-semibold mb-2"
            >
              Repair Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              We're an Apple Authorized Service Provider
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 px-6 py-2 bg-[#088178] text-white rounded-full text-sm sm:text-base font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productcard;
