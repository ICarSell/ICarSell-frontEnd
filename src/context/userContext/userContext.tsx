import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  iLoginData,
  iUserContext,
  iUserContextProps,
  tPasswordUpdateReq,
} from "./types";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  tUserReq,
  tUserReturnWithoutPass,
} from "../../pages/registerPage/type";

import { commentsData } from "../../schemas/comments";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [announcement, setAnnouncement] = useState(null);
  const [announcementId, setAnnouncementId] = useState("");
  const navigate = useNavigate();
  const [unauthorized, setUnauthorized] = useState("");
  const [passwordToken, setPasswordToken] = useState<undefined | string>();
  const [announcementUser, setAnnouncementUser] = useState();
  const [announcementUserId, setAnnouncementUserId] = useState("");
  const [loadinSpin, setLoadingSpin] = useState(false);

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("@USERID");
      if (userId) {
        try {
          setLoading(true);
          const { data } = await api.get(`/user/${JSON.parse(userId!)}`);
          setUser(data);
        } catch (err) {
          const currentError = err as AxiosError;
          console.log(currentError.message);
        } finally {
          setLoading(false);
        }
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    const idCar = localStorage.getItem("@CARID");
    if (idCar) {
      const getAnnouncement = async () => {
        try {
          const response = await api.get(`/announcement/${idCar}`);
          setAnnouncement(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAnnouncement();
    }
  }, [announcementId, setAnnouncement]);

  const submitLogin = async (formData: iLoginData) => {
    setLoadingSpin(true);
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
      setLoadingSpin(false);
      const currentError = error as AxiosError;

      if (currentError.message === "Request failed with status code 401") {
        setUnauthorized("Usuário ou senha inválido");
      }

      if (currentError.message === "Network Error") {
        toast.error("Network Error");
      }
    } finally {
      setLoadingSpin(false);
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
      toast.success("Conta Criada!");
      return data;
    } catch (err: any) {
      if (err.response?.data.message === "Email already exists") {
        toast.error("Email ja Cadastrado");
      }
      if (err.response?.data.message === "CPF already exists") {
        toast.error("CPF ja Cadastrado");
      }
    }
  }

  async function getUser() {
    const userId = localStorage.getItem("@USERID");
    if (userId) {
      try {
        setLoading(true);
        const { data } = await api.get(`/user/${JSON.parse(userId!)}`);
        setUser(data);
      } catch (err) {
        const currentError = err as AxiosError;
        console.log(currentError.message);
      } finally {
        setLoading(false);
      }
    }
  }

  const postAnnouncement = async (formData: any) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/announcement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });

      toast.success("Anúncio criado com sucesso!");
      getUser();
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar anúncio");
    }
  };

  const updateAnnouncement = async (formData: any, idCar: string) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      let headers: any = {
        Authorization: `Bearer ${JSON.parse(token!)}`,
      };

      if (formData.get("imgCover") || formData.get("gallery")) {
        headers = {
          ...headers,
          "Content-Type": "multipart/form-data",
        };
      }
      const response = await api.patch(`/announcement/${idCar}`, formData, {
        headers,
      });

      getUser();
      toast.success("Anúncio editado com sucesso!");
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao editar anúncio");
    }
  };

  const recoverPassword = async (formData: tPasswordUpdateReq) => {
    try {
      const response = await api.patch(
        `/reset-password/${passwordToken}`,
        formData
      );
      toast.success("Senha alterada com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 2000);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("@ANNUSERID");
    if (userId) {
      const viewPage = async () => {
        try {
          setLoading(true);
          const { data } = await api.get(`/user/${JSON.parse(userId!)}`);
          setAnnouncementUser(data);
        } catch (err) {
          const currentError = err as AxiosError;
          console.log(currentError.message);
        } finally {
          setLoading(false);
        }
      };
      viewPage();
    }
  }, [setAnnouncementUser, announcementUserId]);

  const getAnnouncement = async () => {
    const idCar = localStorage.getItem("@CARID");
    try {
      const response = await api.get(`/announcement/${idCar}`);
      setAnnouncement(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postComments = async (data: commentsData, idCar: string) => {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post(`/comments/${idCar}`, data);

      toast.success("Comentario adicionado com sucesso");
      getAnnouncement();
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Erro ao adicionar um comentario");
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
        setUser,
        setAnnouncementId,
        announcementId,
        announcement,
        loading,
        getUser,
        updateAnnouncement,
        recoverPassword,
        setPasswordToken,
        passwordToken,
        announcementUser,
        setAnnouncementUser,
        announcementUserId,
        setAnnouncementUserId,
        postComments,
        getAnnouncement,
        loadinSpin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
