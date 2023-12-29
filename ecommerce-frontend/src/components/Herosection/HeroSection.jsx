import banner from '../../assets/banner-5.jpg';
import banner1 from '../../assets/banner-7.jpg';
import banner_1 from '../../assets/banner-1.png';
import banner_2 from '../../assets/banner-2.png';
import banner_3 from '../../assets/banner-3.png';
import AutoPlayMethods from './Slider12';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import f1 from '../../assets/feature-1.png';
import f2 from '../../assets/feature-2.png';
import f3 from '../../assets/feature-3.png';
import f4 from '../../assets/feature-4.png';
import f5 from '../../assets/feature-5.png';
import f6 from '../../assets/feature-6.png';
import { motion } from 'framer-motion';
import Productcard from './Productcard';
import { useState, useEffect } from 'react';
import MultipleItems from './Slider21';
import ScrollToTopButton from './ScrollToTopButton';
const HeroSection = () => {
  const featurestyle = {
    textAlign: 'center',
    padding: '25px 15px',
    borderRadius: '4px',
    border: '1px solid #cce7d0',
    whileHover: {
      display: 'none', WebkitBoxShadow: '20px 20px 54px rgba(0, 0, 0, 0.03)',
      boxShadow: '20px 20px 54px rgba(0, 0, 0, 0.03)',
    }
    
  }
  const featurelabelstyle = { fontSize: '13px',
  fontWeight: 700,
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
    marginTop: '10px',
    backgroundColor: '#d1e8f2',
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div>
      <div style={{display: 'flex', marginLeft: '5rem', marginRight: '3rem', marginTop: '1.5rem'}}>
          <div  style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' , padding: '0rem 0rem' ,display: 'flex', flexDirection: 'column', gap: '2rem' ,outline: 'none' }} >
            <AutoPlayMethods />
     </div>
        <div style={{ margin: '0rem 1.5rem', height: '85vh', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            
            style={{ position: 'relative' ,display: windowWidth < 821 ? 'none' : 'block' }}>
            <img src={banner} alt="banner" style={{ width: '100%', height: '100%', borderRadius: '0.75rem' ,  }} />
            <div>
            <h4 style={{ color: '#5B6270', position: 'absolute', top: '1rem', left: '2.15rem' , }}>Accessories</h4>
              <h3 style={{ position: 'absolute', top: '2.5rem', left: '2rem', fontSize: '1.25rem' }}>Save 17% on<br />Autumn Hat</h3>
              <motion.h4
                whileHover={{ x: 5 , transition: { duration: 0.2 }, color: '#088178' }}
                style={{ color: '#088178', position: 'absolute', top: '6rem', left: '2rem' }}>Shop Now</motion.h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative',display: windowWidth < 821 ? 'none' : 'block' }}>
            <img src={banner1} alt="banner" style={{ width: '100%', borderRadius: '0.75rem' }} />
            <div>
            <h4 style={{ color: '#5B6270', position: 'absolute', top: '1rem', right: '3.5rem'}}>Special Offer</h4>
              <h3 style={{ position: 'absolute', top: '2.5rem', right: '2rem', fontSize: '1.25rem' }}>Save 20% on<br />Eardrop</h3>
              <motion.h4
                whileHover={{ x: 5 , transition: { duration: 0.2 }, color: '#088178' }}
                style={{ color: '#088178', position: 'absolute', top: '6rem', right: '4.5rem' }}>Shop Now </motion.h4>
            </div>
          </motion.div>
         </div>
      </div>
    <div  style={{display:'flex' , flexDirection:'row' , margin:"2rem 5rem", gap:'3rem'}}>
        <motion.div style={featurestyle}
          whileHover={{ y: -10, transition: { duration: 0.2 } }} >
          <img src={f1} alt="" />
          <div style={{fontSize: '16px',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
    marginTop: '10px',
    backgroundColor: '#FDDDE4'}}>Free Shipping</div>
      </motion.div>
        <motion.div style={featurestyle}
         whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <img src={f2} alt="" />
          <div style={{fontSize: '16px',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#3B8D97',
    marginTop: '10px',
    backgroundColor: '#D1E8F2'}}
          >Online Order</div>
      </motion.div>
        <motion.div style={featurestyle}
         whileHover={{ y: -10, transition: { duration: 0.2 } }}>
    <img src={f3} alt="" />
     <div style={{fontSize: '16px',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
    marginTop: '10px',
    backgroundColor: '#CDEBBC'}}>Save Money</div>
      </motion.div>
        <motion.div style={featurestyle}
         whileHover={{ y: -10, transition: { duration: 0.2 } }}>
    <img src={f4} alt="" />
     <div style={{fontSize: '16px',
  fontWeight: 700,
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
    marginTop: '10px',
    backgroundColor: '#CDD4F8'}}>Promotions</div>
      </motion.div>
        <motion.div
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          style={featurestyle}>
          <img src={f5} alt="" />
          <div style={{fontSize: '16px',
  fontWeight: 700,
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
    marginTop: '10px',
    backgroundColor: '#F6DBF6'}}>Happy Sell</div>
      </motion.div>
  <motion.div style={featurestyle} whileHover={{ y: -10, transition: { duration: 0.2 } }}><img src={f6} alt=""/><div style={{fontSize: '16px',
  fontWeight: 700,
  display: 'inline-block',
  padding: '9px 8px 6px 8px',
  lineHeight: 1,
  borderRadius: '4px',
color: '#088178',
marginTop: '10px',
    backgroundColor: '#FFF2E5'}}>24/7 Support</div>
      </motion.div>
        </div>
        <div>
          <Productcard />
          <div style={{ margin: '0rem 5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}><MultipleItems /></div>
          <div style={{ margin: '2rem 5rem 0rem 5rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
          <div style={{
  position: 'relative',
  textAlign: 'center',
  color: '#088178',
  fontSize: '19px',
  fontWeight: 'bold',
}}>
  <img src={banner_1} style={{ width: '100%' }} alt="" />
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
  }}>
    Save 20% on<br />
                Apple iPhone
                <motion.p
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  style={{ fontSize: '14px' }}>Shop Now</motion.p>  
  </div>
</div>


<div style={{
  position: 'relative',
  textAlign: 'center',
  color: '#088178',
  fontSize: '19px',
  fontWeight: 'bold',
}}>
  <img src={banner_2} style={{ width: '100%' }} alt="" />
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
  }}>
   Great Summer<br />
                Deals Collection
                <motion.p
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  style={{ fontSize: '14px' }}>Shop Now</motion.p>
              </div>
</div>
<div style={{
  position: 'relative',
  textAlign: 'center',
  color: '#088178',
  fontSize: '19px',
  fontWeight: 'bold',
}}>
  <img src={banner_3} style={{ width: '100%' }} alt="" />
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
  }}>
    Shop Today’s<br />
                Deals & Offers
                <motion.p
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  style={{ fontSize: '14px' }}>Shop Now</motion.p>
  </div>
</div>
            
          </div>
          <ScrollToTopButton />
          <div>
           
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection
