import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import SignIn from './container/Signin/SignIn';
import SignUp from './container/Signup/SignUp';
import { useEffect } from 'react';
import { isuserLoggedIn } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './component/HOC/PrivateRoute.jsx'
import Navbar from './container/Navbar/Navbar';
import { intialData } from './actions/intialData.js';
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate) {
      dispatch(isuserLoggedIn());
    }
  }, []);
  dispatch( intialData() );
  return (
    <>
      <Navbar/>
      {
        auth.authenticate ?( <>
          <PrivateRoute />
        </>) : <>
        <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
          </>
        
      }
      <div>
      </div>
    </>
  );
}
export default App;
    