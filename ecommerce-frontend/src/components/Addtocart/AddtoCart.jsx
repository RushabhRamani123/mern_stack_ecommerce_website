import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { addToCart,getCartItems } from "../../actions/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const AddtoCart = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [cartitems, setCartitems] = useState([]);
  const dispatch = useDispatch();
  const[Total,setTotal] = useState(0);
  useEffect(() => {
    cart.cartItems && setCartitems(cart.cartItems);
   
  }, [cartitems]);
  
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  },[auth.authenticate]);
 
 
  console.log("cartitems", cartitems);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{marginLeft:'5rem' ,width:'70%'}}>
          {/* <h1 style={{color:'green'}}>My Cart</h1> */}
         
  <table style={{ width: "85%",textAlign: "center" , marginTop:'5rem',border:'1px solid black'}}>
            <thead>
              <tr style={{borderBottom:'1px solid black'}}>
      <th scope="col" colSpan="2" style={{ alignContent: "center" }}>Image</th>
      <th scope="col" colSpan="2" style={{ textAlign: "center", }}>Name</th>
      <th scope="col" colSpan="2" style={{ textAlign: "center"}}>Price</th>
      <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Quantity</th>
      <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Sub Total</th>
      <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Remove</th></tr> 
     
  </thead>
  <tbody>
    {Object.keys(cartitems).map((key) => (
      <tr key={key}>
        <td colSpan="2">
          <img
            style={{ height: "100px", width: "100px" , marginLeft:'1rem'}}
            src={cartitems[key].img}
            alt={cartitems[key].name}
          />
        </td>
        <td colSpan="2" style={{color:'green',fontWeight:'bold'}}>{cartitems[key].name}</td>
        <td colSpan="2">{cartitems[key].price}</td>
        <td colSpan="2">
          
          <button
            style={{
              border: "1px solid green",
              padding: "3px 7px",
              borderRadius: "50%",
              fontWeight: "bold",
              // marginRight: "5px",
            }}
            onClick={() => {
              console.log('Enter here in the button + + ');
              const updatedCartItems = { ...cartitems };
              updatedCartItems[key].qty = cartitems[key].qty + 1;
              console.log(updatedCartItems[key]);
              setCartitems(updatedCartItems);
              const { _id, name, price, img, qty } = updatedCartItems[key];
              setTotal(Total + qty * price);
              dispatch(addToCart({ _id, name, price, img, qty }));
            }}
          >
            +
          </button>
          <input type="text" style={{width:'30px', height:'30px', textAlign:'center'}} value={cartitems[key].qty}/>
          <button
            style={{
              border: "1px solid green",
              padding: "3px 9px",
              borderRadius: "50%",
              fontWeight: "bold",
              marginRight: "5px",
            }}
            onClick={() => {
              const updatedCartItems = { ...cartitems };
              const prev_qty = cartitems[key].qty;
              if (cartitems[key].qty === 1) {return;}
              updatedCartItems[key].qty = cartitems[key].qty - 1;
              setCartitems(updatedCartItems);
              console.log(updatedCartItems[key]);
              const { _id, name, price, img, qty } = updatedCartItems[key];
              setTotal(Total + (qty * price));
              dispatch(addToCart({ _id, name, price, img, qty }))
            }}
          >
            -
          </button>
        </td>
        <td colSpan="2">{cartitems[key].price * cartitems[key].qty}</td>
        <td colSpan="2"><MdDelete style={{color:'red',fontSize:'20px'}} onClick={() => {}}/></td>
      </tr>
    ))}
  </tbody>
</table>;
        </div>
        
        <div style={{ marginTop:'5rem',border:'1px solid black' , height:'300px',width:'300px',marginRight:'5rem'}}>
          <div >
            <h1 style={{color:'green' , fontWeight:'bold',margin:'0px'}}>Cart Total</h1>
            <div style={{border:'1px solid black',margin:'1rem',padding:'1rem'}}>

            </div>
          </div>
        <Link to="/checkout">Checkout </Link>
       </div>
      </div>
    </div>
  );
};

export default AddtoCart;
/*
 {
         Object.keys(cartitems).map((key) => {
           return <>
            <table style={{ width: '100%' }}>
  <tbody>
    {Object.keys(cartitems).map((key) => (
      <tr key={key}>
        <td style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            style={{ height: '180px', width: '150px' }}
            src={cartitems[key].img}
            alt={cartitems[key].name}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            <button
              style={{
                border: '1px solid green',
                padding: '5px 12px',
                borderRadius: '50%',
                fontWeight: 'bold',
                marginRight: '5px',
              }}
              onClick={() => {
                console.log('Enter here in the button + + ');
                const updatedCartItems = { ...cartitems };
                updatedCartItems[key].qty = cartitems[key].qty + 1;
                console.log(updatedCartItems[key]);
                setCartitems(updatedCartItems);
                const { _id, name, price, img, qty } = updatedCartItems[key];
                setTotal(Total + qty * price);
                dispatch(addToCart({ _id, name, price, img, qty }));
              }}
            >
              +
            </button>
            <input
              type="text"
              style={{ width: '30px', height: '30px', textAlign: 'center' }}
              value={cartitems[key].qty}
            />
            <button
              style={{
                border: '1px solid green',
                padding: '5px 15px',
                borderRadius: '50%',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}
              onClick={() => {
                const updatedCartItems = { ...cartitems };
                const prev_qty = cartitems[key].qty;
                if (cartitems[key].qty === 1) {return;}
                updatedCartItems[key].qty = cartitems[key].qty - 1;
                setCartitems(updatedCartItems);
                console.log(updatedCartItems[key]);
                const { _id, name, price, img, qty } = updatedCartItems[key];
                setTotal(Total - (prev_qty - qty) * price);
                dispatch(addToCart({ _id, name, price, img, qty }));}}>-</button>
          </div>
        </td>
        <td>
          <p style={{ margin: '0px', fontWeight: '700', fontSize: '20px' }}>{cartitems[key].name}</p>
          <p style={{ marginTop: '5px', marginBottom: '5px', color: 'green', fontWeight: '500', fontSize: '20px' }}>
            ₹{cartitems[key].price}
          </p>
          <p style={{ margin: '0px' }}>{cartitems[key].quantity}</p>
        </td>
      </tr>
    ))}
  </tbody>
</table>;</>})
        }
*/