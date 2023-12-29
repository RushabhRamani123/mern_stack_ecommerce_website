import Homepage from "./components/Homepage/Homepage";
import { Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ProductDetailsPage from "./components/ProducDetailspage/ProductDetailspage";
import  AddtoCart  from "./components/Addtocart/AddtoCart";
import {useDispatch} from 'react-redux';
import { updateCart } from "./actions/cart"
import Checkout from './components/Checkout/Checkout';
import Succ from './components/Successfullorder/index'; 
import {useSelector} from 'react-redux';
import OrderList from './components/Order/OrderList';
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(updateCart());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/addtoCart" element={<AddtoCart />} />
        <Route path="/product/:productId/productDetails" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/:slug" element={<ProductsListPage />} />
        <Route path="/success" element={<Succ />} />
        <Route path="/order" element={<OrderList />} />
     </Routes>
   
    </>
  );
}

export default App;
