import React, { SetStateAction } from "react";
import {
  addressUpdateSchema,
  userUpdateSchema,
} from "../../schemas/registerSchemas";
import { z } from "zod";

export interface iModalProps {
  openModalUpdateAddress: boolean;
  setOpenModalUpdateAddress: React.Dispatch<SetStateAction<boolean>>;
  openModalUpdateUser: boolean;
  setOpenModalUpdateUser: React.Dispatch<SetStateAction<boolean>>;
  updateUser: (updateData: tUserUpdateReq) => void;
  updateAddress: (updateData: tAddressUpdateReq) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export interface iModalProviderProps {
  children: React.ReactNode;
}

export type tUserUpdateReq = z.infer<typeof userUpdateSchema>;
export type tAddressUpdateReq = z.infer<typeof addressUpdateSchema>;
