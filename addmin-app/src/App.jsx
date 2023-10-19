import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './container/HOC/privateRoute'; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { isuserLoggedIn } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate) {
      dispatch(isuserLoggedIn());
    }
  },[]);
  return (
    <>
      <Routes>
      <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<PrivateRoute />}/>
          <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
    