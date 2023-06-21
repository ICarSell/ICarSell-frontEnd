import { Button } from "../../button";
import { ContainerModal } from "../../containerModal";
import { HeaderModal } from "../../headerModal";

export const ModalDeleteUser = ({ setOpenModal }: any) => {
  return (
    <ContainerModal>
      <form className="modalUpdateAddress">
        <HeaderModal>
          <h4 className="titleModal">Excluir modal</h4>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModal(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>Tem certeza que deseja remover este anúncio?</strong>
        </p>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <div className="containerButton">
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" buttonVariation="updateAddress">
            Sim, excluir anúncio
          </Button>
        </div>
      </form>
    </ContainerModal>
  );
};
