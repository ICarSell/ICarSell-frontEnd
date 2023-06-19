import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  tUserReq,
  tUserReturnWithoutPass,
} from "../../pages/registerPage/type";

export interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserContext {
  navigate: NavigateFunction;
  submitLogin: (formData: iLoginData) => void;
  unauthorized: string;
  setUnauthorized: React.Dispatch<SetStateAction<string>>;
  register: (registerItem: tUserReq) => void;
  postAnnouncement: (formData: any) => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setAnnouncementId: React.Dispatch<SetStateAction<string>>;
  announcementId: string;
  announcement: any;
  loading: boolean;
  getUser: () => void;
  updateAnnouncement: (formData: any, idCar: string) => void;
}

export interface iLoginData {
  email: string;
  password: string;
}
