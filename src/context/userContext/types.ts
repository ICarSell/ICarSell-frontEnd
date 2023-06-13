import { NavigateFunction } from "react-router-dom";

export interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserContext {
  navigate: NavigateFunction;
}
