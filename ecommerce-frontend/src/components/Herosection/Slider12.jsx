import  { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/slider-5.png';
import slider from '../../assets/slider-4.png';
import './Slider123.css';
import { motion } from "framer-motion";
export default class AutoPlayMethods   extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div style={{ position: 'relative' }}>
            <img src={slider1} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
            <div>
              <h4 style={{ color: '#5B6270', position: 'absolute', top: '1rem', left: '2.15rem' }}>Accessories</h4>
              <h3 style={{ position: 'absolute', top: '2.5rem', left: '2rem', fontSize: '1.25rem' }}>Save 17% on
                <br />Autumn Hat</h3>
              <motion.h4
                whileHover={{ x: 5, transition: { duration: 0.2 }, color: 'green' }}
                style={{ color: 'green', position: 'absolute', top: '6rem', left: '2rem' }}>Shop Now </motion.h4>
              
            </div>
          </div>
          <div>
            <img src={slider} alt="slider" style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' }} />
          </div>
        </Slider>
      </div>
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
