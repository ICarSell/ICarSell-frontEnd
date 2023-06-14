import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iUserContext, iUserContextProps } from "./types";
import {
  tUserReq,
  tUserReturnWithoutPass,
} from "../../pages/registerPage/type";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<tUserReturnWithoutPass | null>(null);
  const navigate = useNavigate();

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
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  }

  return (
    <UserContext.Provider value={{ navigate, register }}>
      {children}
    </UserContext.Provider>
  );
};
