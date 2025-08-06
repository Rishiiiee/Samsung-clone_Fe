import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Productpage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import MobilePage from "./pages/MobilesPage";
import LoginPage from "./pages/LoginPage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/tv" element={<MobilePage />} />
        <Route path="/appliances" element={<MobilePage />} />
        <Route path="/display" element={<MobilePage />} />
        <Route path="/accessories" element={<MobilePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
