// import { signup } from "../../actions/user";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal } from "antd";
const Signup = () => {
  // const [name, setname] = useState(false);
  // const [firstname, setfirstname] = useState('');
  // const [lastname, setlastname] = useState('');
  // const [emailsignup, setemailsignup] = useState('');
  // const [passwordsignup, setpasswordsignup] = useState('');
  // cosnt dispatch = useDispatch(); 
  // const Signup = () => {
  //   const user = {
  //     firstName: firstname,
  //     lastName: lastname,
  //     email: emailsignup,
  //     password: passwordsignup
  //   }
  //   console.log(user);
  //   dispatch(signup(user));
  // }
  return (
    <div>
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
            // onChange={(e) => setfirstname(e.target.value)}
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
            // onChange={(e) => setlastname(e.target.value)}
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
            // onChange={(e) => setemailsignup(e.target.value)}
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
            // onChange={(e) => setpasswordsignup(e.target.value)}
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
            // onClick={Signup}
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
            // onClick={() => setIsSingupVisible(true)}
          >
            Login
          </button>
        </>
    </div>
  )
}

export default Signup