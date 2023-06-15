import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iUserContext, iUserContextProps } from "./types";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const postAnnouncement = async (formData: any) => {
    try {
      const response = await api.post(`/announcement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ navigate, postAnnouncement }}>
      {children}
    </UserContext.Provider>
  );
};
