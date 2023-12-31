import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineAppstore } from "react-icons/ai";
import { PiShoppingCartBold } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useRef } from "react";
import { useState } from "react";
import { FcShop } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Modal } from "antd";
import { login } from "../../actions/auth";
import { signup } from "../../actions/user";
import {  Badge } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
const Navbar= () => {
  const category = useSelector((state) => state.category);
  const cartitems = useSelector((state) => state.cart.cartItems);
  
  // useEffect(() => {
  //   console.log(cartitems);
  // }, [cartitems]);
  // alert(cartitems.cartItems.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    // dispatch(getC)
  }, []);
  const [clickCategories, setClickCategories] = useState(false);
  const [loginconfirm, setLoginconfirm] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSingVisible, setIsSingupVisible] = useState(true);
  const [email, setemail] = useState(false);
  const [password, setpassword] = useState(false);
  // const [name, setname] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [emailsignup, setemailsignup] = useState('');
  const [passwordsignup, setpasswordsignup] = useState('');
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  console.log("This is the cart of the navbar:" + JSON.stringify(cart.cartItems.length));
  console.log("This is the auth of the navbar:" + JSON.stringify(auth));
  console.log("This is the user of the navbar:" + JSON.stringify(user));
  // store the token in the localstorage
  // get the token from the auth and then store it in the localstorage
  // how to itterate through auth 
  auth.token && localStorage.setItem("token", auth.token);
  // const user = useSelector((state) => state.user);
  useEffect(() => {
    Object.keys(user).map((key) => {
      console.log("This is the user:"+JSON.stringify(user[key]));
    });
  },[user])
  const items = [
   
    {
      key: '2',
      label: (
        <Link target="_blank"  to="/order">
          Order History
        </Link>
      ),
      // icon: <SmileOutlined />,
    },
   
    {
      key: '4',
      danger: true,
      label: 'SignOut',
    },
  ];
  const Signup = () => {
    const user = {
      firstName: firstname,
      lastName: lastname,
      email: emailsignup,
      password: passwordsignup
    }
    console.log(user);
    dispatch(signup(user));
  }
  const handleOk = () => {
    setIsModalVisible(false);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  }
  const Login = () => {
   const user = {
     email: email,
     password: password
    }
    dispatch(login(user));
    if (auth.authenticate) {
      setLoginconfirm(false);
    }
    setIsModalVisible(false);
  }
  useEffect(() => {
    if(auth.authenticate){
     setLoginconfirm(false);
    }
  },[auth]);
  const Margin = {

    color: "#5B6270",
    fontSize: "1rem",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const inputRef = useRef(null);
  const handleSearch = () => {
    if (inputRef.current.value === "") inputRef.current.focus();
    else alert("Searching.....");
  };
  const [index, setIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const handleClcikCategories = (e) => {
    setIndex(e.target.dataset.category);
    setFlag(true);
  };
  const renderCategory = () => {
    let myCategories = [];

    for (let i = 0; i < category.categories.length; i++) {
      myCategories.push(
        <h4
          onClick={handleClcikCategories}
          data-category={i}
          key={category.categories[i].id}
          style={{
            cursor: "pointer",
            color: index == i && flag == true ? "#31c704" : "#5B6270",
            fontWeight: "700",
            fontSize: "1rem",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          {category.categories[i].name}
        </h4>
      );
    }

    return myCategories;
  };
  const renderChildCategories = (children) => {
    let childCategories = [];
    for (let i = 0; i < children.length; i++) {
      childCategories.push(
        <div>
          <h4
            key={children[i].id}
            style={{
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "1rem",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
           <a  href={children[i].slug} style={{ color: "#5B6270" , textDecoration: "none" , fontWeight: "500"}}> {children[i].name}</a>
            <h5 style={{ color: "#5B6270" }}>
              <a href='#' style={{ color: "#5B6270" , textDecoration: "none" , fontWeight: "500" }}>
              {children[i].children && children[i].children.length > 0
                ? renderChildCategories(children[i].children)
                : null}
             </a>
            </h5>
          </h4>
        </div>
      );
    }

    return childCategories;
  };
  return (
    <>
      <div style={{ padding: "0rem 3rem" }}>
        <div
          style={{
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div style={{ paddingTop: "0.25rem" }}>
            <img src={logo} alt="logo" style={{ height: "2em" }} />
          </div>
          <div style={{ position: "relative" }}>
            <BiSearchAlt
              onClick={handleSearch}
              style={{
                position: "absolute",
                paddingRight: "0.5rem",
                top: "40%",
                color: "grey",
                left: "0.5rem",
                transform: "translateY(-50%)",
                fontSize: "1.5em",
              }}
            />
            <input
              type="text"
              ref={inputRef}
              placeholder="Search the products..."
              style={{
                width: "40em",
                padding: "1rem 3rem",
                borderRadius: "0.5rem",
                border: "1px solid #e8ebe9",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FcShop style={{ fontSize: "2rem" }} />
            <h3
              onClick={() =>
              {(window.location.href = "http://localhost:5174/signin");}}
              style={{ cursor: "pointer" }}
            >
              Become Seller
            </h3>
          </div>

          {loginconfirm ? (
            <div
              onClick={() =>setIsModalVisible(true) }
              style={{ paddingTop: "1.35rem", color: "green" }}
            >
              Login
            </div>
          ):(
            <div style={{ fontSize: "1rem", color: "green" ,marginTop: "1rem" }}> <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                    <button style={{ border: "none", background: "#088178", color: "white",padding: "0.5rem", borderRadius: "0.5rem",fontWeight: "500"}}>{auth.user.firstName}</button>
              </Space>
            </a>
          </Dropdown></div>
          )}
          <div style={{ padding: "0.75rem", display: "flex", gap: "1em" }}>
            <div
              style={{ '@media (max-width: 780px)': { display: 'none' } }}
            >
            <Link to="/product/addtoCart">
                <Badge count={
                  Object.keys(cartitems).length} size="small" color="#088178">
              <PiShoppingCartBold style={{ fontSize: "2rem" }} />
              </Badge>
              </Link>
           </div>
          </div>
        </div>
        <div
          className="category-section lg:hidden"
          style={{ padding: "0rem 2rem" }}
        >
          <div style={{ width: "100%", border: "0.5px solid #e8ebe9" }}></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignContent: "center" }}>
              <AiOutlineAppstore
                
                onClick={() => {
                  setClickCategories(!clickCategories);
                  setFlag(false);
                }}
                style={{
                  fontSize: "1.5rem", color: "grey", cursor: "pointer", }}
              />
              <h3 style={{ fontSize: "1.5rem", margin: "0px" , cursor: "pointer" , color:"#088178"}}>
                Browse Categories
              </h3>
            </div>
            <div style={{ display: "flex", gap: "2rem", cursor: "pointer" }}>
              <motion.h3
              whileHover={{ color: "#088178" }}
              >Home</motion.h3>
              <motion.h3
              whileHover={{color:"#088178"}}
              >About</motion.h3>
              <motion.h3
              whileHover={{color:"#088178"}}
              >Shop</motion.h3>
              <motion.h3
              whileHover={{color:"#088178"}}
              >Contact</motion.h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <TfiHeadphoneAlt style={{ fontSize: "1.5rem", color: "grey" }} />
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <h3>Support</h3>
                <h3 style={{ color: "#088178" }}>1900-888</h3>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", border: "0.5px solid #e8ebe9",zIndex: "10000",}}
></div>
          {clickCategories && (
            <motion.div style={{ position: "relative", zIndex: "100000" }}>
              <motion.div
                style={{
                  height: "50vh",
                  width: "15%",
                  borderLeft: "1px solid #e8ebe9",
                  borderRight: "1px solid #e8ebe9",
                  borderBottom: "1px solid #e8ebe9",
                  backgroundColor: "white",
                  zIndex: "10000",
                  position: "absolute",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column ",
                      gap: "10px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {renderCategory()}
                    </div>
                  </div>
                </div>
              </motion.div>
              {flag == true && (
                <motion.div
                  style={{
                    height: "50vh",
                    width: "55%",
                    borderLeft: "1px solid #e8ebe9",
                    borderRight: "1px solid #e8ebe9",
                    borderBottom: "1px solid #e8ebe9",
                    backgroundColor: "white",
                    zIndex: "10000",
                    marginLeft: "15%",
                    position: "absolute",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column ",
                        gap: "2rem",
                        padding: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          gap: "2rem",
                          cursor: "pointer",
                        }}
                      >
                        {renderChildCategories(
                          category.categories[index].children
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
        <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          {isSingVisible? (<>
  <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sign in</h1>
  <input
    type="email"
    placeholder="Enter your email"
    style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
    onChange={(e) => setemail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Enter your password"
    style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
    onChange={(e) => setpassword(e.target.value)}
  />
  <button
    style={{
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '0.5rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
    onClick={Login}
  >
    Login
  </button>
  <p style={{ marginTop: '1rem' }}>If you dont have an account, create one:</p>
  <button
    style={{
      backgroundColor: '#008CBA',
      color: 'white',
      padding: '0.5rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
    onClick={() => setIsSingupVisible(false)}
  >
    Sign up
  </button>
</> ):(
          <>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2C3E50' }}>Sign up</h1>
          <input
            type="text"
            placeholder="Enter your First name"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              width: '100%',
              border: '1px solid #3498db',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Lastname"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              width: '100%',
              border: '1px solid #3498db',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            onChange={(e) => setlastname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              width: '100%',
              border: '1px solid #3498db',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            onChange={(e) => setemailsignup(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              width: '100%',
              border: '1px solid #3498db',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            onChange={(e) => setpasswordsignup(e.target.value)}
          />
          <button
            style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              padding: '0.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={Signup}
          >
            Sign up
          </button>
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '0.5rem',
              border: 'none',
              borderRadius: '4px',
                    cursor: 'pointer',
                    marginLeft: '1rem'
            }}
            onClick={() => setIsSingupVisible(true)}
          >
            Login
          </button>
        </>)
            
         }
          </Modal>
      </div>
    </>
  );
};

export default Navbar;
