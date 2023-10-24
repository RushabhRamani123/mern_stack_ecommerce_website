import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import { GoHome } from 'react-icons/go'
import {FaProductHunt} from 'react-icons/fa';
import { SiPowerpages } from 'react-icons/si';
import { TbCategory } from 'react-icons/tb';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Categroy from '../Category/Categroy';
import Product from '../Product/Product';
import Order from '../Order/Order';
const { Header, Content,  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '/', <GoHome style={{ fontSize: '20px' }}/>),
  getItem('Page', '/page', <SiPowerpages style={{ fontSize: '20px' }}/>),
  getItem('Category', '/category', <TbCategory style={{ fontSize: '20px' }}/>),
  getItem('Products', '/product', <FaProductHunt style={{ fontSize: '20px' }}/>),
  getItem('Orders', '/order', <BsFillCartCheckFill style={{ fontSize: '20px' }} />),
  getItem('SignOut', '/signout', <AiOutlinePoweroff style={{ fontSize: '20px' , color: '#f7020f' }} />),
  
];

const App = () => {
 
  const auth = useSelector((state) => state.auth);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCollapse = (value) => {
    setCollapsed(value);
  };
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    if(route === '/signout'){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      auth.authenticate = false;
      return (window.location.href = '/signin');
    }
    if(!localStorage.getItem('token')) {
      window.location.href = '/signin';
    }
    navigate(route);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
       <Layout style={{ minHeight: '80vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" items={items} onClick={(e) => handleNavigate(e.key)} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0' }}>
          <div style={{ padding: 24, minHeight: 720, background: colorBgContainer }}>
            <Routes>
              <Route path="/*" element={<div>Toms Profile</div>} />
              <Route path="/page" element={<div>Bills Profile</div>} />
              <Route path="/category" element={<div><Categroy /></div>} />
              <Route path="/product" element={<div><Product /></div>} />
              <Route path="/order" element={<div><Order /></div>} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
   </motion.div>
  );
};

export default App;