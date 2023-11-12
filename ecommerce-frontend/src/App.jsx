import Homepage from "./components/Homepage/Homepage";
import {Routes , Route} from "react-router-dom";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<ProductsListPage />} />
     </Routes>
   
    </>
  );
}

export default App;
