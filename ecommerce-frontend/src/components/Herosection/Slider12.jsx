import  { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/slider-5.png';
import slider from '../../assets/slider-4.png';
import './Slider123.css';
import { motion } from "framer-motion";
export default class AutoPlayMethods extends Component {
  render() {
    const settings = {
      dots: true,
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
          <div style={{ position: 'relative' }}>
            <img src={slider1} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
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
            <img src={slider} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
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
// import { useState } from 'react';
// import slider1 from '../../assets/slider-5.png';
// import slider from '../../assets/slider-4.png';
// const Slider = () => {
//     const [clickCategories, setClickCategories] = useState(false);
//   return (
//     <div>
//         <div className="hero" onClick={() => setClickCategories(!clickCategories)}>
//   {clickCategories ? (
//      <div>
//      <img src={slider} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
// </div>
//   ) : (
//               <div>
//                 <img src={slider1} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
//               </div>
//           )}
//           <div style={{position:"absolute",display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center",top:"45%", left:"3%", gap:"56rem",}
//             }>
//             <div style={{ fontSize: '1rem', color: '#5B6270', backgroundColor: '#edf4f4', padding: '0.5rem 0.5rem', width: '1rem', borderRadius: '50%', Color: 'grey', outline: 'none' }}>&#x1F81C;</div>
//             <div style={{ fontSize: '1rem', color: '#5B6270', backgroundColor: '#DFEDEC', padding: '0.5rem 0.5rem', width: '1rem', borderRadius: '50%', Color: 'grey', outline: 'none' }}>&#x1F81E;</div>
//           </div>
// </div>
//     </div>
//   )
// }

// export default Slider
