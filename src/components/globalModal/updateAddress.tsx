import { useContext } from "react";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { Form } from "../form";
import { HeaderModal } from "../headerModal";
import { Input } from "../input";
import { ModalContext } from "../../context/modalContext/modalContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressUpdateSchema } from "../../schemas/registerSchemas";
import { tAddressUpdateReq } from "../../context/modalContext/types";
import { UserContext } from "../../context/userContext/userContext";

export const ModalUpdateAddress = () => {
  const { setOpenModalUpdateAddress, updateAddress } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<tAddressUpdateReq>({
    resolver: zodResolver(addressUpdateSchema),
  });

  return (
    <ContainerModal>
      <Form
        className="modalUpdateAddress"
        onSubmit={handleSubmit(updateAddress)}
      >
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

        <Input
          placeholder="99999.999"
          label="CEP"
          type="number"
          register={register("zipCode")}
          defaultValue={user.address.zipCode}
        />

        {errors.zipCode?.message && (
          <span className="errorMessage">{errors.zipCode.message}</span>
        )}

        <div className="containerInput">
          <Input
            type="text"
            label="Estado"
            placeholder="Paraná"
            register={register("state")}
            defaultValue={user.address.state}
          />
          {errors.state?.message && (
            <span className="errorMessage">{errors.state.message}</span>
          )}
          <Input
            type="text"
            label="Cidade"
            placeholder="Curitiba"
            register={register("city")}
            defaultValue={user.address.city}
          />
          {errors.city?.message && (
            <span className="errorMessage">{errors.city.message}</span>
          )}
        </div>

        <Input
          type="text"
          label="Rua"
          placeholder="Rua do paraná"
          register={register("street")}
          defaultValue={user.address.street}
        />

        {errors.street?.message && (
          <span className="errorMessage">{errors.street.message}</span>
        )}

        <div className="containerInput">
          <Input
            type="text"
            label="Número"
            placeholder="1029"
            register={register("number")}
            defaultValue={user.address.number}
          />

          {errors.number?.message && (
            <span className="errorMessage">{errors.number.message}</span>
          )}

          <Input
            type="text"
            label="Complemento"
            placeholder="Apart 12"
            register={register("complement")}
            defaultValue={user.address.complement}
          />
          {errors.complement?.message && (
            <span className="errorMessage">{errors.complement.message}</span>
          )}
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
