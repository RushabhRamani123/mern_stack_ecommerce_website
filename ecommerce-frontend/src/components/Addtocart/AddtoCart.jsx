import Navbar from "../Navbar/Navbar"
import product from '../../assets/product-2-1.jpg'
const AddtoCart = () => {
  return (
      <div>
          <Navbar />
          <hr style={{ marginTop: '5rem' , marginLeft: '5rem',marginRight: '5rem', border:'none' , height: '3px', backgroundColor: '#eee'}} />
          <div style={{ display: 'flex', flexDirection: 'row' , marginLeft: '5rem' , marginTop: '0rem' , marginBottom: '0rem' , justifyContent: 'space-around' }}>
            <p >Image</p>
            <p  >Name</p>
            <p >Price</p>
            <p  >Quantity</p>
            <p  >Subtotal</p>
            <p  >Remove</p>          
          </div> 
          <hr style={{ marginLeft: '5rem', marginRight: '5rem', border: 'none', height: '3px', backgroundColor: '#eee' }} />
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5rem', marginTop: '0rem', marginBottom: '0rem' }}>
            <img src={product} style={{height:'100px', weight:'100px', marginLeft:'4rem', marginRight:'6rem'}} />
            <p style={{color:'green' , fontWeight:'bold', marginTop:'2.75rem',marginRight:'8rem' }}>J.Crew Mercantile -Sleeve</p>
        <p style={{ color: 'green', fontWeight: 'bold', marginTop: '2.75rem' }}>$2533</p>
        <input type="number" style={{ marginTop: '2rem', marginLeft: '11rem' , height: '40px' , width: '40px'}} value={1}></input>
          </div>
          <hr style={{ marginLeft: '5rem', marginRight: '5rem', border: 'none', height: '3px', backgroundColor: '#eee' }} />
      </div>
  )
}

export default AddtoCart;
/*style={{ marginTop: '0rem' 
style={{ margin : '0rem 12rem' }}
style={{  marginTop: '0rem' 
style={{ margin : '0rem 5rem' }}
style={{ margin : '0rem 2rem' }},
style={{   margin : '0rem 2rem' }} */