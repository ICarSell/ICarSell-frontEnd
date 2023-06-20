import React, { SetStateAction } from "react";
import { userUpdateSchema } from "../../schemas/registerSchemas";
import { z } from "zod";

export interface iModalProps {
  openModalUpdateAddress: boolean;
  setOpenModalUpdateAddress: React.Dispatch<SetStateAction<boolean>>;
  openModalUpdateUser: boolean;
  setOpenModalUpdateUser: React.Dispatch<SetStateAction<boolean>>;
  updateUser: (updateData: tUserUpdateReq) => void;
}

export interface iModalProviderProps {
  children: React.ReactNode;
}

export type tUserUpdateReq = z.infer<typeof userUpdateSchema>;
