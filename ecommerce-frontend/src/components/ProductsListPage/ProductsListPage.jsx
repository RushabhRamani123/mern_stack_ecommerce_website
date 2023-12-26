import Navbar from '../Navbar/Navbar'
import { useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions/product';
import { motion } from 'framer-motion';
// import { Slider } from 'antd';
import { addToCart } from '../../actions/cart';
import { CiFilter } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Slider from 'rc-slider';
import { useState } from 'react';
import 'rc-slider/assets/index.css';
import './p.css'; 
// import ReactSlider  from 'rc-slider';
function ProductsListPage() {
  let MaxPrice;
  let MinPrice;
  const { slug } = useParams();
  const [sortType, setSortType] = useState('');
  console.log(slug);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductsBySlug(slug));
    }, []);
    const product = useSelector(state => state.product);
    console.log(product);
    const [priceRange, setPriceRange] = useState([0, 490000]);    
  const [productsPic, setProductsPic] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);
  useEffect(() => {
    // ... (other useEffect logic)

    let productsData = [];
    for (let i = 0; i < (product.products.products && product.products.products.length); i++) {
      productsData.push({
        img: product.products.products[i].productPictures[0],
        name: product.products.products[i].name,
        price: product.products.products[i].price,
        _id: product.products.products[i]._id,
        description: product.products.products[i].description
      });
    }
     MaxPrice = Math.max(...productsPic.map(product => product.price));
     MinPrice = Math.min(...productsPic.map(product => product.price));
    setPriceRange([MinPrice, MaxPrice]);
    // Set the productsPic state with the data
    setProductsPic(productsData);
  }, [product.products.products]);
  
  const sort = () => {
    let sortedProducts = [...productsPic];
    if (sortType === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price);
      setProductsPic(sortedProducts);
    }
    else if (sortType === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price);
      setProductsPic(sortedProducts);
    }
    else if (sortType === 'filter') {
      console.log(minPrice, maxPrice);
      const filterprod = productsPic; 
      // alert(JSON.stringify(filterprod));
      console.log("This is the filtered product "+JSON.stringify(filterprod));
      const filteredProducts = filterprod.filter(product => product.price >= minPrice && product.price <= maxPrice);
      setProductsPic(filteredProducts);
      return;
    }
    else if (sortType === 'Reset') {
      setProductsPic(productsPic);
    }
  };

  return (
    <div>
      <Navbar/>
      
      <div style={{ display: 'flex', flexDirection: 'row' , position: 'relative'}}>
      <div style={{ marginLeft: '5rem', marginTop: '1rem',   display: 'flex', flexDirection: 'column' , position: 'relative', gap: '1rem'}}>
        <div style={{ border: '1px solid rgb(193 193 193)', height: '47vh', width: '45vh', borderRadius: '5px' }} >
            <p style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', 
              marginLeft: '1rem', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' , marginBottom: '0px'
            }} >Categories</p>
            <div style={{ marginLeft: '1rem', marginTop: '5px' , marginRight: '1rem'}}>
              <hr style={{color: 'green' }}></hr>
              <div>
               
                {/* <Slider /> */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <motion.p 
                 whileHover={{
                  x:5,color:'green'
                 }}
                 style={{ marginBottom: '0px', cursor: 'pointer' }}>Apple</motion.p>
                 <motion.p 
                 whileHover={{
                  x:5,color:'green'
                 }}
                 style={{ marginBottom: '0px', cursor: 'pointer' }}>Oppo</motion.p>
                 <motion.p 
                 whileHover={{
                  x:5,color:'green'
                 }}
                 style={{ marginBottom: '0px', cursor: 'pointer' }}>Mi</motion.p>
                 <motion.p 
                 whileHover={{
                  x:5,color:'green'
                 }}
                 style={{ marginBottom: '0px', cursor: 'pointer' }}>Honor</motion.p>
                  <motion.p 
                  whileHover={{
                    x:5,color:'green'
                  }}
                  style={{ marginBottom: '0px', cursor: 'pointer' }}>realme</motion.p>
                  <motion.p 
                  whileHover={{
                    x:5,color:'green'
                  }}
                  style={{ marginBottom: '0px', cursor: 'pointer' }}>Vivo</motion.p>
                  <motion.p 
                  whileHover={{
                    x:5,color:'green'
                  }}
                  style={{ marginBottom: '0px', cursor: 'pointer' }}>Samsung</motion.p>
                 <p></p>
               </div>
                
    </div>
            </div>
          </div>
          <div style={{ border: '1px solid rgb(193 193 193)', height: '80vh', width: '45vh', borderRadius: '5px' }} >
            <p style={{marginBottom: '0px',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', 
              marginLeft: '1rem', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'
            }} >FILTERS</p>
            <div style={{ marginLeft: '1rem', marginTop: '1rem' , marginRight: '1rem'}}>
              <hr></hr>
              <div>
                <Slider
                  defaultValue={[MinPrice,MaxPrice]}
                  min={0}
                  max={200000}
                  range
                  value={priceRange}
                  onChange={newRange => { setSortType('filter'); setPriceRange(newRange); setMinPrice(priceRange[0]) ; setMaxPrice(priceRange[1]); }} />
                {priceRange[0]} - {priceRange[1]}
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ marginBottom: '0px' , fontWeight: 'bold' }}>Price :</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                        width: '18px'
                      }}
                        onChange={() => {
                          if (sortType === 'low') {
                            setSortType('');
                          }
                          else
                          setSortType('low');
                        }}
                      />
                      <p >Low to High</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                        width: '18px'
                      }}
                        onChange={() =>{
                          if (sortType === 'high') {
                            setSortType('');
                          }
                          else
                          setSortType('high');}} 
                      />
                      <p 
                      >High to Low</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                      width:'18px'}} />
                      <p>Release Date</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                      width:'18px'}} />
                      <p>Avg Ratings</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ marginBottom: '2px' }}>Items Condition :</h4>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                      width:'18px'}} />
                    <p>New</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="checkbox" style={{
                      width:'18px'}} />
                    <p>Refurbished</p>
                  </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <button style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#108312',
                    borderRadius: '10px',
                    border: 'none',
                    width: '30%',
                 
                  }}
                    onClick={sort}
                  >
                <CiFilter style={{ color: 'white', fontSize: '1.5rem' ,}} />
                  <p style={{ color: 'white', marginLeft: '0.2rem' ,fontSize: '1rem'  }}>Filter</p>
                    </button>
                    <button
                      onClick={() =>{setSortType('Reset')}}
                      style={{ padding: '0.5rem', marginLeft: '1rem', color: 'white', borderRadius: '10px', backgroundColor: '#108312', border: 'none' }}>Reset</button>
                 </div>
               </div>
                
    </div>
            </div>
          </div>
          </div>
          <div> 
          <div className='products' style={{
            marginLeft: '2rem', marginTop: '1rem', position: 'relative', 'overflowY': 'scroll', height: '130vh',
          }}>
            
        {productsPic.map((productPic) => {
          return (
            <>
              <motion.div style={{ borderRadius: '1.75rem' }}
              >
                <motion.div style={{ display: 'flex', width: '100%' }}>
                  
                      <div style={{display:'flex', flexDirection:'row'}}>
                        <motion.img
                      
                          src={productPic.img} style={{ width: '230px', height: '245px', padding: '0.5rem', borderRadius: '0.75rem' }} alt="" />
                        <div style={{padding:'0.5rem'}} >
                          
                          <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', position: 'relative' }}>
                       <div style={{ display: 'flex', flexDirection: 'column'}}>  
                        {productPic.name.trim().length > 30 ? (
                                <Link to={`/product/${productPic._id}/productDetails`} style={{
                                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                  cursor: 'pointer', textDecoration: 'none', fontWeight: '500', fontSize: '1.8rem', color: 'black'
                                }}>${productPic.name.slice(0, 10)}...</Link>
) : (
                                  <Link to={`/product/${productPic._id}/productDetails`}
                                    style={{
                                      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' ,
                                      cursor: 'pointer',
                                      textDecoration: 'none',
                                      fontWeight: '500',
                                      fontSize: '1.5rem',
                                      color: 'black',
                                      marginTop: '1rem'
                                    }}>{productPic.name}</Link>
                              )}
                            </div>
                            <p style={{ color: '#088178' ,  fontSize: '1.5rem' , marginTop: '0rem' , marginBottom: '0rem' }}>&#8377;{productPic.price}</p>
                        <p
                          style={{
                            marginTop: '0rem', marginBottom: '0rem',width: '95%',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                          }}>{productPic.description.slice(0, 200)}.........</p>

                            <Link
                              style={{
                                width: '15%', backgroundColor: '#088178',
                                border: 'none', padding: '0.75rem', fontSize: '1rem', borderRadius: '5rem', color: 'white', cursor: 'pointer', marginTop: '1rem' , textDecoration: 'none',
                                
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                          onClick={() => {
                            const _id  = productPic._id;
                            const name = productPic.name;
                            const price = productPic.price;
                            const img = productPic.img;
                            dispatch(addToCart({ _id, name, price, img }));
                          }}
                            ><FaCartShopping /> Add To Cart</Link>
                          </div>
                           
                        </div>
                      </div>
                      
                  
                  
                </motion.div>
      
                 
              </motion.div>
              <hr style={{background:'#eee' , border:'none' , height:'1px'}}/>
              </>
          )
        })}
          </div>
          </div>
          </div>
          </div>
  )
}

export default ProductsListPage
