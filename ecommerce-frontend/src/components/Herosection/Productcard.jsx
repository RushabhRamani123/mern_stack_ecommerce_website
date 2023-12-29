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

import banner from '../../assets/banner-4.png';
import {Modal} from 'antd';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {  FaRegStar } from "react-icons/fa";
// import {  } from "react-icons/fa";
// import { BsBagPlus } from "react-icons/bs";
// import { AiOutlineEye } from 'react-icons/ai';
// import { AiOutlineHeart } from 'react-icons/ai';
// import {AiOutlineShoppingCart} from 'react-icons/ai';
// import {FloatButton} from 'antd';
// import { FloatButton } from 'antd';
// import { Tooltip } from 'antd'; 

// const CustomTooltip = () => (
  // <div>
  //  Tooltip
  // </div>
// );


const Productcard = () => {
  const imgSrcArray = [
    { i1: img21, i2: img22 , name: "Colorful Pattern Shirts", price:"₹238.85",ratings:"95%",type:"clothing"},
    { i1: img11, i2: img12 , name: "Plain Color Pocket Shirts", price:"₹138.85",ratings:"90%",type:"clothing"},
    { i1: img31, i2: img32 , name: "Vintage Floral Oil Shirts", price:"₹338.85 ",ratings:"79%",type:"clothing"},
    { i1: img41, i2: img42 , name: "Colorful Hawaiian Shirts", price:"₹123.85 ",ratings:"70%",type:"clothing"},
    { i1: img51, i2: img52 , name: "Flowers Sleeve Lapel Shirt", price:"₹268.85 ",ratings:"98%",type:"clothing"},
    { i1: img61, i2: img62 , name: "Ethnic Floral Casual Shirts", price:"₹238.85 ",ratings:"80%",type:"clothing"},
    { i1: img71, i2: img72 , name: "Stitching Hole Sandals", price:"₹1275.85",ratings:"73%",type:"Shoes"},
    { i1: img81, i2: img82 , name: "Mens Porcelain Shirt", price:"₹238.85",ratings:"76%",type:"clothing"},
    { i1: img91, i2: img92 , name: "kjdadfjf", price:"erererere",},
  ]; 
  return (
    <>
      
      <div style={{ display: 'flex' , gap: '10px' }}>
        <motion.h3
          whileHover={{ backgroundColor : "#FDE1BD" , color : "green" ,  y: -5 }}
          style={{textAlign: 'center', marginTop: '2rem', padding: '0.75rem', backgroundColor: '#F1F1F1', width: '8%', borderRadius: '0.35rem', marginLeft: '5rem' }}>
          Featured</motion.h3>
          {/* <motion.h3
           whileHover={{ backgroundColor : "#FDE1BD" , color : "green" ,  y: -5 }}
          style={{textAlign: 'center', marginTop: '2rem', padding: '0.75rem', backgroundColor: '#F1F1F1', width: '8%', borderRadius: '0.35rem'}}>
          Popular</motion.h3>
          <motion.h3
           whileHover={{ backgroundColor : "#FDE1BD" , color : "green" ,  y: -5 }}
          style={{ textAlign: 'center',marginTop: '2rem', padding: '0.75rem', backgroundColor: '#F1F1F1', width: '8%', borderRadius: '0.35rem' }}>
          New added</motion.h3> */}
        
      </div>
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
     
          >
            <motion.div style={{ display: 'flex', width: '100%' }}>
                  <>
                    <div>
                     <div style={{ width: '265px ', height: '265px', borderRadius: '0.75rem', overflow: 'hidden' , position: 'relative' }} > <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.98 }}
                        src={i1} style={{ width: '100%', borderRadius: '0.75rem', transformOrigin: '50% 50%' }} alt="" /></div>
                      <p style={{ fontSize: '0.9rem',  margin: '0rem',color: '#9a9a9a',marginTop: '10px'}}>{item.type}</p>
                      <p style={{ fontSize: '1.2rem',marginTop: '10px ', marginBottom: '0.2rem',color: 'black'}}>{item.name}</p>
                      <div style={{marginTop: '0.1rem'}}> 
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div>
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                     </div>
                        <p style={{ fontSize: '0.9rem',  margin: '0rem',color: '#9a9a9a'}}>{item.ratings}</p>
                       </div>

                        <p style={{ fontSize: '1.3rem',  margin: '0rem',fontWeight: 'bold',color: '#088178'}}>{item.price}</p>
                     </div>
                  </div>
                  </>
            </motion.div>
          </div>
        );
          })}
          <div>
           
          </div>
      </div>
      <div style={{  display: 'flex', gap: '3rem' }}>
          {imgSrcArray.slice(4, 8).map((item, index) => {
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
         
          >
            <motion.div style={{ display: 'flex', width: '100%' }}>
            <div>
                  <div style={{ width: '265px ', height: '265px', borderRadius: '0.75rem', overflow: 'hidden' , position: 'relative' }} > <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.98 }}
                        src={i1} style={{ width: '100%', borderRadius: '0.75rem', transformOrigin: '50% 50%' }} alt="" /></div>
                      <p style={{ fontSize: '0.9rem',  margin: '0rem',color: '#9a9a9a',marginTop: '10px'}}>{item.type}</p>
                      <p style={{ fontSize: '1.2rem',marginTop: '10px ', marginBottom: '0.2rem',color: 'black'}}>{item.name}</p>
                      <div style={{marginTop: '0.1rem'}}> 
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div>
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                        < FaRegStar style={{ color: '#FFDB58', fontSize: '0.8rem' }} />
                     </div>
                        <p style={{ fontSize: '0.9rem',  margin: '0rem',color: '#9a9a9a'}}>{item.ratings}</p>
                       </div>

                        <p style={{ fontSize: '1.3rem',  margin: '0rem',fontWeight: 'bold',color: '#088178'}}>{item.price}</p>
                     </div>
                  </div>
            </motion.div>
          </div>
        );
      })}
    </div>
      </div>
      <div style={{ margin: '5rem', position: 'relative' }}>
  <img src={banner} style={{ width: '100%', borderRadius: '0.1px' }} alt="" />
  <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)',  }}>
    <motion.p whileHover={{ x: 10 }} style={{ fontSize: '1.3rem',  marginBottom: '0rem' ,color: '#088178' }}>Repair Services</motion.p>
    <p style={{ fontSize: '3rem',marginTop: '0.5rem' , fontWeight: 'bold'  }}>Were an Apple <br />Authorized Service Provider</p>
      
        </div>
