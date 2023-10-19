import img11 from '../../assets/product-1-1.jpg';
import img12 from '../../assets/product-1-2.jpg';

import img21 from '../../assets/product-2-1.jpg';
import img22 from '../../assets/product-2-2.jpg';

import img31 from '../../assets/product-3-1.jpg';
import img32 from '../../assets/product-3-2.jpg';

import img41 from '../../assets/product-4-1.jpg';
import img42 from '../../assets/product-4-2.jpg';

import img51 from '../../assets/product-5-1.jpg';
import img52 from '../../assets/product-5-2.jpg';

import img61 from '../../assets/product-6-1.jpg';
import img62 from '../../assets/product-6-2.jpg';

import img71 from '../../assets/product-7-1.jpg';
import img72 from '../../assets/product-7-2.jpg';

import img81 from '../../assets/product-8-1.jpg';
import img82 from '../../assets/product-8-2.jpg';
import img91 from '../../assets/product-9-1.jpg';
import img92 from '../../assets/product-9-2.jpg';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import {AiOutlineHeart} from 'react-icons/ai';


const Productcard = () => {
  const imgSrcArray = [
    { i1: img11, i2: img12 },
    { i1: img21, i2: img22 },
    { i1: img31, i2: img32 },
    { i1: img41, i2: img42 },
    { i1: img51, i2: img52 },
    { i1: img61, i2: img62 },
    { i1: img71, i2: img72 },
    { i1: img81, i2: img82 },
    { i1: img91, i2: img92 },
  ];
  
  const [hovered, setHovered] = useState(-1);
  const handleMouseEnter = (index) => {
    setHovered(index);
  };
  const [hovered1, setHovered1] = useState(-1);
  const handleMouseEnter1 = (index) => {
    setHovered1(index);
  };

  const handleMouseLeave = () => {
    setHovered(-1);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Featured Products</h1>
      <div style={{ margin: '0rem 5rem', display: 'flex',flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'flex', gap: '3rem' }}>
          {imgSrcArray.slice(0, 4).map((item, index) => {
        const { i1, i2 } = item;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '20%',
              padding: '1rem',
              border: '1px solid #cce7d0',
              borderRadius: '0.75rem',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div style={{ display: 'flex', width: '100%' }}>
              {hovered === index ? (
                <div style={{width: '265px ' ,height: '265px' ,borderRadius: '0.75rem', overflow: 'hidden'}}>
                   <motion.img
                initial={{  scale: 1 }}
                animate={{ scale: 1.05  }}
                transition={{ duration: 0.98 }}
                  src={i2} style={{ width: '100%', borderRadius: '0.75rem', transformOrigin: '50% 50%' }} alt="" />
               </div>
              ) : (
                <img src={i1} style={{ width: '16.599rem', borderRadius: '0.75rem' }} alt="" />
              )}
            </motion.div>
          </div>
        );
      })}
      </div>
      <div style={{  display: 'flex', gap: '3rem' }}>
          {imgSrcArray.slice(5, 9).map((item, index) => {
        const { i1, i2 } = item;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '20%',
              padding: '1rem',
              border: '1px solid #cce7d0',
              borderRadius: '0.75rem',
            }}
            onMouseEnter={() => handleMouseEnter1(index)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div style={{ display: 'flex', width: '100%' }}>
              {hovered1 === index ? (
                <div style={{width: '265px ' ,height: '265px' ,borderRadius: '0.75rem', overflow: 'hidden'}}>
                <motion.img
             initial={{  scale: 1 }}
             animate={{ scale: 1.05}}
             transition={{ duration: 0.98 }}
               src={i2} style={{ width: '100%', borderRadius: '0.75rem', transformOrigin: '50% 50%' }} alt="" />
                </div>)
                : (<img src={i1} style={{ width: '16.599rem', borderRadius: '0.75rem' }} alt="" />)}
            </motion.div>
          </div>
        );
      })}
    </div>
    </div>
    </>
  );
};

export default Productcard;