import { useState, createContext, useContext } from "react";
import { iModalProps, iModalProviderProps, tUserUpdateReq } from "./types";
import { tUserReturnWithoutPass } from "../../pages/registerPage/type";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";

export const ModalContext = createContext({} as iModalProps);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const { getUser, user } = useContext(UserContext);
  const [openModalUpdateAddress, setOpenModalUpdateAddress] = useState(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);

  const updateUser = async (updateData: tUserUpdateReq) => {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    if (user.email === updateData.email && user.cpf === updateData.cpf) {
      const { cpf: _, email: __, ...userRequest } = updateData;
      const { dateOfBirth: date, ...userUpdated } = userRequest;
      const dateOfBirth = Number(date);
      const newUserData = { dateOfBirth, ...userUpdated };
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.patch<tUserReturnWithoutPass>(
          "/user",
          newUserData
        );
        console.log(data);
        getUser();
        setOpenModalUpdateUser(false);
        // toast.success("Conta Criada!");
        return;
      } catch (err: any) {
        if (err.response?.data.message === "Email already exists") {
          console.log("Email ja Cadastrado");
          return;
        }
        if (err.response?.data.message === "CPF already exists") {
          console.log("CPF ja Cadastrado");
          return;
        }
      }
    }
    if (user.email === updateData.email) {
      const { email: _, ...userRequest } = updateData;
      const { dateOfBirth: date, ...userUpdated } = userRequest;
      const dateOfBirth = Number(date);
      const newUserData = { dateOfBirth, ...userUpdated };
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.patch<tUserReturnWithoutPass>(
          "/user",
          newUserData
        );
        console.log(data);
        getUser();
        setOpenModalUpdateUser(false);
        // toast.success("Conta Criada!");
        return;
      } catch (err: any) {
        if (err.response?.data.message === "Email already exists") {
          console.log("Email ja Cadastrado");
          return;
        }
        if (err.response?.data.message === "CPF already exists") {
          console.log("CPF ja Cadastrado");
          return;
        }
      }
    }
    if (user.cpf === updateData.cpf) {
      const { cpf: _, ...userRequest } = updateData;
      const { dateOfBirth: date, ...userUpdated } = userRequest;
      const dateOfBirth = Number(date);
      const newUserData = { dateOfBirth, ...userUpdated };
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.patch<tUserReturnWithoutPass>(
          "/user",
          newUserData
        );
        console.log(data);
        getUser();
        setOpenModalUpdateUser(false);
        // toast.success("Conta Criada!");
        return;
      } catch (err: any) {
        if (err.response?.data.message === "Email already exists") {
          console.log("Email ja Cadastrado");
          return;
        }
        if (err.response?.data.message === "CPF already exists") {
          console.log("CPF ja Cadastrado");
          return;
        }
      }
    }
    const { dateOfBirth: date, ...userRequest } = updateData;
    const dateOfBirth = Number(date);
    const newUserData = { dateOfBirth, ...userRequest };
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.patch<tUserReturnWithoutPass>(
        "/user",
        newUserData
      );
      getUser();
      setOpenModalUpdateUser(false);
    } catch (err: any) {
      console.log(err.response?.data.message);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModalUpdateAddress,
        setOpenModalUpdateAddress,
        openModalUpdateUser,
        setOpenModalUpdateUser,
        updateUser,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
