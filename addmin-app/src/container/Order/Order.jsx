import { Collapse, Row, Col } from 'antd';
import { useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getCustomerOrders ,updateOrder } from '../../actions/order'
import { Steps } from 'antd';
import './Order.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaBox, FaShippingFast } from 'react-icons/fa';
import { BsFillCartCheckFill } from "react-icons/bs";
import {useState} from 'react'
const { Panel } = Collapse;
const Order = () => {
  const handlelclick = () => {
     dispatch(updateOrder({orderId:orderId, type:type}))
  }
  const [ orderId, setId] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
 },[orders])
  useEffect(() => {
    dispatch(getCustomerOrders())
  },[])
  return (
    <>
      <div style={{ width: '100%' , padding: '2rem' , backgroundColor: 'white', borderRadius: '10px' }}>
      <Row style={{ marginBottom: '10px', fontWeight: 'bold' , color: 'green' }}>
    <Col span={5}>Customer Id</Col>
    <Col span={5}>Total</Col>
    <Col span={5}>Payment Type</Col>
    <Col span={6}>Payment Status</Col>
    <Col span={3}>Date</Col>
  </Row>
  <Row>
  {Object.keys(orders).map((key) => {
    return (
      <>
          <Col span={24} key={key} style={{ marginBottom: '16px' }}>
      <Collapse>
            <Panel
           style={{  borderRadius: '8px', overflow: 'hidden' }}
          key={4}
          showArrow={false}
          header={(
            <Row style={{ padding: '12px 16px', backgroundColor: '#fafafa'  }}>
              <Col span={5} style={{ color: '#001529' }}> {orders[key]._id} </Col>
              <Col span={5} style={{ color: '#001529' }}>₹{orders[key].totalAmount}</Col>
              <Col span={5} style={{ color: '#001529' }}>{orders[key].paymentType}</Col>
              <Col span={6} style={{ color: '#001529' }}>{orders[key].paymentStatus}</Col>
              <Col span={3} style={{ color: '#001529' }}>{(orders[key].createdAt).slice(0, 10)}</Col>
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
  status: orders[key].orderStatus[1].isCompleted === true ? 'finish' : 'wait',
  icon: <BsFillCartCheckFill style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Packed',
  status: orders[key].orderStatus[2].isCompleted === true ? 'finish' : 'wait',
  icon: <FaBox style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Shipped',
  status: orders[key].orderStatus[3].isCompleted === true ? 'finish' : 'wait',
  icon: <FaShippingFast style={{ fontSize: '2rem', color: '#088178' }} />,
},
{
  title: 'Delivered',
 status: orders[key].orderStatus[3].isCompleted === true ? 'finish' : 'wait',
  icon: <FaCheckCircle style={{ color: '#088178' , fontSize: '2rem' }}/> ,
},
]}
                      />
                      <select onChange={(e) => {
                        setId(orders[key]._id)
                        setType(e.target.value)
                      }}>
  <option value="processing">Select status</option>
  <option
    value="packed"
    style={{ display: orders[key].orderStatus[1].isCompleted ? 'none' : null }}
  >
    Packed
  </option>
  <option
    value="shipped"
    style={{ display: orders[key].orderStatus[2].isCompleted ? 'none' : null }}
  >
    Shipped
  </option>
  <option
    value="delivered"
    style={{ display: orders[key].orderStatus[3].isCompleted ? 'none' : null }}
  >
    Delivered
  </option>
</select>

                      
                      <button style={{
                        border: 'none',
                        padding: '10px', marginTop: '10px', backgroundColor: '#088178', color: 'white'
                        , borderRadius: '10px'
                      }}
                        onClick={handlelclick}>Update</button>
                      </div>
     </div>
    </div>
    </div>
        </Panel>
      </Collapse>
    </Col>
      </>
    );
  })}
  </Row>
  
    </div>
</>
  );
};
export default Order;

// 