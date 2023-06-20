import { useContext } from "react";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { Form } from "../form";
import { HeaderModal } from "../headerModal";
import { Input } from "../input";
import { ModalContext } from "../../context/modalContext/modalContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { userUpdateSchema } from "../../schemas/registerSchemas";
import { tUserUpdateReq } from "../../context/modalContext/types";
import { UserContext } from "../../context/userContext/userContext";

export const ModalUpdateUser = () => {
  const { setOpenModalUpdateUser, updateUser } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm<tUserUpdateReq>({
    resolver: zodResolver(userUpdateSchema),
  });

  const onHandleSubmit: SubmitHandler<tUserUpdateReq> = (data) => {
    updateUser(data);
    reset();
  };
  return (
    <ContainerModal>
      <Form className="modalUpdateUser" onSubmit={handleSubmit(onHandleSubmit)}>
        <HeaderModal>
          <h4 className="titleModal">Editar Perfil</h4>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModalUpdateUser(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>Informações de Perfil</strong>
        </p>

        <Input
          label="Nome"
          type="text"
          defaultValue={user.name}
          placeholder="Ex: Samuel Leão"
          register={register("name")}
        />

        <Input
          label="Email"
          type="email"
          defaultValue={user.email}
          placeholder="Ex: samuel@kenzie.com.br"
          register={register("email")}
        />

        <Input
          label="CPF"
          type="text"
          defaultValue={user.cpf}
          placeholder="000.000.000-00"
          register={register("cpf")}
        />

        <Input
          label="Celular"
          type="text"
          defaultValue={user.phone}
          placeholder="(DDD) 90000-0000"
          register={register("phone")}
        />

        <Input
          label="Data de Nascimento"
          type="number"
          placeholder="00/00/00"
          defaultValue={user.dateOfBirth}
          register={register("dateOfBirth")}
        />

        <Input
          label="Descrição"
          type="text"
          defaultValue={user.description}
          placeholder="Digitar descrição"
          register={register("description")}
        />

        <div className="containerButton">
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => setOpenModalUpdateUser(false)}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            buttonVariation="deleteUser"
            onClick={() => setOpenModalUpdateUser(false)}
          >
            Excluir Perfil
          </Button>
          <Button type="submit" buttonVariation="updateUser">
            Salvar alterações
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