</div>

    </>
  );
};

export default Productcard;

/*<div className="view" style={{ position: 'relative', display: 'flex', gap: '0.5rem' }}>
                    <Tooltip title="View" onClick={() => { setIsModalVisible(true)}} trigger={['hover']}>
                      <FloatButton
                        icon={<AiOutlineEye   
                          onMouseEnter={() => handleMouseEnter2(2)}
                          onMouseLeave={()=>handleMouseLeave2(2)}
                      style={{
                        fontSize: '1.5rem',
                        position: 'absolute',
                        color: hovered2 === 'true' ?  'white' : 'green' ,
                        cursor: 'pointer',
                        padding: '0.5rem',
                        backgroundColor: hovered2 === 'true' ?   'green' :'#E8F6EA',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                      }} />}
                      style={{ position: 'absolute', left: '50%', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                      overlay={<CustomTooltip />}
                      
                      /></Tooltip>
                     <Tooltip title="Add to wishlist"  trigger={['hover']}>
                    <FloatButton icon={<AiOutlineHeart
                      onMouseEnter={() => handleMouseEnter2(3)}
                      onMouseLeave={()=>handleMouseLeave2(3)}
                      style={{
                        fontSize: '1.5rem',
                        position: 'absolute',
                        color: hovered3 === 'true' ?  'white' : 'green' ,
                        cursor: 'pointer',
                        padding: '0.5rem',
                        backgroundColor: hovered3 === 'true' ?   'green' :'#E8F6EA',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                      }} />}
                      style={{ position: 'absolute',  left: '5rem', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                      ></FloatButton></Tooltip>
                     <Tooltip title="Add to cart" trigger={['hover']}>
                    <FloatButton icon={<AiOutlineShoppingCart
                      onMouseEnter={() => handleMouseEnter2(4)}
                      onMouseLeave={()=>handleMouseLeave2(4)}
                      style={{
                        fontSize: '1.5rem',
                        position: 'absolute',
                        color: hovered4 === 'true' ?  'white' : 'green' ,
                        cursor: 'pointer',
                        padding: '0.5rem',
                        backgroundColor: hovered4 === 'true' ?   'green' :'#E8F6EA',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                      }} />}
                      style={{ position: 'absolute',  left: '11.5rem', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                    ></FloatButton></Tooltip>
                  </div>*/ 