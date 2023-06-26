import { useState, createContext, useContext } from "react";
import {
  iModalProps,
  iModalProviderProps,
  tAddressUpdateReq,
  tRecoverPassReq,
  tUserUpdateReq,
} from "./types";
import { tUserReturnWithoutPass } from "../../pages/registerPage/type";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";
import { toast } from "react-toastify";

export const ModalContext = createContext({} as iModalProps);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const { getUser, user } = useContext(UserContext);
  const [openModalUpdateAddress, setOpenModalUpdateAddress] = useState(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);
  const [openModalResetPass, setOpenModalResetPass] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [openModelDeleteUser, setOpenModelDeleteUser] = useState(false);
  const [loadingOn, setLoadingOn] = useState(false);
  const [openModalUpdateComment, setOpenModalUpdateComment] = useState(false);

  const updateUser = async (updateData: tUserUpdateReq) => {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
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
        toast.success("Conta Atualiza!");
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
      toast.success("Conta Atualiza!");
    } catch (err: any) {
      console.log(err.response?.data.message);
    }
  };

  const updateAddress = async (formData: tAddressUpdateReq) => {
    console.log(formData);
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      await api.patch(`/address/${user.address.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getUser();
      setOpenModalUpdateAddress(false);
      toast.success("Endereço atualizado");
    } catch (error) {
      console.log(error);
    }
  };

  const recoverPass = async (emailData: tRecoverPassReq) => {
    setLoadingOn(true);
    try {
      const { data } = await api.patch(`/forgot-password`, emailData);
      toast.success(data.message);
      setEmailSend(true);
      setLoadingOn(false);
    } catch (error: any) {
      toast.error(error.response?.data.message);
      setLoadingOn(false);
      setEmailSend(false);
    } finally {
      setLoadingOn(false);
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
        updateAddress,
        openModalResetPass,
        setOpenModalResetPass,
        emailSend,
        recoverPass,
        openModelDeleteUser,
        setOpenModelDeleteUser,
        loadingOn,
        setLoadingOn,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
