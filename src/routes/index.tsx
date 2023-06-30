import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
import { PerfilPage } from "../pages/perfilPage";
import { Register } from "../pages/registerPage";
import { ChangePassword } from "../pages/changePassword";
import { ViewUserPage } from "../pages/viewUserPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/perfil-page" element={<PerfilPage />} />
      <Route path="/page-user" element={<ViewUserPage />} />
      <Route path="/reset-password/:token" element={<ChangePassword />} />
      <Route
        path="/*"
        element={
          <>
            <h1>Página não encontrada</h1>
            {/* Aqui você pode adicionar o conteúdo e o design da sua página 404 */}
          </>
        }
      />
    </Routes>
  );
};
