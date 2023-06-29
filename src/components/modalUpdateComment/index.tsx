import { ModalContext } from "../../context/modalContext/modalContext";
import { Button } from "../button";
import { ContainerModal } from "../containerModal";
import { Form } from "../form";
import { HeaderModal } from "../headerModal";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tCommentUpdateReq } from "../../context/modalContext/types";
import { updateCommentsSchema } from "../../schemas/comments";
import { UserContext } from "../../context/userContext/userContext";

export const ModalUpdateComment = ({ indexComment }: any) => {
  const { updateComment } = useContext(ModalContext);
  const { announcement } = useContext(UserContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<tCommentUpdateReq>({
    resolver: zodResolver(updateCommentsSchema),
  });

  const { setOpenModalUpdateComment } = useContext(ModalContext);
  return (
    <ContainerModal>
      <Form
        className="modalUpdateComment"
        onSubmit={handleSubmit(updateComment)}
      >
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
        <textarea
          id="comments"
          placeholder="Escreva um comentario sobre o carro e seu vendedor"
          defaultValue={announcement.comments[indexComment].comments}
          {...register("comments")}
          rows={7}
          maxLength={312}
        ></textarea>

        {errors.comments?.message && (
          <span className="errorMessage">{errors.comments.message}</span>
        )}

        <div className="containerButton">
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => setOpenModalUpdateComment(false)}
          >
            Cancelar
          </Button>
          <Button buttonVariation="updateComment" type="submit">
            Salvar alterações
          </Button>
        </div>
      </Form>
    </ContainerModal>
  );
};
