import '../../index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div style={{ alignItems: 'center', display: 'flex', zIndex: '1', justifyContent: 'space-between', backgroundColor: '#001529', color: 'white', padding: '10px' }}>
        <div className='text-[25px]' style={{ display: 'flex' }}>
          <h1><span style={{ color: '#36ff57' }}>EVARA</span>DASHABOARD</h1>
        </div>
        <div className="rounded-md " style={{ display: 'flex', gap: '20px' }}>
          {!auth.authenticate ?(
            <>
              <Link to="/signin" className="text-white hover:text-blue-500 font-bold py-2 px-4">Sign In</Link>
              <Link to="/signup" className=" shadow-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" style={{ backgroundColor: '#36ff57'}}>Sign Up</Link>
            </>
          ) : (<>
             
          </>)}
        </div>
      </div>
    </>
  );
}

export default Navbar;