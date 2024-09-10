// import { useDispatch,useSelector } from "react-redux";
// import { login } from "../../actions/auth";
// import { useState } from "react";
const SignIn = () => {
//   const [email, setemail] = useState(false);
//   const [password, setpassword] = useState(false);
//   const dispatch = useDispatch();
// const auth = useSelector((state) => state.auth);
// const Login = () => {
//    const user = {
//      email: email,
//      password: password
//     }
//     dispatch(login(user));
//     if (auth.authenticate) {
//     //   you have conform the login form 
//     }
//     // close the modal 
//   }
  return (
    <>
  <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sign in</h1>
  <input
    type="email"
    placeholder="Enter your email"
    style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
    // onChange={(e) => setemail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Enter your password"
    style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
    // onChange={(e) => setpassword(e.target.value)}
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
    // onClick={Login}
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
    // onClick={() => {
    //     // setIsSingupVisible(false)
    //     // you have to close the signup 
    //     }}
  >
    Sign up
  </button>
</>
  )
}

export default SignIn