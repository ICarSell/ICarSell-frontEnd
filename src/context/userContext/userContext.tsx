import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginData, iUserContext, iUserContextProps } from "./types";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  tUserReq,
  tUserReturnWithoutPass,
} from "../../pages/registerPage/type";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<tUserReturnWithoutPass | null>(null);
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

  async function register(registerData: tUserReq) {
    const {
      passwordConfirm: _,
      dateOfBirth: date,
      ...userRequest
    } = registerData;
    const dateOfBirth = Number(date);
    const newUserData = { dateOfBirth, ...userRequest };
    try {
      const { data } = await api.post<tUserReturnWithoutPass>(
        "/user",
        newUserData
      );

      setUser(null);
      navigate("/login");
      console.log("Conta Criada!", data);
    } catch (err) {
      const currentError = err as AxiosError;
      console.log(currentError.message);
    }
  }

  const postAnnouncement = async (formData: any) => {
    try {
      const response = await api.post(`/announcement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        submitLogin,
        unauthorized,
        setUnauthorized,
        register,
        postAnnouncement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
