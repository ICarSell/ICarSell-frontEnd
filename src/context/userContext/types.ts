import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  tUserReq,
  tUserReturnWithoutPass,
} from "../../pages/registerPage/type";
import { changePasswordSchema } from "../../schemas/registerSchemas";
import { z } from "zod";

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
  recoverPassword: (FormData: tPasswordUpdateReq) => void;
  setPasswordToken: React.Dispatch<SetStateAction<string | undefined>>;
  passwordToken: string | undefined;
  announcementUser: any;
  setAnnouncementUser: React.Dispatch<React.SetStateAction<any>>;
  announcementUserId: string;
  setAnnouncementUserId: React.Dispatch<React.SetStateAction<string>>;
}

export interface iLoginData {
  email: string;
  password: string;
}

export type tPasswordUpdateReq = z.infer<typeof changePasswordSchema>;
