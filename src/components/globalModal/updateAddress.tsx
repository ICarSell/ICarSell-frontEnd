import { useContext } from "react";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { Form } from "../form";
import { HeaderModal } from "../headerModal";
import { Input } from "../input";
import { ModalContext } from "../../context/modalContext/modalContext";

export const ModalUpdateAddress = () => {
  const { setOpenModalUpdateAddress } = useContext(ModalContext);
  return (
    <ContainerModal>
      <Form className="modalUpdateAddress">
        <HeaderModal>
          <h4 className="titleModal">Editar endereço</h4>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModalUpdateAddress(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>Informações de endereço</strong>
        </p>

        <Input placeholder="99999.999" label="CEP" type="number" />

        <div className="stateAndCity">
          <Input type="text" label="Estado" placeholder="Paraná" />
          <Input type="text" label="Cidade" placeholder="Curitiba" />
        </div>

        <Input type="text" label="Rua" placeholder="Rua do paraná" />

        <div className="numberAndComplement">
          <Input type="text" label="Número" placeholder="1029" />
          <Input type="text" label="Complemento" placeholder="Apart 12" />
        </div>
        <div className="containerButton">
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => setOpenModalUpdateAddress(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" buttonVariation="updateAddress">
            Salvar alterações
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
