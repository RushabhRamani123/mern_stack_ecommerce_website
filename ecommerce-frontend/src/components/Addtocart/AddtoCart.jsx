import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const AddtoCart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
   
    cart.cartItems && setCartitems(cart.cartItems);
  
  }, [cart.cartItems]);

  console.log("cartitems", cartitems);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Cart</h1>
        <div>
          {
         Object.keys(cartitems).map((key) => {
           return <div key={key}>
             <img src={cartitems[key].img} />
             <p>{cartitems[key].name}</p>
             <p>{cartitems[key].price}</p>
             <p>{cartitems[key].quantity}</p>
             <input type="number" value={cartitems[key].qty} />
           </div>;
         })
        }
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
