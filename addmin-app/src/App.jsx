import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Homepage />} />
         <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} /> 
      </Routes>
    </>
  );
}

export default App;