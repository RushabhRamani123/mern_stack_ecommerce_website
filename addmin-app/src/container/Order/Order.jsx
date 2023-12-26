import { Collapse, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getCustomerOrders ,updateOrder } from '../../actions/order'
import { Steps } from 'antd';
import './Order.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaBox, FaShippingFast } from 'react-icons/fa';
import { BsFillCartCheckFill } from "react-icons/bs";
const { Panel } = Collapse;
const Order = () => {
  const handleStatusChange = (event) => {
    const type = event.target.value;
    const orderId = "658ad2fe55982cb9ea5dee42";
    // dispatch(updateOrder({ orderId, type }));
    // dispatch({
    //   orderId: orderId,
    //   type: selectedStatus,
    // });
  };
  const items = [
    {
      ordered : true,
    },
    {
      packed : true,
    },
    {
      shipped : true,
    },
    {
      delivered : false,
    }
  ]
  console.log(items)
  const filteredItems = items.filter(item => Object.values(item)[0] === false);

  const [type , setType] = useState('');
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  useEffect(() => {
   console.log("This order.jsx" +JSON.stringify(orders))
 },[orders])
  useEffect(() => {
    dispatch(getCustomerOrders())
  },[])
  return (
    <>
      <div style={{ width: '100%' , padding: '2rem' , backgroundColor: 'white', borderRadius: '10px' }}>
      <Row style={{ marginBottom: '10px', fontWeight: 'bold' }}>
    <Col span={5}>Customer Id</Col>
    <Col span={5}>Total</Col>
    <Col span={5}>Payment Type</Col>
    <Col span={6}>Payment Status</Col>
    <Col span={3}>Date</Col>
  </Row>
  <Row>
    <Col span={24}>
      <Collapse>
        <Panel
          key={4}
          showArrow={false}
          header={(
            <Row>
              <Col span={5}>9855</Col>
              <Col span={5}>₹32432</Col>
              <Col span={5}>Cash On Delivery</Col>
              <Col span={6}>Pending</Col>
              <Col span={3}>12/12/2021</Col>
            </Row>
          )}
        >
          <div >
      <div>
      <div style={{ display: 'flex' , flexDirection: 'column' }}>
      <div>

</div>
<div style={{ alignItems: 'center' , width: '100%' ,padding: '2rem'}}>
<Steps
  style={{ margin: '20px 0' , color: 'green'}}
items={[
{
  title: 'Ordered',
  status: items[1].packed=== true ? 'finish' : 'wait',
  icon: <BsFillCartCheckFill style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Packed',
  status: items[2].shipped === true ? 'finish' : 'wait',
  icon: <FaBox style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Shipped',
  status: items[3].delivered === true ? 'finish' : 'wait',
  icon: <FaShippingFast style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Delivered',
 status: items[3].delivered === true ? 'finish' : 'wait',
  icon: <FaCheckCircle style={{ color: '#088178' , fontSize: '2rem' }}/> ,
},
]}
 />   <select onChange={handleStatusChange}>
 {filteredItems.map((item, index) => (
   <option key={index} value={Object.keys(item)[0]}>
     {Object.keys(item)[0]}
   </option>
 ))}
</select>                 
</div>
     </div>
    </div>
    </div>
        </Panel>
      </Collapse>
    </Col>
  </Row>
    </div>
</>
  );
};
export default Order;

