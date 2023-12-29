import React, { Component } from "react";
import Slider from "react-slick";
import './Slider21.css'
import product1 from '../../assets/thumbnail-1.jpg';
import product2 from '../../assets/thumbnail-2.jpg';
import product3 from '../../assets/thumbnail-3.jpg';
import product4 from '../../assets/thumbnail-4.jpg';
import product5 from '../../assets/thumbnail-5.jpg';
import product6 from '../../assets/thumbnail-6.jpg';
import product7 from '../../assets/thumbnail-7.jpg';
import product8 from '../../assets/thumbnail-8.jpg';
import product9 from '../../assets/thumbnail-9.jpg';
// import { GrCaretNext } from "react-icons/gr";
export default class MultipleItems extends Component {
  render() {
    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  
  };

  return (
    <div>
      <h2 style={{color:"#088178"}}>Popular <span style={{color: 'black'}}>Category</span></h2>
          <Slider
              {...settings}>
        <div>
        <div  >
                  <img style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }} src={product1} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product2} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product3} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product4} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product5} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product6} />
              </div>
        </div>
        <div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product7} />
        </div>
        </div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product8} />
        </div>
        <div  >
                  <img  style={{ width: '150px', height: '150px', border: '2px solid #D3D3D3', margin: '10px',borderRadius: '10px', padding: '10px', }}  src={product9} />
        </div>
             
        <div>
      
        </div>
      </Slider>
    </div>
  );
}
}

