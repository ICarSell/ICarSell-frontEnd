import { DropDownMain } from "./style";
import { useState } from "react";

export const DropDownMenu = () => {
  const [userAdmin, setUserAdmin] = useState(false);

  return (
    <DropDownMain>
      <div>
        <p>Editar Perfil</p>
        <p>Editar Endereço</p>
        {userAdmin && <p>Meus Anuncios</p>}
        <p>Sair</p>
      </div>
    </DropDownMain>
  );
};
