import { useContext } from "react";
import { StyledComments, StyledCommentsDisabled } from "./style";
import { UserContext } from "../../context/userContext/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { commentsData, commentsSchema } from "../../schemas/comments";

export const AddComents = ({ announcementId }: any) => {
  const { user, postComments } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<commentsData>({
    resolver: zodResolver(commentsSchema),
  });

  const onSubmit = async (data: commentsData) => {
    postComments(data, announcementId);
    reset();
  };

  return !token ? (
    <StyledCommentsDisabled>
      <div className="container">
        <div className="containerForm">
          <form>
            <textarea
              id="comments"
              placeholder="Escreva um comentario sobre o carro e seu vendedor"
              {...register("comments")}
              disabled
            />
            <button type="button" className="buttonComments" disabled>
              Comentar
            </button>
          </form>
        </div>
      </div>
    </StyledCommentsDisabled>
  ) : (
    <StyledComments>
      <div className="container">
        <div className="containerForm">
          <div className="user">
            <div className="imgUser">
              <p>{user?.name[0].toUpperCase()}</p>
            </div>
            <p>{user?.name}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              id="comments"
              placeholder="Escreva um comentario sobre o carro e seu vendedor"
              {...register("comments")}
            />
            {errors.comments?.message && (
              <span className="errorMessage">{errors.comments.message}</span>
            )}
            <button type="submit" className="buttonComments">
              Comentar
            </button>
          </form>
        </div>
      </div>
    </StyledComments>
  );
};
