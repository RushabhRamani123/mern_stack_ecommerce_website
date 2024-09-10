import Slider from "react-slick";
import { motion } from "framer-motion";
import slider1 from '../../assets/slider-5.png';
import slider from '../../assets/slider-4.png';

const AutoPlaySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows on mobile
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true // Show dots on mobile for navigation
        }
      }
    ]
  };

  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Slider {...settings}>
        {[slider1, slider].map((image, index) => (
          <div key={index} className="relative group">
            <div className="aspect-w-16 aspect-h-9 sm:aspect-h-7 md:aspect-h-5">
              <img
                src={image}
                alt={`slider ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-sm sm:text-lg md:text-xl text-white mb-1 sm:mb-2">
                Trade-In Promotions
              </h4>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                Super Value Discount<br/>
                <span className="text-[#088178]">
                  On All Products
                </span> 
              </h1>
              <h4 className="text-sm sm:text-lg md:text-xl text-white">
                Save more than 70% on selected products with coupons
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default AutoPlaySlider;