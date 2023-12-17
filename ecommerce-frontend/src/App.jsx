import Homepage from "./components/Homepage/Homepage";
import {Routes , Route} from "react-router-dom";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ProductDetailsPage from "./components/ProducDetailspage/ProductDetailspage";
import AddtoCart from "./components/AddToCart/AddtoCart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<ProductsListPage />} />
        <Route path="/product/:productId/productDetails" element={<ProductDetailsPage />}
        />
        <Route path="/product/addtoCart" element={<AddtoCart />} />
     </Routes>
   
    </>
  );
}

export default App;
