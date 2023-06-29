import { useContext } from "react";
import { Button } from "../../button";
import { ContainerModal } from "../../containerModal";
import { HeaderModal } from "../../headerModal";
import { ModalContext } from "../../../context/modalContext/modalContext";
import { api } from "../../../services/api";
import { UserContext } from "../../../context/userContext/userContext";
import { Form } from "../../form";

export const ModalDeleteUser = () => {
  const { setOpenModelDeleteUser } = useContext(ModalContext);
  const { setUser, navigate } = useContext(UserContext);
  const userId: string | null = localStorage.getItem("@USERID");

  const deleteUser = async () => {
    try {
      await api.delete(`/user/${JSON.parse(userId!)}`);
      setOpenModelDeleteUser(false);
      localStorage.clear();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerModal>
      <Form className="modalUpdateAddress">
        <HeaderModal>
          <h4 className="titleModal">Excluir conta</h4>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModelDeleteUser(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>Tem certeza que deseja remover esta conta?</strong>
        </p>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <div className="containerButton">
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => setOpenModelDeleteUser(false)}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            buttonVariation="deleteUser"
            onClick={() => deleteUser()}
          >
            Sim, excluir conta
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
