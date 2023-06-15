import { UserContext } from "../../context/userContext/userContext";
import { DropDownMain } from "./style";
import { useContext, useState } from "react";

export const DropDownMenu = () => {
  const [userAdmin, setUserAdmin] = useState(false);
  const { navigate, user, setUser } = useContext(UserContext);
  const exit = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <DropDownMain>
      <div>
        <p>Editar Perfil</p>
        <p>Editar Endereço</p>
        {user?.isSeller && <p>Meus Anuncios</p>}
        <p onClick={() => exit()}>Sair</p>
      </div>
    </DropDownMain>
  );
};
