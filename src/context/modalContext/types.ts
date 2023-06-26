import React, { SetStateAction } from "react";
import {
  addressUpdateSchema,
  userUpdateSchema,
} from "../../schemas/registerSchemas";
import { z } from "zod";
import { recoverPassSchema } from "../../schemas/loginSchema";

export interface iModalProps {
  openModalUpdateAddress: boolean;
  setOpenModalUpdateAddress: React.Dispatch<SetStateAction<boolean>>;
  openModalUpdateUser: boolean;
  setOpenModalUpdateUser: React.Dispatch<SetStateAction<boolean>>;
  updateUser: (updateData: tUserUpdateReq) => void;
  updateAddress: (updateData: tAddressUpdateReq) => void;
  openModalResetPass: boolean;
  setOpenModalResetPass: React.Dispatch<SetStateAction<boolean>>;
  emailSend: boolean;
  recoverPass: (email: tRecoverPassReq) => void;
  setOpenModelDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  openModelDeleteUser: boolean;
  loadingOn: boolean;
  setLoadingOn: React.Dispatch<React.SetStateAction<boolean>>;
  openModalUpdateComment: boolean;
  setOpenModalUpdateComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iModalProviderProps {
  children: React.ReactNode;
}

export type tRecoverPassReq = z.infer<typeof recoverPassSchema>;
export type tUserUpdateReq = z.infer<typeof userUpdateSchema>;
export type tAddressUpdateReq = z.infer<typeof addressUpdateSchema>;
