import { Link } from "react-router-dom";
import {  Badge } from 'antd';
import { PiShoppingCartBold } from "react-icons/pi";
const Cart = () => {
  // const cartitems = useSelector((state) => state?.cart?.cartItems);
  //  useEffect(() => {
  //   console.log(cartitems);
  // }, [cartitems]);
  return (
    <div style={{ padding: "0.75rem", display: "flex", gap: "1em" }}>
    <div
      style={{ '@media (max-width: 780px)': { display: 'none' } }}
    >
    <Link to="/product/addtoCart">
        <Badge 
        // count={Object.keys(cartitems).length} 
        size="small" color="#088178">
      <PiShoppingCartBold style={{ fontSize: "2rem" }} />
      </Badge>
      </Link>
   </div>
  </div>
  )
}

export default Cart