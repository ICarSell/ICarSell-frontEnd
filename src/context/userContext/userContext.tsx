import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iUserContext, iUserContextProps } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ navigate }}>{children}</UserContext.Provider>
  );
};
