import { NavigateFunction } from "react-router-dom";
import { tUserReq } from "../../pages/registerPage/type";

export interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserContext {
  navigate: NavigateFunction;
  register: (registerItem: tUserReq) => void;
}
