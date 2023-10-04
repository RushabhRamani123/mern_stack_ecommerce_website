import '../index.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div style={{ alignItems: 'center', display: 'flex', zIndex: '1', justifyContent: 'space-between', backgroundColor: '#E3E6F3', color: 'white', padding: '10px' }}>
        <div className='text-[25px]' style={{ display: 'flex' }}>
          <h1 style={{ color: 'black' }}>AdminDashboard</h1>
        </div>
        <div className="rounded-md " style={{ display: 'flex', gap: '20px' }}>
          <Link to="/signin" className="text-black hover:text-blue-500 font-bold py-2 px-4">Sign In</Link>
          <Link to="/signup" className="bg-blue-500 shadow-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;