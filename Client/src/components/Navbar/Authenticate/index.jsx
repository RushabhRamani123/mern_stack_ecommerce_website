import SignIn from "./SignIn";
import Signup from "./Signup";
// import {SmileOutlined} fro 
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Modal} from 'antd';
const Authentication = () => {
  // const [isSingVisible, setIsSingupVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  }
   const handleCancel = () => {
    setIsModalVisible(false);
  }
  const items = [
    {
      key: '2',
      label: (
        <Link target="_blank"  to="/order">
          Order History
        </Link>
      ),
      // icon: <SmileOutlined />,
    },
   
    {
      key: '4',
      danger: true,
      label: 'SignOut',
    },
  ];
  return (
    <div>
       
          <>
          {
          // loginconfirm
           (true)?(<div  onClick={() =>setIsModalVisible(true) }  style={{ paddingTop: "1.35rem", color: "green" }}>Login</div>):
          (
            <div style={{ fontSize: "1rem", color: "green" ,marginTop: "1rem" }}> <Dropdown  menu={{  items,  }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                    <button style={{ border: "none", background: "#088178", color: "white",padding: "0.5rem", borderRadius: "0.5rem",fontWeight: "500"}}>{auth.user.firstName}</button>
              </Space>
            </a>
          </Dropdown></div>)}
          </>
          <>
           <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>{ (true) ? (<SignIn />):(<Signup /> )}</Modal>
          </>
    </div>
  )
}

export default Authentication