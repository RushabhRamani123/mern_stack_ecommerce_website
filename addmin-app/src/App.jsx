import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './container/HOC/privateRoute'; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<PrivateRoute />}/>
          <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
    