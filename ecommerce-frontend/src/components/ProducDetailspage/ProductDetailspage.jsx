import { useEffect , useState } from 'react';
import { useDispatch, useSelector ,} from 'react-redux'
import { getProductDetailsById } from '../../actions/product'
import {  useParams } from 'react-router-dom';
import { addToCart } from '../../actions/cart';
import { Link } from 'react-router-dom';
import Navbar1 from '../Navbar/Navbar1';
import kl from '../../assets/kl.png';
import rushabh from '../../assets/rushabh.png';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Footer from '../Footer/Footer';
import './ProductDetailspage.css';
import ScrollToTopButton from '../Herosection/ScrollToTopButton';
const ProductDetailspage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [pictureUrl, setPictureUrl] = useState();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const payload = {
      productId: productId
    }
    dispatch(getProductDetailsById(payload))
  }, [productId]);
  const [clickedStars, setClickedStars] = useState([]);
  const [starChangeCount, setStarChangeCount] = useState(0);

  const handleStarClick = (index) => {
    // If the star is already clicked, remove it and all stars after it
    if (clickedStars.includes(index)) {
      setClickedStars(clickedStars.slice(0, index));
      setStarChangeCount(starChangeCount - 1);
    } else {
      // If the star is not clicked, add it to the clickedStars array
      setStarChangeCount(starChangeCount + 1);
      setClickedStars([...clickedStars, index]);
    }

    // Increment the star change count
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Check if the current star should be a solid or regular star
      const isSolid = clickedStars.includes(i);
      const StarIcon = isSolid ? FaStar : FaRegStar;

      stars.push(
        <StarIcon
          key={i}
          style={{
            color: '#dbdb01',
            fontSize: '1rem',
            marginBottom: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };



  console.log(" This is the picture url :"+pictureUrl);
  const productDetails = useSelector((state) => state.product.productDetails || {}); 
  console.log("This is the product details : ");
  console.log(productDetails)
  useEffect(() => {
    setPictureUrl(productDetails.productPictures && productDetails.productPictures[0]);
  setFlag(productDetails.productPictures && productDetails.productPictures[0]);
  }, [productDetails]);
  function handleClick (pic)  {
    setPictureUrl(pic);
    setFlag(pic)
  }
  return (
    <div>
      <Navbar1 data={["Samsung", productDetails.name]} />
      <div style={{ display: 'flex', flexDirection: 'row', margin: '2rem 5rem', gap: '2rem' }}>
        {/* <h1>{productDetails.name}</h1> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{display: 'flex', flexDirection: 'column',marginRight:'2rem'}}>
          {/* <h1>{productDetails.name}</h1> */}
      {productDetails.productPictures && productDetails.productPictures.map((pic) => {
        return (<div key={pic} style={flag == pic ? { border: '2px solid green' } : {opacity: '0.3', marginTop:'2rem'} }><img src={pic} style={{ height: '50px', width: '50px'  }} key={pic} onClick={() => handleClick(pic)} /></div>); 
      })
      }
    </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}><img src={pictureUrl} style={{ height: '550px', width: '500px' }} />
        </div>
        
        </div>
        {/* <h1>{productDetails.name}</h1> */}
      <div className="producDetail" style={{height:'100vh' ,width:'100%', overflowY:'scroll' }}>
          <p style={{
            color: '#088178'
            , fontSize: '2rem'
            , fontWeight: '500'
            , fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
          }}>{productDetails.name}</p>
          {/* <hr style={{ width: '100%' , margin:'0px'}} /> */}
          <p style={{ fontSize: '2rem', fontWeight: '600', color: '#088178', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
          >₹{(productDetails.price )}</p>
          {/* <hr style={{ width: '100%', margin:'0px' }} /> */}
          <div>
            
        </div>
          <p>{productDetails.description}</p>
          
           
              <div style={{ marginTop: '25px' }}>
              <Link to="/product/addtoCart" onClick={() => {
      const { _id, name, price } = productDetails;
      const img = productDetails.productPictures && productDetails.productPictures[0];
      console.log({ _id, name, price, img });
            dispatch(addToCart({ _id, name, price, img }));
          }}
          style={{ textDecoration: 'none' , backgroundColor: '#088178', color: 'white', fontSize: '18px', padding: '10px', borderRadius: '5px', fontWeight: '500'}}
            >Add to Cart</Link>
</div>
              <div>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
        <h1 style={{
          fontSize: '2rem', fontWeight: '500', 
          marginBottom: '6px',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        }}>Reviews(2) : </h1>
        <hr style={{ width: '75px', margin: '0rem', borderBottom: '1px solid green', }} />
        <div style={{display: 'flex', flexDirection: 'column' , marginTop: '3rem'}} >
          <div style={{display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '1rem' }}>Customer Question and Answer</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' , marginTop: '1rem' }}>
              <img src={rushabh} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p style={{
                  width: '100px',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: 'grey'
                }}>Rushabh Ramani</p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: '500' , marginTop: '2rem' }} > Thank you very fast shipping from Delhi only in 3 days</p>
              </div>
         </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column'  }}>
            <img src={kl} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p style={{width: '100px',

                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: 'grey'
                }}>Shubham Kumar</p>
            </div>
            <div>
                <p style={{ fontSize: '1rem', fontWeight: '500' , marginTop: '1rem' }} >Authentic and Beautiful, Love these way more than ever expected They are Great earphones</p>
              </div>
            </div>
         </div>
        </div>

        <hr  />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{
          fontSize: '2rem', fontWeight: '500', 
            marginBottom: '10px',
          
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        }}>Add your Review</h1>
    
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {renderStars()}
            {starChangeCount}
            </div>
          <div>
            <textarea
              name=""
              id=""
              cols="80"
              rows="10"
              placeholder="Write your Review"
            ></textarea>
            <div style={{ display: 'flex', flexDirection: 'row' ,width: '50%' , gap: '1rem', marginTop: '1rem' , marginBottom: '1rem'}}>
              <input type='text' placeholder='Enter your Name' style={{ padding: '1rem' , width: '100%' }} />
              <input type='text' placeholder='Enter your Email' style={{ padding: '1rem' , width: '100%' }} />
            </div>
          </div>
          <button
            style={{
              width: '100px',
              border: 'none',
              backgroundColor: '#088178',
              color: 'white',
              fontSize: '18px',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' ,marginTop:'3rem' }}>
          {/* <h1 style={{
          fontSize: '2rem', fontWeight: '500', 
          marginBottom: '6px',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        }}>Related Products</h1>
          <hr style={{ width: '75px', margin: '0rem', borderBottom: '1px solid green', }} /> */}
        </div>
      </div>
       </div>
            <div>
              </div>
            
        
   </div>
        {/* <div>{productDetails.description}</div> */}
        <div>
      </div>
    </div>
      <Footer />
      <ScrollToTopButton />
   </div>
  )
}
export default ProductDetailspage; 