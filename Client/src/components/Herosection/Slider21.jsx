import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product1 from "../../assets/thumbnail-1.jpg";
import product2 from "../../assets/thumbnail-2.jpg";
import product3 from "../../assets/thumbnail-3.jpg";
import product4 from "../../assets/thumbnail-4.jpg";
import product5 from "../../assets/thumbnail-5.jpg";
import product6 from "../../assets/thumbnail-6.jpg";
import product7 from "../../assets/thumbnail-7.jpg";
import product8 from "../../assets/thumbnail-8.jpg";
import product9 from "../../assets/thumbnail-9.jpg";

const products = [
  product1, product2, product3, product4, product5,
  product6, product7, product8, product9
];

const ResponsiveProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-[#088178]">Popular</span>{' '}
        <span className="text-black">Category</span>
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md p-2 sm:p-4">
              <img
                className="w-full h-auto object-cover rounded-md"
                src={product}
                alt={`Product ${index + 1}`}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveProductSlider;