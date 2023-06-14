import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserContext {
  navigate: NavigateFunction;
  submitLogin: (formData: iLoginData) => void;
  unauthorized: string;
  setUnauthorized: React.Dispatch<SetStateAction<string>>;
}

export interface iLoginData {
  email: string;
  password: string;
}
