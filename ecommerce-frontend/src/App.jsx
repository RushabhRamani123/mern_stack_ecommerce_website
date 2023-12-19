import Homepage from "./components/Homepage/Homepage";
import { Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ProductDetailsPage from "./components/ProducDetailspage/ProductDetailspage";
import AddtoCart from "./components/AddToCart/AddtoCart";
import {useDispatch} from 'react-redux';
import {Update} from "./actions/cart"
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Update());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<ProductsListPage />} />
        <Route path="/product/addtoCart" element={<AddtoCart />} />
        <Route path="/product/:productId/productDetails" element={<ProductDetailsPage />}
        />
        
     </Routes>
   
    </>
  );
}

export default App;
