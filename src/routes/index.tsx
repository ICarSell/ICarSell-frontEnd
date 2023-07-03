import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Homepage";
import { ProductPage } from "../pages/productPage";
import { Login } from "../pages/loginPage";
import { PerfilPage } from "../pages/perfilPage";
import { Register } from "../pages/registerPage";
import { ChangePassword } from "../pages/changePassword";
import { ViewUserPage } from "../pages/viewUserPage";
import { ErrorPage } from "../components/errorPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/profile-page" element={<PerfilPage />} />
      <Route path="/page/:name" element={<ViewUserPage />} />
      <Route path="/reset-password/:token" element={<ChangePassword />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
