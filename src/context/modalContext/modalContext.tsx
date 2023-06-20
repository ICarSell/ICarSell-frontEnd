import { useState, createContext } from "react";
import { iModalProps, iModalProviderProps } from "./types";

export const ModalContext = createContext({} as iModalProps);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [openModalUpdateAddress, setOpenModalUpdateAddress] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModalUpdateAddress,
        setOpenModalUpdateAddress
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
