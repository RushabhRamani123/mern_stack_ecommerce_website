import { motion } from 'framer-motion';
import { login } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router';
import Navbar from './Navbar';
// import { useEffect } from 'react';

function SignIn() {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123456");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: { opacity: 0, x: +20 },
    visible: { opacity: 1, x: 0 },
  };
  
  const userLogin = (e) => {
    e.preventDefault();
    alert("You have successfully logged in")
    const user = {
      email: email,
      password: password ,
    }
    dispatch(login(user));
  }
  if (auth.authenticate) {
    return <Navigate to="/" replace />;
  }
  // 
  return (

    <>
    <Navbar />
     <div className='container mt-11 d-flex justify-content-center align-items-center vh-200' style={{ height: "50vh", width: "30%" }}>
         <motion.form className="signup-form"
           initial='hidden'
           animate='visible'
           variants={containerVariants}
           transition={{ duration: 0.5 }}>
       <h1 className="signup-heading text-[30px]">Sign In</h1>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
       </div>
       <button type="submit" onClick={userLogin} className="btn-primary">Sign Up</button>
     </motion.form>
   </div>
  </>
  )
}

export default SignIn