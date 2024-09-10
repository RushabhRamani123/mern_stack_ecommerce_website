import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Navbar1 from "../Navbar/Navbar1";
import {addToCart,getCartItems,removeCartItem,clearCart} from "../../actions/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import "./AddtoCart.css";
import { FaWallet } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { PiHouseSimpleFill } from "react-icons/pi";
import Footer from '../Footer/Footer'
const AddtoCart = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [productId, setProductId] = useState('');
  // const [clearCart, setClearCart] = useState(false);
  const [clear, setClear] = useState(false);
  const [cartitems, setCartitems] = useState([]);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);

   
    useEffect(() => {
      if (clear) {
        dispatch(clearCart());
      }
    },[clear])
  
 
  useEffect(() => {   
    if (productId)
      dispatch(removeCartItem({ productId: productId }));
  }, [productId]);
  useEffect(() => {
    cart.cartItems && setCartitems(cart.cartItems);
    if (
      (flag === true && JSON.stringify(cartitems) !== "{}") ||
      JSON.stringify(cartitems) !== "[]"
    ) {
      let total = 0;
      Object.keys(cartitems).map((key) => {
        total += cartitems[key].qty * cartitems[key].price;
      });

      setTotal(total);
      setFlag(false);
    }
  }, [cart]);
  useEffect(() => {
    dispatch(getCartItems());
  }, [auth.authenticate]);
  return (
    <div style={{ overflow: "hidden" }}>
        {/* <Navbar1 data={["Shop","Cart"]} /> */}
      <div
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <div style={{ margin: "5rem", width: "100%" }}>
          <table
            style={{ width: "100%", textAlign: "center" }}
            className="content-table"
          >
            <thead style={{ borderBottom: "1px solid black" }}>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th scope="col" colSpan="2" style={{ alignContent: "center" }}>
                  Image
                </th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Name
                </th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Price
                </th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Quantity
                </th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Sub Total
                </th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartitems).map((key) => (
                <tr key={key}>
                  <td colSpan="2">
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        marginLeft: "1rem",
                      }}
                      src={cartitems[key].img}
                      alt={cartitems[key].name}
                    />
                  </td>
                  <td
                    colSpan="2"
                    style={{ color: "#009879", fontWeight: "bold" }}
                  >
                    {cartitems[key].name}
                  </td>
                  <td colSpan="2">₹{cartitems[key].price}</td>
                  <td colSpan="2">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        console.log("Enter here in the button + + ");
                        const updatedCartItems = { ...cartitems };
                        updatedCartItems[key].qty = cartitems[key].qty + 1;
                        setFlag(true);
                        console.log(updatedCartItems[key]);
                        setCartitems(updatedCartItems);
                        const { _id, name, price, img, qty } =
                          updatedCartItems[key];
                        setTotal(Total + qty * price);
                        dispatch(addToCart({ _id, name, price, img, qty }));
                      }}
                    >
                      +
                    </button>
                    <input
                      type="text"
                      style={{
                        width: "30px",
                        height: "30px",
                        textAlign: "center",
                      }}
                      value={cartitems[key].qty}
                    />
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                      onClick={() => {
                        const updatedCartItems = { ...cartitems };

                        if (cartitems[key].qty === 1) {
                          return;
                        }
                        updatedCartItems[key].qty = cartitems[key].qty - 1;
                        setFlag(true);
                        setCartitems(updatedCartItems);
                        console.log(updatedCartItems[key]);
                        const { _id, name, price, img, qty } =
                          updatedCartItems[key];
                        setTotal(Total + qty * price);
                        dispatch(addToCart({ _id, name, price, img, qty }));
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td colSpan="2">
                    ₹{cartitems[key].price * cartitems[key].qty}
                  </td>
                  <td colSpan="2">
                    <MdDelete
                      style={{ color: "red", fontSize: "20px" }}
                      onClick={()=>{setProductId(cartitems[key]._id);}}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            style={{
              color: "#b7b7b7",
              fontSize: "14px",
              marginTop: "10px",
              fontWeight: "bold",
              top,
              left: "94%",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={()=>setClear(true)}
          >
            X clear cart
          </p>
          <Link
            to="/"
            style={{
              position: "relative",
              left: "85%",
              width: "100%",
              height: "40px",
              backgroundColor: "#009879",
              color: "white",
              border: "none",
              borderRadius: "4px",
              marginTop: "10px",
              fontWeight: "bold",
              marginBottom: "10px",
              textDecoration: "none",
              padding: "15px",
              alignItems: "center",
            }}
          >
            <FaCartShopping
              style={{ color: "white", fontSize: "20px", marginTop: "5px" }}
            />{" "}
            Continue Shopping
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginLeft: "5rem", marginRight: "5rem", width: "40%" }}>
          <div
            style={{
              padding: "30px",
              border: "1px solid #b7b7b7",
              display: "block",
              width: "100%",
              borderRadius: "4px",
            }}
          >
            <div style={{ marginBottom: "1rem!important" }}>
              <h4
                style={{
                  marginBottom: "10px",
                  marginTop: "0px",
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  color: "#009879",
                }}
              >
                Cart Totals
              </h4>
            </div>
            <div style={{ marginBottom: "1rem!important" }}>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody style={{ border: "1px solid #b7b7b7" }}>
                  <tr>
                    <td
                      style={{ border: "1px solid #b7b7b7", padding: "20px" }}
                    >
                      Cart Subtotal
                      <span style={{ color: "#009879", fontWeight: "bold" }}>
                        ({Object.keys(cartitems).length}):
                      </span>
                    </td>
                    <td
                      style={{
                        border: "1px solid #b7b7b7",
                        color: "#009879",
                        fontWeight: "bold",
                        padding: "20px",
                      }}
                    >
                      <span>{Total}</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ border: "1px solid #b7b7b7", padding: "20px" }}
                    >
                      Shipping
                    </td>
                    <td
                      style={{ border: "1px solid #b7b7b7", padding: "20px" }}
                    >
                      {" "}
                      <i className="ti-gift mr-5"></i> Free Shipping
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ border: "1px solid #b7b7b7", padding: "20px" }}
                    >
                      Total:
                    </td>
                    <td
                      style={{
                        border: "1px solid #b7b7b7",
                        padding: "20px",
                        color: "#009879",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      <strong>
                        <span>₹{Total}</span>
                      </strong>
                    </td>
                  </tr>
                </tbody>
                <div
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    
                    Object.keys(cartitems).map((key) => {
                      const { _id, name, price, img, qty } = cartitems[key];
                      dispatch(addToCart({ _id, name, price, img, qty }));
                    });
                  }}
                >
                  <Link
                    to="/checkout"
                    style={{
                      border: "none",
                      backgroundColor: "#009879",
                      color: "white",
                      padding: "15px",
                      width: "100%",
                      borderRadius: "4px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    <FaWallet style={{ fontSize: "20px", marginTop: "5px" }} />{" "}
                    Proceed To CheckOut
                  </Link>
                </div>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{
              marginLeft: "5rem",
              fontWeight: "700",
              fontSize: "1.5rem",
              color: "#009879",
            }}
          >
            Apply Cuppon
          </h1>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <input
              type="text"
              placeholder="Enter Cuppon Code"
              style={{
                marginLeft: "5rem",
                border: "1px solid #b7b7b7",
                borderRadius: "4px",
                width: "200px",
                height: "40px",
                paddingLeft: "15px",
                paddingRight: "15rem",
              }}
            />
            <p
              style={{
                marginLeft: "10px",
                backgroundColor: "#009879",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "9px",
                width: "100%",
                marginTop: "0px",
              }}
            >
              <PiHouseSimpleFill style={{ color: "white", fontSize: "20px" }} />{" "}
              Apply
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddtoCart;
