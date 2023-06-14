import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
<<<<<<< HEAD
import { PerfilPage } from "../pages/perfilPage";

// Adicionar rota personalizada no path "perfil-page"
=======
import { Register } from "../pages/registerPage";
>>>>>>> 61735c374db616e2b6f83ead2d7a42dfecbefacf

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/perfil-page" element={<PerfilPage />} />
    </Routes>
  );
};
