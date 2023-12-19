import Navbar from '../Navbar/Navbar'
import { useEffect , useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions/product';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FloatButton } from 'antd';
import { motion } from 'framer-motion';
import { Tooltip } from 'antd';
import { Slider } from 'antd';
import { CiFilter } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
const CustomTooltip = () => (
  <div>
   Tooltip
  </div>
);

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
  const [hovered, setHovered] = useState(-1);
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  // const handleMouseEnter = (index) => {
  //   setHovered(index);
  // };
  // const [hovered1, setHovered1] = useState(-1);
  // const handleMouseEnter1 = (index) => {
  //   setHovered1(index);
  // };

  // const handleMouseLeave = () => {
  //   setHovered(-1);
  // };
  
  // const handleMouseLeave1 = () => {
  //   setHovered1(-1);
  // };
  const [hovered2, setHovered2] = useState('false');
  const [hovered3, setHovered3] = useState('false');
  const [hovered4, setHovered4] = useState('false');
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // }
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // }
  
  const handleMouseEnter2 = (i) => {
    if(i === 2) setHovered2('true');
    if(i === 3) setHovered3('true');
    if(i === 4) setHovered4('true');   
  }
  const handleMouseLeave2 = (i) => {
    if(i === 2) setHovered2('false');
    if(i === 3) setHovered3('false');
    if(i === 4) setHovered4('false');
  }
  return (
    <div>
      <Navbar />
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginLeft: '5rem', marginTop: '1rem'}}>
          <div style={{ border: '1px solid #108312', height: '100vh', width: '45vh', borderRadius: '1.5rem' }} >
            <p style={{ color: '#108312', marginLeft: '3rem', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' }} >FILTER BY PRICE</p>
            <div style={{ marginLeft: '1rem', marginTop: '1rem' , marginRight: '1rem'}}>
              <hr></hr>
              <div>
                <Slider range defaultValue={[20, 1000]} style={{ marginTop: '1rem', color: '#108312' }} />
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
          <div >
            <button style={{
              marginLeft: '60rem', marginTop: '1rem', fontSize: '1rem',
              color: '#767575 ', backgroundColor: '#ECE2E0', borderRadius: '10px', padding: '0.5rem', 
              border: 'none',
            }}>Sort By</button>
            
          </div>
          <div style={{ marginLeft: '2rem',  marginTop: '1rem'  }}>
            
        {productsPic.map((productPic, index) => {
          return (
            <>
              <motion.div style={{ borderRadius: '1.75rem' }}
              >
                <motion.div style={{ display: 'flex', width: '100%' }}>
                  {hovered === 300 ? (
                    <div style={{ paddingTop: '0.5rem', borderRadius: '0.75rem', width: '275px', height: '300px', overflow: 'hidden', position: 'relative', }}>
                      <motion.img
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.05 }}
                        transition={{ duration: 0.98 }}
                       onMouseLeave={() => setHovered(-1)}
                        src={productPic.img} style={{ width: '100%', borderRadius: '0.75rem', transformOrigin: '50% 50%' }} alt="" />
                      <div className="view" style={{ position: 'relative', display: 'flex', gap: '1rem', top: '-1.5rem' }}>
                        <Tooltip title="View" trigger={['hover']} onClick={() => { setIsModalVisible(true) }} >
                          <FloatButton
                            icon={<AiOutlineEye
                              onMouseEnter={() => handleMouseEnter2(2)}
                              onMouseLeave={() => handleMouseLeave2(2)}
                              style={{
                                fontSize: '1.5rem',
                                position: 'absolute',
                                color: hovered2 === 'true' ? 'white' : 'green',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                backgroundColor: hovered2 === 'true' ? 'green' : '#E8F6EA',
                                borderRadius: '50%',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1
                              }} />}
                            style={{ position: 'absolute', left: '50%', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                            overlay={<CustomTooltip />}
                      
                          /></Tooltip>
                        <tooltip title="Add to wishlist" >
                          <FloatButton icon={<AiOutlineHeart
                            onMouseEnter={() => handleMouseEnter2(3)}
                            onMouseLeave={() => handleMouseLeave2(3)}
                            style={{
                              fontSize: '1.5rem',
                              position: 'absolute',
                              color: hovered3 === 'true' ? 'white' : 'green',
                              cursor: 'pointer',
                              padding: '0.5rem',
                              backgroundColor: hovered3 === 'true' ? 'green' : '#E8F6EA',
                              borderRadius: '50%',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              zIndex: 1
                            }} />}
                            style={{ position: 'absolute', left: '5rem', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                          ></FloatButton></tooltip>
                        <tooltip title="Add to cart" >
                          <FloatButton icon={<AiOutlineShoppingCart
                            onMouseEnter={() => handleMouseEnter2(4)}
                            onMouseLeave={() => handleMouseLeave2(4)}
                            style={{
                              fontSize: '1.5rem',
                              position: 'absolute',
                              color: hovered4 === 'true' ? 'white' : 'green',
                              cursor: 'pointer',
                              padding: '0.5rem',
                              backgroundColor: hovered4 === 'true' ? 'green' : '#E8F6EA',
                              borderRadius: '50%',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              zIndex: 1
                            }} />}
                            style={{ position: 'absolute', left: '11.5rem', marginBottom: '3rem', transform: 'translate(-50%, -50%)' }}
                          ></FloatButton></tooltip>
                      </div>
                      <div>
                        
                        {productPic.name.trim().length > 15 ? (
  <h5>${productPic.name.slice(0, 10)}...</h5>
) : (
  <h5>{productPic.name}</h5>
)}

                        <h5>{productPic.price}</h5>
                      </div>
                    </div>
                  ) : (
                      <div style={{display:'flex', flexDirection:'row'}}>
                        <motion.img
                          onMouseEnter={() => setHovered(0)}
                          src={productPic.img} style={{ width: '300px', height: '325px', padding: '0.5rem', borderRadius: '0.75rem' }} alt="" />
                        <div style={{padding:'0.5rem'}} >
                          
                          <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', position: 'relative' }}>
                       <div style={{ display: 'flex', flexDirection: 'column'}}>  
                        {productPic.name.trim().length > 30 ? (
  <Link to={`/product/${productPic._id}/productDetails`}  style={{cursor: 'pointer' , textDecoration: 'none' , fontWeight: 'bold',fontSize: '1.8rem' ,  color: 'black'}}>${productPic.name.slice(0, 10)}...</Link>
) : (
                                  <Link to={`/product/${productPic._id}/productDetails`}
                                    style={{
                                      cursor: 'pointer',
                                      textDecoration: 'none',
                                      fontWeight: 'bold',
                                      fontSize: '1.5rem',
                                      color: 'black',
                                      marginTop: '1rem'
                                    }}>{productPic.name}</Link>
                              )}
                            </div>
                            <p style={{ color: 'green' , fontWeight: 'bold', fontSize: '1.5rem' , marginTop: '0rem' , marginBottom: '0rem' }}>&#8377;{productPic.price}</p>
                              <p style={{ marginTop: '0rem' , marginBottom: '0rem' }}>{productPic.description}</p>
                            <Link
                              style={{
                                width: '20%', backgroundColor: 'green',
                                border: 'none', padding: '0.75rem', fontSize: '1rem', borderRadius: '5rem', color: 'white', cursor: 'pointer', marginTop: '1rem' , textDecoration: 'none'
                             
                              }}
                              to={`/product/addtoCart`}
                              
                            ><FaCartShopping />Add To Cart</Link>
                          </div>
                           
                        </div>
                      </div>
                      
                  )}
                  
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
