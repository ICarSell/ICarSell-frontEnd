import { ModalContext } from "../../context/modalContext/modalContext";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { Form } from "../form";
import { HeaderModal } from "../headerModal";
import { useContext } from "react";

export const ModalUpdateComment = () => {
  const { setOpenModalUpdateComment } = useContext(ModalContext);
  return (
    <ContainerModal>
      <Form className="modalUpdateComment">
        <HeaderModal>
          <h3 className="titleModal">Editar comentário</h3>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModalUpdateComment(false)}
          >
            X
          </Button>
        </HeaderModal>
        <textarea name="" id="" cols={30} rows={10}></textarea>

        <div className="containerButton">
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => setOpenModalUpdateComment(false)}
          >
            Cancelar
          </Button>
          <Button buttonVariation="deleteComment" type="button">
            Excluir
          </Button>
          <Button buttonVariation="updateComment" type="submit">
            Salvar alterçãoes
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
