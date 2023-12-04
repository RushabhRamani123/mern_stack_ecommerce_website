import './SignUp.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { signup } from '../../actions/user';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {  Navigate } from 'react-router-dom';
function SignUp() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123456");
  const [firstName, setFirstName] = useState("a");
  const [lastName, setLastName] = useState("a");
  const dispatch = useDispatch();
  const containerVariants = {hidden:{ opacity: 0, x: -20 },visible: { opacity: 1, x: 0 },};
  const userSignUp = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }
    dispatch(signup(user));
  }
  
  if (user.message !== null) {
    return (<Navigate to="/sigin" replace /> && window.location.reload());
  }
  return (
    <>
     <div className='mt-11' >
      <div className='container d-flex justify-content-center align-items-center vh-100' style={{ height: "75vh", width: "30%" }}>
        <motion.form className="signup-form"
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        transition={{ duration: 0.5 }}>
        <h1 className="signup-heading text-[30px]">Sign Up</h1>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        </div>
        <button type="submit" onClick={userSignUp} className="btn-primary">Sign Up</button>
      </motion.form>
    </div>
      </div>
    </>
  );
}

export default SignUp;