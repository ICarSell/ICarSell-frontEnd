import React, { SetStateAction } from "react";

export interface iModalProps {
  openModalUpdateAddress: boolean;
  setOpenModalUpdateAddress: React.Dispatch<SetStateAction<boolean>>;
}

export interface iModalProviderProps {
  children: React.ReactNode;
}
