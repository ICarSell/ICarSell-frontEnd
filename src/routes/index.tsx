import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
import { PerfilPage } from "../pages/perfilPage";
// Adicionar rota personalizada no path "perfil-page"
import { Register } from "../pages/registerPage";
import { ChangePassword } from "../pages/changePassword";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/perfil-page" element={<PerfilPage />} />
      <Route path="/reset-password/:token" element={<ChangePassword />} />
    </Routes>
  );
};