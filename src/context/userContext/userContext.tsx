import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("@USERID");

      if (userId && user === null) {
        try {
          const { data } = await api.get<tUserReturnWithoutPass>(
            `/user/${JSON.parse(userId!)}`
          );

          setUser(data);
        } catch (err) {
          const currentError = err as AxiosError;
          console.log(currentError.message);
        }
      }
    }
    getUser();
  }, [user]);
  const submitLogin = async (formData: iLoginData) => {
    try {
      const { data } = await api.post("/login", formData);

      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
      localStorage.setItem("@USERID", JSON.stringify(data.userId));
      toast.success("Entrando...");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
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
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
