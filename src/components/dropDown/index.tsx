import { ModalContext } from "../../context/modalContext/modalContext";
import { UserContext } from "../../context/userContext/userContext";
import { DropDownMain } from "./style";
import { useContext } from "react";

export const DropDownMenu = () => {
  const { navigate, user, setUser } = useContext(UserContext);
  const { setOpenModalUpdateAddress, setOpenModalUpdateUser } =
    useContext(ModalContext);
  const exit = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <DropDownMain>
      <div>
        <p onClick={() => setOpenModalUpdateUser(true)}>Editar Perfil</p>
        <p onClick={() => setOpenModalUpdateAddress(true)}>Editar Endereço</p>
        {user?.isSeller && (
          <p onClick={() => navigate("/perfil-page")}>Meus Anuncios</p>
        )}
        <p onClick={() => exit()}>Sair</p>
      </div>
    </DropDownMain>
  );
};
