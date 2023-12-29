import Navbar1 from "../Navbar/Navbar1";
import { getOrders } from "../../actions/order";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './Order.css'
import { Modal } from "antd"; 
import ScrollToTopButton from "../Herosection/ScrollToTopButton";
import '../Herosection/ScrollToTopButton.css';
const OrderList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [OrderId, setOrderId] = useState();
  const viewOrder = () => {
    setIsModalOpen(true);
  }
  const showModal = () => {
    
  }
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const orders = useSelector(state => state.order.orders);

  // alert(orders.length);
  useEffect(() => {
    Object.keys(orders).map((key,index) => {
      console.log(orders[key])
    })
  },[orders])
  return (
    <div>
      <Navbar1 data={["Order"]} />
      <div style={{ margin: "5rem" }}>
      <table className="orders-table">
  <thead>
    <tr>
      <th>Order</th>
      <th>OrderStatus</th>
      <th>Payment Status</th>
      <th>Payment Type</th>
      <th>Total</th>
     <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(orders).map((key, index) => (
      <tr key={orders[key]._id}>
        <td>{index + 1}</td>
        <td> {
        (() => {
          for (const key1 of Object.keys(orders[key].orderStatus)) {
            if (!orders[key].orderStatus[key1].isCompleted) {
              return <p key={key1}>{orders[key].orderStatus[key1].type}</p>;
            }
          }
          return null; // Return null if isCompleted is always true
        })()
      }</td>
        <td>{orders[key].paymentStatus}</td>
        <td>{orders[key].paymentType}</td>
        <td>₹{orders[key].totalAmount}</td>
        <td><button style={{cursor:"pointer" , padding:"0.5rem",borderRadius:"5px",border:"none",backgroundColor:"#088178",color:"white"}} onClick={() => { setOrderId(orders[key]._id); viewOrder(); }}>View</button></td>
      </tr>
    ))}
  </tbody>
</table>

     </div>
      <Modal title="Order Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {Object.keys(orders).map((key, index) => (
          <div key={index} style={{marginTop:"2rem"}}>
            {/* <img src={orders[key].items[0].productId.productPictures[0]} alt="" />   */}
            {Object.keys(orders[key].items).map((key1, index1) => (
              <div key={index1} style={{display:"flex",gap:"1.5rem",marginTop:"1rem"}}>
                <img src={orders[key].items[key1].productId.productPictures[0]} style={{width:"100px",height:"100px"}} alt="" />
                <div style={{display:"flex",flexDirection:"column"}}>
                <p>{orders[key].items[key1].productId.name}<strong style={{marginLeft:"1rem",color:"#088178"}}>X{orders[key].items[key1].purchasedQty}</strong></p> 
                <p style={{color:"#088178"}}>₹{orders[key].items[key1].payablePrice}</p>
               </div>
              </div>  
            ))
            }
          </div>
        ))
          
       }
      </Modal>
      <ScrollToTopButton />
    </div>
  )
}

export default OrderList
