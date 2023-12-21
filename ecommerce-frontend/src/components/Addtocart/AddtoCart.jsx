import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { addToCart } from "../../actions/cart";
import { useDispatch } from "react-redux";
const AddtoCart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartitems, setCartitems] = useState([]);
  const dispatch = useDispatch();
  const[Total,setTotal] = useState(0);
  useEffect(() => {
    cart.cartItems && setCartitems(cart.cartItems);
   
  }, [cartitems]);
  
  // useEffect(() => {
  //   Object.keys(cartitems).map((key) => {
  //     setTotal((prev) => prev + cartitems[key].price * cartitems[key].qty);
  //   })
  // },[cartitems&&Total]);
 
 
  console.log("cartitems", cartitems);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" ,gap:"20px"}}>
        <div style={{marginLeft:'5rem' , border:'1px solid green',width:'70%'}}>
        <h1 style={{color:'green'}}>My Cart</h1>
          {
         Object.keys(cartitems).map((key) => {
           return <div style={{ display: "flex", flexDirection: "row" }} key={key}>
             <div style={{ display: "flex", flexDirection: "column" }}>
             <img style={{ height: "180px", width: "150px" }} src={cartitems[key].img} />
             <div style={{ display: "flex", flexDirection: "row" , gap:"5px" , marginLeft:"10px"}}>
                 <button
                   style={{ border: "1px solid green" , padding: "5px 12px", borderRadius: "50%" , fontWeight:"bold" }}
                   onClick={() => {
                   console.log("Enter here in the button + + ");
                  const updatedCartItems = { ...cartitems };
                  updatedCartItems[key].qty = cartitems[key].qty + 1;
                  console.log(updatedCartItems[key]);
                  setCartitems(updatedCartItems);
                   const { _id, name, price, img, qty } = updatedCartItems[key];
                   setTotal(Total+qty*price);
                  dispatch(addToCart({ _id, name, price, img, qty }));
                 }}>+</button>
                 <input type="text" style={{width:"30px" ,height:"30px",textAlign:"center"}}  value={cartitems[key].qty} />
                 <button
                    style={{ border: "1px solid green",  padding: "5px 15px", borderRadius: "50%" , fontWeight:"bold" }}
                   onClick={() => {
                   const updatedCartItems = { ...cartitems };
                   const prev_qty = cartitems[key].qty;
                   if(cartitems[key].qty === 1){
                     return;
                   }
                   updatedCartItems[key].qty = cartitems[key].qty - 1;
                   setCartitems(updatedCartItems);
                   console.log(updatedCartItems[key]);
                   const { _id, name, price, img, qty } = updatedCartItems[key];
                   setTotal(Total-(prev_qty-qty)*price);
                   dispatch(addToCart({ _id, name, price, img, qty }));
                 }}>-</button>
               </div>
             </div>
             <div>
             <p style={{margin:'0px',fontWeight:'700',fontSize:'20px'}}>{cartitems[key].name}</p>
             <p style={{marginTop:'5px',marginBottom:'5px',color:'green',fontWeight:'500',fontSize:'20px'}}>₹{cartitems[key].price}</p>
               <p style={{margin:'0px'}}>{cartitems[key].quantity}</p>
               
             </div>
           </div>
         })
        }
        </div>
        <div style={{width:"100px",display:"flex",justifyContent:"center",border:"1px solid black"}}>

        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
