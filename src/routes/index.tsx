import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
import { PerfilPage } from "../pages/perfilPage";

// Adicionar rota personalizada no path "perfil-page"

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/perfil-page" element={<PerfilPage />} />
    </Routes>
  );
};
