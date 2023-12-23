import Navbar from '../Navbar/Navbar'
import { useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions/product';
import { motion } from 'framer-motion';
// import { Slider } from 'antd';
import { CiFilter } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
function ProductsListPage() {
  const { slug } = useParams();
  console.log(slug);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, []);
  const product = useSelector(state => state.product);
  console.log(product);
  let productsPic = []; 
  for (let i = 0; i < (product.products.products && product.products.products.length); i++) {
    productsPic.push({
      img: product.products.products[i].productPictures[0],
      name: product.products.products[i].name,
      price: product.products.products[i].price,
      _id: product.products.products[i]._id,
      description: product.products.products[i].description
    })
  }

  return (
    <div>
      <Navbar />
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginLeft: '5rem', marginTop: '1rem', }}>
          <div style={{ border: '1px solid #108312', height: '100vh', width: '45vh', borderRadius: '1rem' }} >
            <p style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', 
              color: '#088178', marginLeft: '3rem', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'
            }} >FILTER BY PRICE</p>
            <div style={{ marginLeft: '1rem', marginTop: '1rem' , marginRight: '1rem'}}>
              <hr></hr>
              <div>
                {/* <Slider range defaultValue={[20, 1000]} style={{ marginTop: '1rem', color: '#108312' }} /> */}
                <Slider />
                <div>
                  <p style={{ color: '#108312' }}>Price Range</p>
                  <button style={{ 
  display: 'flex', 
  flexDirection: 'row',
  alignItems: 'center', 
  backgroundColor: '#108312',
                    borderRadius: '10px', 
                    border: 'none', 
                    width: '30%',

}}>
                <CiFilter style={{ color: 'white', fontSize: '1.5rem' ,}} />
                  <p style={{ color: 'white', marginLeft: '0.2rem' ,fontSize: '1rem'  }}>Filter</p>
                </button>
               </div>
                
    </div>
            </div>
          </div>
        </div>
        <div>
         
          <div style={{ marginLeft: '2rem',  marginTop: '1rem'  }}>
            
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
                              to={`/product/addtoCart`}
                              
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
