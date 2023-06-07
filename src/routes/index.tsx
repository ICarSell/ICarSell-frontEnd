import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Homepage";
import {ProductPage}  from  "../pages/productPage"


export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="productPage" element={<ProductPage />} />
    </Routes>
  );
};
