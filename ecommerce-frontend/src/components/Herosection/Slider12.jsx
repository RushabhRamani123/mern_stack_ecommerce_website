import  { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/slider-5.png';
import slider from '../../assets/slider-4.png';
import './Slider123.css';
import { motion } from "framer-motion"
export default class AutoPlayMethods extends Component {
  
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
    };

 
    
    return (
      <motion.div
        initial={{  scale: 1.2, opacity: 0 }}
        animate={{ scale: 1 ,  opacity: 1 }}
        transition={{ duration: 1 }}>

        <Slider {...settings}>
          <div style={{ position: 'relative' , width: '100%', height: '80vh', borderRadius: '0.75rem' }}>
            <img src={slider1} alt="slider" style={{ width: window.innerWidth < 821 ? '55vh' :'145vh', height: window.innerWidth<821?'50vh':'80vh', borderRadius: '0.75rem' }} />
            <div>
              <h4 style={{ color: '#5B6270', position: 'absolute', top: '8rem', left: '5rem', fontSize: '1.25rem' }}>Tech Promotions</h4>
              <h1 style={{ position: 'absolute', top: '10rem', left: '5rem', fontSize: '3rem' }}>Tech Trending<br />
                <span style={{ fontSize: '3rem' , color: '#037c44'}}>
                  Great Collections</span> 
              </h1>
              <h4 style={{ color: '#5B6270', position: 'absolute', top: '18rem', left: '5rem', fontSize: '1.25rem' }}>save more than 50% on selected products with cupons</h4>
            </div>
          </div>
          <div>
            <img src={slider} alt="slider" style={{ width: window.innerWidth < 821 ? '55vh' :'145vh', height: window.innerWidth<821?'50vh':'80vh', borderRadius: '0.75rem' }} />
            <div>
              <h4 style={{ color: '#5B6270', position: 'absolute', top: '8rem', left: '5rem', fontSize: '1.25rem' }}>Trade-In Promotions</h4>
              <h1 style={{ position: 'absolute', top: '10rem', left: '5rem', fontSize: '3rem' }}>Super Value Discount<br/>
                <span style={{ fontSize: '3rem' , color: '#037c44'}}>
                  On All Products</span> 
              </h1>
              <h4 style={{ color: '#5B6270', position: 'absolute', top: '18rem', left: '5rem', fontSize: '1.25rem' }}>save more than 70% on selected products with cupons</h4>
            </div>
          </div>
        </Slider>
      </motion.div>
    );
  }
  }
