import './SignUp.css';
import { motion } from 'framer-motion';
function SignUp() {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className='mt-11' >
      <div className='container d-flex justify-content-center align-items-center vh-100'>
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
  );
}

export default SignUp;