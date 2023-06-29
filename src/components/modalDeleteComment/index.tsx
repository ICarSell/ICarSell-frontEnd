import { useContext } from "react";
import { Form } from "../form";
import { ModalContext } from "../../context/modalContext/modalContext";
import { api } from "../../services/api";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { HeaderModal } from "../headerModal";
import { UserContext } from "../../context/userContext/userContext";
import { toast } from "react-toastify";

export const ModalDeleteComment = () => {
  const { commentId, setOpenModalDeleteComment } = useContext(ModalContext);
  const { getAnnouncement } = useContext(UserContext);

  const deleteComment = async () => {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete(`/comments/${commentId}`);
      getAnnouncement();
      setOpenModalDeleteComment(false);
      toast.success("Comentário Deletado!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerModal>
      <Form className="modalUpdateComment">
        <HeaderModal>
          <h3 className="titleModal">Excluir comentário</h3>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModalDeleteComment(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>Tem certeza que deseja remover este comentário?</strong>
        </p>
        <p>Essa ação não pode ser desfeita, isso excluirá</p>permanentemente seu
        comentário!!!
        <p></p>
        <div className="containerButton">
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => setOpenModalDeleteComment(false)}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            buttonVariation="deleteUser"
            onClick={() => deleteComment()}
          >
            Sim, excluir comentário
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
