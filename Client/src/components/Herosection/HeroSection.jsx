/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import AutoPlayMethods from "./Slider12";
import Productcard from "./Productcard";
import MultipleItems from "./Slider21";
import ScrollToTopButton from "./ScrollToTopButton";
import Features from "./Features";
import banner from "../../assets/banner-5.jpg";
import banner1 from "../../assets/banner-7.jpg";
import banner_1 from "../../assets/banner-1.png";
import banner_2 from "../../assets/banner-2.png";
import banner_3 from "../../assets/banner-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const BannerCard = ({ image, category, title, discount }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full rounded-xl overflow-hidden shadow-lg group"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white opacity-100 transition-opacity duration-300">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2">{category}</span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
          Save {discount}% on<br />{title}
        </h3>
        <motion.button
          whileHover={{ x: 5 }}
          className="text-xs sm:text-sm font-semibold text-white mt-1 sm:mt-2 group inline-flex items-center"
        >
          Shop Now
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="lg:col-span-2 h-[200px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <AutoPlayMethods />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 h-[300px] sm:h-[400px] md:h-[500px]">
          <BannerCard
            image={banner}
            category="Accessories"
            title="Autumn Hat"
            discount={17}
          />
          <BannerCard
            image={banner1}
            category="Special Offer"
            title="Eardrop"
            discount={20}
          />
        </div>
      </div>

      <Features />
      
      <div className="my-8 sm:my-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Featured Products</h2>
        <Productcard />
      </div>

      <div className="my-8 sm:my-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">New Arrivals</h2>
        <MultipleItems />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12">
        {[
          { image: banner_1, title: "Save 20% on Apple iPhone" },
          { image: banner_2, title: "Great Summer Deals Collection" },
          { image: banner_3, title: "Shop Today's Deals & Offers" },
        ].map((banner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img src={banner.image} className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <h3 className="text-lg sm:text-xl font-bold text-center mb-2">{banner.title}</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-black rounded-full text-xs sm:text-sm font-semibold transition-colors hover:bg-black hover:text-white"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default HeroSection;