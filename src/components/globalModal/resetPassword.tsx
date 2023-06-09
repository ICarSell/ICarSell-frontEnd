import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../context/modalContext/modalContext";
import { tRecoverPassReq } from "../../context/modalContext/types";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { HeaderModal } from "../headerModal";
import { Input } from "../input";
import { Form } from "../form";
import { recoverPassSchema } from "../../schemas/loginSchema";
import { LaodingSpin } from "../loadingSpin";

export const ModalResetPassword = () => {
  const { setOpenModalResetPass, emailSend, recoverPass, loadingOn } =
    useContext(ModalContext);
  const { register, handleSubmit, reset } = useForm<tRecoverPassReq>({
    resolver: zodResolver(recoverPassSchema),
  });

  const onHandleSubmit: SubmitHandler<tRecoverPassReq> = (
    data: tRecoverPassReq
  ) => {
    recoverPass(data);
    reset();
  };
  return (
    <ContainerModal>
      <Form className="modalUpdateUser" onSubmit={handleSubmit(onHandleSubmit)}>
        <HeaderModal>
          <h4 className="titleModal">Recuperar senha</h4>
          <Button
            type="button"
            buttonVariation="closeModalHeader"
            onClick={() => setOpenModalResetPass(false)}
          >
            X
          </Button>
        </HeaderModal>
        <p className="infoModal">
          <strong>
            Para Recuperar a senha, basta colocar seu email abaixo, para
            enviarmos um email de recuperação!
          </strong>
        </p>

        {!emailSend && !loadingOn && (
          <Input
            label="Email"
            type="text"
            placeholder="Ex: Joao@gmail.com"
            register={register("email")}
          />
        )}
        {emailSend && (
          <p className="emailSend">
            O email foi enviado, por favor cheque seu email!
          </p>
        )}
        {loadingOn && (
          <div className="laodingBar">
            <LaodingSpin />
            <h3>Estamos enviando o email...</h3>
          </div>
        )}

        <div className="containerButton">
          {emailSend && (
            <Button
              type="button"
              buttonVariation="closeModal"
              onClick={() => setOpenModalResetPass(false)}
            >
              Fechar
            </Button>
          )}
          {!emailSend && !loadingOn && (
            <>
              <Button
                type="button"
                buttonVariation="closeModal"
                onClick={() => setOpenModalResetPass(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" buttonVariation="updateUser">
                Enviar
              </Button>
            </>
          )}
        </div>
      </Form>
    </ContainerModal>
  );
};
