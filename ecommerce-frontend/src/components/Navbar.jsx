import logo from '../assets/logo.svg'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart , AiOutlineAppstore} from 'react-icons/ai'
import { PiShoppingCartBold } from 'react-icons/pi'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import { useRef } from 'react';
import { useState } from 'react';
import { PiDressThin } from 'react-icons/pi'
import { PiTShirtThin } from 'react-icons/pi'
import {IoIosPhonePortrait} from 'react-icons/io'
const Navbar = () => {
  const [clickCategories, setClickCategories] = useState(false);
  const Margin = {
    color: '#5B6270',
    fontSize: '1rem',
    marginTop: '5px',
    marginBottom: '5px'
}
  const inputRef = useRef(null);
  const handleSearch = () => {
    if(inputRef.current.value === '')
      inputRef.current.focus()
    else 
      alert('Searching.....')
  }
  return (
    <>
      <div style={{ padding:'0rem 3rem' }}>
      <div style={{  padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
        <div style={{paddingTop: '0.25rem'}}>
        <img src={logo} alt="logo" style={{ height: '2em' }} />
        </div>
        <div style={{position: 'relative'}}>
        <BiSearchAlt onClick={handleSearch} style={{ position: 'absolute',paddingRight: '0.5rem', top: '50%', color: 'grey' , left: '0.5rem', transform: 'translateY(-50%)', fontSize: '1.5em' }}/>
        <input type="text" ref={inputRef} placeholder="Search the products..."  style={{ width:"40em", padding: '1rem 3rem', borderRadius: '0.5rem', border: '1px solid #e8ebe9',fontSize: '1rem', outline: 'none' }}/>
        </div>
        <div style={{padding: '0.75rem',display: 'flex', gap: '1em'}}>
          <AiOutlineHeart style={{ fontSize: '2rem' }} />
          <PiShoppingCartBold style={{ fontSize: '2rem' }} />  
        </div>
      </div>
      <div style={{padding:'0rem 2rem' }}>
      <div style={{width: '100%',border: '0.5px solid #e8ebe9'}}></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{  display: 'flex',alignContent: 'center'}}>
            <AiOutlineAppstore onClick={() => setClickCategories(!clickCategories)} style={{ fontSize: '1.5rem', color: 'grey' }} />
            <h3 style={{ fontSize: '1.5rem', margin: '0px' }}>Browse Categories</h3>
          </div>
        <div style={{ display: 'flex',gap: '1rem' }}>
        <h3>Categories</h3>
        <h3>Brands</h3>
        <h3>Price</h3>
        <h3>Rating</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <TfiHeadphoneAlt style={{ fontSize: '1.5rem', color: 'grey' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3>Support</h3>
              <h3 style={{ color: 'green' }}>1900-888</h3>
            </div>
          </div>
        </div>
        <div style={{width: '100%',border: '0.5px solid #e8ebe9'}}></div>
        {clickCategories && <div style={{ height: '50vh', width: '15%', borderLeft: '1px solid #e8ebe9', borderRight: '1px solid #e8ebe9', borderBottom: '1px solid #e8ebe9', backgroundColor: 'white',zIndex: '1000', position: 'absolute' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <PiDressThin style={{ fontSize: '1.5rem', color: 'grey' }} />
            <h4 style={Margin}>Womens Clothes</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
             <PiTShirtThin style={{ fontSize: '1.5rem', color: 'grey' }} />
            <h4  style={Margin}>Mens Clothes</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <IoIosPhonePortrait style={{ fontSize: '1.5rem', color: 'grey' }} />
            <h4 style={Margin}>Cellphones</h4>

           </div>
            <h4 style={Margin}>Shoes</h4>
            <h4 style={Margin}>Mother & Toys</h4>
        </div>
        </div>}
   </div>
    </div>
    </>
  )
}

export default Navbar
