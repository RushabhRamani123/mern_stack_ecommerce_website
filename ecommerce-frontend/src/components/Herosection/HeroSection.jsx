import banner from '../../assets/banner-5.jpg';
import banner1 from '../../assets/banner-7.jpg';
import AutoPlayMethods  from './Slider12';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const HeroSection = () => {

  return (
    <>
          <div style={{ display: 'flex', marginLeft: '5rem', marginRight: '3rem', marginTop: '1.5rem'}}>
          <div  style={{ width: '145vh', height: '80vh', borderRadius: '0.75rem' , padding: '0rem 0rem' ,display: 'flex', flexDirection: 'column', gap: '2rem' ,outline: 'none' }} >
        <AutoPlayMethods  />
     </div>
        <div style={{ margin: '0rem 1.5rem', height: '85vh', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            
            style={{ position: 'relative' }}>
            <img src={banner} alt="banner" style={{ width: '100%', height: '100%', borderRadius: '0.75rem' }} />
            <div >
            <h4 style={{ color: '#5B6270', position: 'absolute', top: '1rem', left: '2.15rem'}}>Accessories</h4>
              <h3 style={{ position: 'absolute', top: '2.5rem', left: '2rem', fontSize: '1.25rem' }}>Save 17% on
<br />Autumn Hat</h3>
              <motion.h4
                whileHover={{ x: 5 , transition: { duration: 0.2 }, color: 'green' }}
                style={{ color: 'green', position: 'absolute', top: '6rem', left: '2rem' }}>Shop Now </motion.h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            
            style={{ position: 'relative' }}>
            <img src={banner1} alt="banner" style={{ width: '100%', borderRadius: '0.75rem' }} />
            <div>
            <h4 style={{ color: '#5B6270', position: 'absolute', top: '1rem', right: '3.5rem'}}>Special Offer</h4>
              <h3 style={{ position: 'absolute', top: '2.5rem', right: '2rem', fontSize: '1.25rem' }}>Save 20% on<br />Eardrop</h3>
              <motion.h4
                whileHover={{ x: 5 , transition: { duration: 0.2 }, color: 'green' }}
                style={{ color: 'green', position: 'absolute', top: '6rem', right: '4.5rem' }}>Shop Now </motion.h4>
            </div>
         </motion.div>
         </div>
        
      </div>
    </>
  )
}
//
export default HeroSection
