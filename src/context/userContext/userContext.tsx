import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginData, iUserContext, iUserContextProps } from "./types";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [unauthorized, setUnauthorized] = useState("");

  const submitLogin = async (formData: iLoginData) => {
    try {
      const response = await api.post("/login", formData);
      const { token } = response.data;

      localStorage.setItem("@TOKEN", JSON.stringify(token));
      toast.success("Entrando...");

      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (error) {
      const currentError = error as AxiosError;

      if (currentError.message === "Request failed with status code 401") {
        setUnauthorized("Usuário ou senha inválido");
      }

      if (currentError.message === "Network Error") {
        toast.error("Network Error");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{ navigate, submitLogin, unauthorized, setUnauthorized }}
    >
      {children}
    </UserContext.Provider>
  );
};
