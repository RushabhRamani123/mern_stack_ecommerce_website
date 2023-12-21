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
const Navbar = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
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
  console.log("This is the auth of the navbar:" + JSON.stringify(auth));
  console.log("This is the user of the navbar:" + JSON.stringify(user));
  // store the token in the localstorage
  // get the token from the auth and then store it in the localstorage
  // how to itterate through auth 
  auth.token && localStorage.setItem("token", auth.token);

  
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


  }
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
              {(window.location.href = "http://localhost:5174/signin");}
                
              }
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
            <div>
              <CgProfile
                style={{
                  fontSize: "2rem",
                  paddingTop: "0.75rem",
                  color: "grey",
                }}
              />
            </div>
          )}
          <div style={{ padding: "0.75rem", display: "flex", gap: "1em" }}>
            <AiOutlineHeart style={{ fontSize: "2rem" }} />
            <PiShoppingCartBold style={{ fontSize: "2rem" }} />
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
                style={{ fontSize: "1.5rem", color: "grey",cursor: "pointer"}}
              />
              <h3 style={{ fontSize: "1.5rem", margin: "0px" , cursor: "pointer" , color:"green"}}>
                Browse Categories
              </h3>
            </div>
            <div style={{ display: "flex", gap: "2rem", cursor: "pointer" }}>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Shop</h3>
              <h3>Contact</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <TfiHeadphoneAlt style={{ fontSize: "1.5rem", color: "grey" }} />
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <h3>Support</h3>
                <h3 style={{ color: "green" }}>1900-888</h3>
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
        <Modal title="Title" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          {isSingVisible? (<>
            <h1>Sign in</h1>
            <input type="email" placeholder="Enter your email" onChange={(e) =>setemail(e.target.value)}></input>
            <input type="password" placeholder="Enter your password" onChange={(e) =>setpassword(e.target.value)}></input>
            <button onClick={Login}>Login</button>
          <p>If you account is not there first create your account : </p>
          <button onClick={() =>setIsSingupVisible(false)}> Sign up</button></>
            
          ):(
              <>
                <h1>Sign up</h1>
                <input type="text" placeholder="Enter your First name" onChange={(e) =>setfirstname(e.target.value)}></input>
                <input type="text" placeholder="Enter your Lastname" onChange={(e) =>setlastname(e.target.value)}></input>
                <input type="email" placeholder="Enter your email" onChange={(e) =>setemailsignup(e.target.value)}></input>
                <input type="password" placeholder="Enter your password" onChange={(e) =>setpasswordsignup(e.target.value)}></input>
                <button onClick={Signup}>Sign up</button> 
                <button onClick={() => setIsSingupVisible(true)} >Login</button>
              </>
          )
            
         }
          </Modal>
      </div>
    </>
  );
};

export default Navbar;
