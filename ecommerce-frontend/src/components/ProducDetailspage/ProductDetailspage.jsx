import { useEffect , useState } from 'react';
import { useDispatch, useSelector ,} from 'react-redux'
import { getProductDetailsById } from '../../actions/product'
import { useParams } from 'react-router-dom';
const ProductDetailspage = (props) => {
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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
          {/* <h1>{productDetails.name}</h1> */}
      {productDetails.productPictures && productDetails.productPictures.map((pic) => {
        return (<div key={pic} style={flag == pic ? { border: '2px solid green' } : {opacity: '0.3'}}><img src={pic} style={{ height: '60px', width: '60px' }} key={pic} onClick={() => handleClick(pic)} /></div>); 
      })
      }
    </div>
      <div><img src={pictureUrl} style={{ height:'500px',width:'370px'}}/></div>

      </div>
      <div>
        <h1>{productDetails.name}</h1>
        <p>{productDetails.price}</p>
        <p>{productDetails.description}</p>
      </div>
    </div>
  )
}
export default ProductDetailspage; 
