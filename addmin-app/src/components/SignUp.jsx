import './SignUp.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Navbar from './Navbar';
function SignUp() {

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const auth = useSelector((state) => state.auth);
  if(!auth.authenticate) {
    <Navigate to="/" replace />
  }
  return (
    <>
     <Navbar />
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
          <input type="text" id="firstname" placeholder="Enter your first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" placeholder="Enter your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn-primary">Sign Up</button>
      </motion.form>
    </div>
      </div>
    </>
  );
}

export default SignUp;