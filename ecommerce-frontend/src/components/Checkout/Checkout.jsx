import Navbar from "../Navbar/Navbar";
import { getAddress, addAddress } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import "./Checkout.css";
import { getCartItems } from "../../actions/cart";
import { MdOutlinePayment } from "react-icons/md";
import { addOrder } from "../../actions/order";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isCouponVisible, setCouponVisible] = useState(false);
  const [isAddressVisible, setAddressVisible] = useState(false);
  const [isEditVisible, setEditVisible] = useState(false);
  const [isNewAddressVisible, setNewAddressVisible] = useState(false);
  const [isLoginPending, setLoginPending] = useState(true);
  const [isSubmit, setSubmit] = useState(false);
  const [isOrderVisible, setOrderVisible] = useState(false);
  const [flag, setFlag] = useState(true);
  const [Total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    if (flag === true) {
      let total = 0;
      Object.keys(cartitems).map((key) => {
        console.log("This is the checkout page");
        total += cartitems[key].qty * cartitems[key].price;
        setFlag(false);
      });
      setTotal(total);
    }
  }, [cartitems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [cityDistrictTown, setCityDistrictTown] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [addressType, setAddressType] = useState("");
  useEffect(() => {
    dispatch(getAddress());
    console.log("This the get address ");
  }, []);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #e2e9e1",
    backgroundColor: "#f7f8f9",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    marginBottom: "10px",
    transition: "box-shadow 0.3s",
  };
 
  const submitOrder = () => {
    const payload = {
      addressId: "6587f2ff40cfea1c23885c4e",
      totalAmount: Total,
      items: 
          Object.keys(cartitems).map((key) => {
            return {
              productId: cartitems[key]._id,
              payablePrice: cartitems[key].price,
              purchasedQty: cartitems[key].qty
            }
          })
      ,
      paymentStatus: "pending",
      paymentType: "cod",
    }
    console.log(payload);
    dispatch(addOrder(payload));
  }
  const submitAdress = () => {
    const info = {
      address: {
        name: name,
        mobileNumber: mobileNumber,
        pinCode: pinCode,
        locality: locality,
        address: address,
        cityDistrictTown: cityDistrictTown,
        state: state,
        landmark: landmark,
        alternatePhone: alternatePhone,
        addressType: addressType,
      },
    };
    dispatch(addAddress(info));
  };
  useEffect(() => {
    console.log(isAddressVisible);
  }, [isAddressVisible]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {/* This is the checkout section consisting of login and signup section As well cupon */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "5rem",
          gap: "2rem",
        }}
      >
        {/* This is the login section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "#f7f8f9",
              border: "1px solid #e2e9e1",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                padding: "20px",
                margin: "0px",
                color: "grey",
                fontSize: "14px",
              }}
            >
              Already have an account?
              {isLoginPending ? (
                <span
                  style={{ color: "#009879", cursor: "pointer" }}
                  onClick={() => setLoginVisible(!isLoginVisible)}
                >
                  Click here to login
                </span>
              ) : (
                <TiTick style={{ color: "#009879", cursor: "pointer" }} />
              )}
            </p>
          </div>
          {isLoginVisible && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
              className="panel-body"
              style={{ padding: "20px" }}
            >
              <p className="mb-30 font-sm">
                If you have shopped with us before, please enter your details
                below. If you are a new customer, please proceed to the Billing
                &amp; Shipping section.
              </p>
              <form method="post">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Username Or Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-md"
                    name="login"
                    onClick={() => {
                      setAddressVisible(!isAddressVisible);
                      setLoginVisible(!isLoginVisible);
                      setLoginPending(false);
                    }}
                  >
                    Log in
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
        {/* This is the upload section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "#f7f8f9",
              border: "1px solid #e2e9e1",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                padding: "20px",
                margin: "0px",
                color: "grey",
                fontSize: "14px",
              }}
            >
              Have a coupon?{" "}
              <span
                onClick={() => setCouponVisible(!isCouponVisible)}
                style={{ color: "#009879", cursor: "pointer" }}
              >
                Click here to enter your code
              </span>
            </p>
          </div>
          {isCouponVisible && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
              className="panel-body"
            >
              <p className="mb-30 font-sm">
                If you have a coupon code, please apply it below.
              </p>
              <form method="post">
                <div className="form-group">
                  <input type="text" placeholder="Enter Coupon Code..." />
                </div>
                <div className="form-group">
                  <buttons className="btn">Apply Coupon</buttons>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
      {/*This div is for the seperator line only*/}
      <div
        style={{
          position: "relative",
          height: "4px",
          backgroundColor: "#f7f8f9",
          margin: "2rem 5rem",
        }}
      ></div>
      {/* This is the address section */}
      <div style={{ display: "flex", flexDirection: "row", gap: "7rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            {isAddressVisible ? (
              <div style={{ marginLeft: "5rem" }}>
                <h3>Billing Address</h3>
                <div>
                  {/* This is the mapped data */}
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#f7f8f9",
                      border: "1px solid #e2e9e1",
                      borderRadius: "10px",
                    }}
                  >
                    {/* <input type="radio">Rushabh Ramani</input> */}

                    {isEditVisible ? (
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, x: -100 }}
                        // className="panel-body"
                        style={{ padding: "20px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Mobile Number"
                            onChange={(e) => {
                              setMobileNumber(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Pin Code"
                            onChange={(e) => {
                              setPinCode(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Locality"
                            onChange={(e) => {
                              setLocality(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Address"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="City/District/Town"
                            onChange={(e) => {
                              setCityDistrictTown(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="State"
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Landmark"
                            onChange={(e) => {
                              setLandmark(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Alternate Phone"
                            onChange={(e) => {
                              setAlternatePhone(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <input
                            type="text"
                            placeholder="Address Type (home or work)"
                            onChange={(e) => {
                              setAddressType(e.target.value);
                            }}
                            style={inputStyle}
                          />
                          <button
                            style={{
                              cursor: "pointer",
                              padding: "10px",
                              border: "1px solid #e2e9e1",
                              width: "150px",
                              backgroundColor: "#009879",
                              color: "white",
                              borderRadius: "10px",
                              fontFamily: "  Roboto, sans-serif",
                              fontSize: "1rem",
                            }}
                            onClick={() => {
                              setEditVisible(!isEditVisible);
                              setSubmit(!isSubmit);
                              setAddressVisible(!isAddressVisible);
                              setOrderVisible(!isOrderVisible);
                              submitAdress();
                            }}
                          >
                            Submit Changes
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            padding: "10px",
                            alignItems: "center",
                          }}
                        >
                          <input
                            type="radio"
                            onChange={() => {
                            }}
                          />
                          <p style={{ cursor: "pointer" }}>Rushabh Ramani</p>
                          <p
                            style={{
                              cursor: "pointer",
                              padding: "5px",
                              border: "1px solid #e2e9e1",
                              backgroundColor: "grey",
                              color: "white",
                              borderRadius: "10px",
                            }}
                          >
                            work
                          </p>
                          <p style={{ cursor: "pointer" }}> +91 123456789</p>
                          <p
                            style={{
                              cursor: "pointer",
                              position: "relative",
                              left: "20%",
                              color: "#009879",
                            }}
                            onClick={() => setEditVisible(!isEditVisible)}
                          >
                            {" "}
                            Edit
                          </p>
                        </div>
                        <div style={{ paddingLeft: "40px" }}>
                          <p style={{ cursor: "pointer" }}>
                            New York, NY 10001
                          </p>
                          <p style={{ cursor: "pointer" }}>United States</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* If user want to add new data */}
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#f7f8f9",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #e2e9e1",
                    borderRadius: "10px",
                    marginTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      padding: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        cursor: "pointer",
                        padding: "5px",
                        border: "1px solid #e2e9e1",
                        backgroundColor: "grey",
                        color: "white",
                        borderRadius: "5px",
                        width: "fit-content",
                        marginLeft: "10px",
                      }}
                      onClick={() => {
                        setNewAddressVisible(!isNewAddressVisible);
                      }}
                    >
                      {isNewAddressVisible ? "-" : "+"}
                    </div>
                    <div>
                      <p>Add New Address</p>
                    </div>
                  </div>
                  {isNewAddressVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      exit={{ opacity: 0, x: -100 }}
                      style={{ padding: "20px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Name"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Pin Code"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Locality"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Address"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="City/District/Town"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="State"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Landmark"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Alternate Phone"
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          placeholder="Address Type (home or work)"
                          style={inputStyle}
                        />
                        <button
                          style={{
                            cursor: "pointer",
                            padding: "10px",
                            border: "1px solid #e2e9e1",
                            width: "150px",
                            backgroundColor: "#009879",
                            color: "white",
                            borderRadius: "10px",
                            fontFamily: "  Roboto, sans-serif",
                            fontSize: "1rem",
                          }}
                          onClick={() => {
                            setEditVisible(!isEditVisible);
                            setSubmit(!isSubmit);
                            setAddressVisible(!isAddressVisible);
                            setOrderVisible(!isOrderVisible);
                          }}
                        >
                          New Address
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div></div>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "5rem",
                  backgroundColor: "#f7f8f9",
                  border: "1px solid #e2e9e1",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "10px",
                  marginTop: "2rem",
                }}
              >
                <h3>
                  Billing Address
                  {isSubmit && <TiTick style={{ color: "#009879" }} />}
                </h3>
              </div>
            )}
          </div>
          {isOrderVisible ? (
            <div
              style={{
                backgroundColor: "#f7f8f9",
                border: "1px solid #e2e9e1",
                padding: "10px",
                width: "100%",
                marginLeft: "5rem",
                borderRadius: "10px",
                marginTop: "2rem",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#009879",
                }}
              >
                Order Summary
              </h2>
              <table
                className="content-table"
                style={{ width: "100%", border: "1px solid #e2e9e1" }}
                border={1}
              >
                <thead>
                  <tr>
                    <th colSpan="2">Product Details</th>
                    <th>SubTotal</th>
                  </tr>
                </thead>
                {Object.keys(cartitems).map((key) => (
                  <tbody key={key}>
                    <tr>
                      <td>
                        <img
                          src={cartitems[key].img}
                          style={{ width: "100px", height: "100px" }}
                          alt="product"
                        />
                      </td>
                      <td>
                        {cartitems[key].name}{" "}
                        <span style={{ color: "#009879" }}>
                          X{cartitems[key].qty}
                        </span>
                      </td>
                      <td>{cartitems[key].qty * cartitems[key].price}</td>
                    </tr>
                    {/* Add more rows or customize as needed */}
                  </tbody>
                ))}
              </table>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#009879",
                  }}
                >
                  Payment
                </h2>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <input type="radio" />
                  <p>COD</p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <input type="radio" />
                  <p>Credit card</p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <input type="radio" />
                  <p>
                    <MdOutlinePayment fontSize={"1rem"} /> UPI
                  </p>
                </div>
                <Link
                  to='/success'
                  style={{
                    backgroundColor: "#009879",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    alignItems: "left",
                    width: "100px",
                    cursor: "pointer",
                  }}

                  onClick={() => submitOrder()}
                >
                  Place Order
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div
                style={{
                  marginLeft: "5rem",
                  backgroundColor: "#f7f8f9",
                  border: "1px solid #e2e9e1",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "10px",
                  marginTop: "2rem",
                }}
              >
                <h3>Order Summary</h3>
              </div>
            </>
          )}
        </div>
        <div style={{ width: "100%", marginRight: "9rem" }}>
          {" "}
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
                <div style={{ marginTop: "20px" }}></div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
