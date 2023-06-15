import { UserContext } from "../../context/userContext/userContext";
import { DropDownMain } from "./style";
import { useContext, useState } from "react";

export const DropDownMenu = () => {
  const [userAdmin, setUserAdmin] = useState(false);
  const { navigate } = useContext(UserContext);
  const exit = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <DropDownMain>
      <div>
        <p>Editar Perfil</p>
        <p>Editar Endereço</p>
        {userAdmin && <p>Meus Anuncios</p>}
        <p onClick={() => exit()}>Sair</p>
      </div>
    </DropDownMain>
  );
};
