import { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from '../../assets/logo.svg';
import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { motion } from 'framer-motion';
import img1 from '../../assets/payment-method.png'
import img2 from '../../assets/google-play.jpg'
import img3 from '../../assets/app-store.jpg'
const Footer = () => {
    const[hovered, setHovered] = useState(false);
    const myComponentStyle = {
  borderRadius: '4px 0 0 4px',
  border: 'none',
  padding: '15px 20px 15px 30px',
  fontSize: '14px',
  width: '350px',
    };
    const myComponentStyle1 = {
        borderRadius: '0 4px 4px 0',
        border: '0',
        fontSize: '14px',
        padding: '0 30px',
        fontFamily: '"Spartan", sans-serif',
        backgroundColor:hovered ?  '#046963':'#212529' ,
        color: 'white',
        
      };
      
  return (
      <div style={{marginTop: '2rem',overflow: 'hidden',}}>
          <div style={{width: '100%', padding: '1.5rem',backgroundColor:'#AECCC5',display: 'flex',justifyContent: 'space-around',alignItems: 'center',flexDirection: 'row'}}>
              <div style={{display: 'flex',flexDirection: 'row' , justifyContent: 'space-around',alignItems: 'center', }}>
                  <div>
                  <MdOutlineAlternateEmail style={{marginRight: '10px',fontSize: '2rem',mariginTop: '1rem'}}/>
                  </div>
              <div style={{fontFamily: 'sans-serif',fontSize: '18px'}}>
              Sign up to Newsletter</div>

              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>...and receive ₹100 coupon for first shopping.</div>
              <div style={{display: 'flex',flexDirection: 'row' , }}>
              <input style={myComponentStyle} type="email" placeholder="Enter your email"  />
              <button style={myComponentStyle1} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Subscribe</button>
              </div>
          </div>
          <div>
              <div>
                  
              </div>
              <div style={{display: 'flex',gap: '6rem',marginLeft: '5rem',alignItems: 'center',flexDirection: 'row',marginTop: '2rem',}}>
                  <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column',}}>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem' }}><img src={logo} alt="logo" style={{ width: '100px' }}/></motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem',fontFamily: 'sans-serif',color: '#a4a5a6' }}>Contact</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem',color: '#465b52' }}><strong style={{color: '#465b52'}}>Address:</strong> 562 Wellington Road, Street 32, San Francisc</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem', color: '#465b52'}}><strong style={{color: '#465b52'}}>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem', color: '#465b52' }}><strong style={{ color: '#465b52' }}>Hours:</strong> 10:00 - 18:00, Mon - Sat</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1rem', color: '#a4a5a6' }}>Follow Us</motion.div>
                      <div>
                          <TfiFacebook style={{ width: '30px',color: '#a4a5a6' }} />
                          <AiOutlineTwitter style={{ width: '30px', color: '#a4a5a6' }} />
                          <FaInstagram  style={{ width: '30px',  color: '#a4a5a6' }} />
                          <FaPinterestP style={{ width: '30px',  color: '#a4a5a6' }} />
                          <FaYoutube style={{ width: '30px',  color: '#a4a5a6' }} />
                      </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                      <motion.div 
                      style={{ paddingBottom: '1.5rem' , fontFamily: 'sans-serif',fontWeight: '600',fontSize: '18px'}}>About Us</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Delivery Information</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Privacy Policy</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Terms & Conditions</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Contact Us</motion.div>
                      <motion.div 
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Support Center</motion.div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                  <div style={{ paddingBottom: '1.5rem' , fontFamily: 'sans-serif',fontWeight: '600',fontSize: '18px'}}>My Account</div>
                      <motion.div
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>About Us</motion.div>
                      <motion.div
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Privacy Policy</motion.div>
                      <motion.div
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Terms & Conditions</motion.div>
                      <motion.div
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>Contact Us</motion.div>
                      <motion.div
                      whileHover={{x:10,color:"green"}}
                      transition={{duration:0.1}}
                      style={{ paddingBottom: '1.5rem' }}>FAQ</motion.div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                      <div style={{ paddingBottom: '1.5rem', fontFamily: 'sans-serif', fontWeight: '600', fontSize: '18px' }}>Install App</div>
                      <div style={{ paddingBottom: '1.5rem' , color: '#465b52'}}>From App Store or Google Play</div>
                      <div style={{   display: 'flex', flexDirection: 'row' ,gap:"1rem"}}>
                          <div><motion.img
                              whileHover={{ y: -5, border: "2px solid green" }}
                              transition={{ duration: 1 }}
                              src={img2} alt="" style={{ border: '1px solid black', borderRadius: '5px' }} /></div>
                          <div><motion.img
                              whileHover={{ y: -5, border: "2px solid green" }}
                              transition={{ duration: 1 }}
                              src={img3} alt="" style={{ border: '1px solid black', borderRadius: '5px' }} /></div>
                      </div>
                      <div style={{ paddingBottom: '1.5rem', marginTop: '1rem', fontFamily: 'Roboto,sans-serif ', color: '#465b52' ,fontSize: '16px' }}>Secured Payment Gateways</div>
                      <div><img src={img1} alt="" /></div> 
                      
                  </div>
              </div>
              <div style={{paddingTop:"2rem"}} >
              <div style={{
                  padding: '0rem 5rem'
              }}>
                  
              <hr />
                 </div>
              <div style={{ width: '100%',  backgroundColor: 'white', display: 'flex',alignItems: 'center', justifyContent: 'center', flexDirection: 'row',color: '#a6a6a6' }}>
                  <p style={{margin:'0px'}}>Copyright © 2023 <span style={{ color: 'green' }}>Rushabh Ramani</span>. All Rights Reserved.</p>
              </div>
             </div>
          </div>
    </div>
  )
}

export default Footer
