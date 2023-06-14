import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
import { Register } from "../pages/registerPage";

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};
