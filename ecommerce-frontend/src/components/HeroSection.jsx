import slider from '../assets/slider-4.png';
import banner from '../assets/banner-5.jpg';
import banner1 from '../assets/banner-7.jpg';
const HeroSection = () => {
  return (
    <>
          <div style={{ display: 'flex', marginLeft: '5rem', marginRight: '3rem', marginTop: '1.5rem'}}>
        <div className="hero" >
          <img src={slider} alt="slider" style={{ width: '145vh' ,height: '85vh' , borderRadius: '0.75rem'  }} />
        </div>  
        <div style={{ margin: '0rem 1.5rem', height: '85vh', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <img src={banner} alt="banner" style={{ width: '100%',height: '100%', borderRadius: '0.75rem'  }} />
          <img src={banner1} alt="banner" style={{ width: '100%', borderRadius: '0.75rem' }} />
         </div>
        
      </div>
    </>
  )
}
//
export default HeroSection
