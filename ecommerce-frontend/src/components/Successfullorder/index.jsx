import { Button, Result } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Succ = () => (

  <Result
    status="success"
    title="Order successfully placed! Thank you for choosing us."
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    onClick={() => {
      window.location.reload();
    }}
    extra={[
      <Link to="/"
        type="primary"
        key="console" 
        style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#108312', color: 'white' }}>
        Go Console
      </Link>,
      <Link to="/" key="buy" style={{ padding: '10px' , borderRadius: '10px' , backgroundColor: '#00593F' , color: 'white' }}>Buy Again</Link>,
    ]}
  />
);
export default Succ;