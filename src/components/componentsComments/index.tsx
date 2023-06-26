import { useContext } from "react";
import { StyledComments, StyledCommentsDisabled } from "./style";
import { UserContext } from "../../context/userContext/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { commentsData, commentsSchema } from "../../schemas/comments";
import { api } from "../../services/api";

export const AddComents = () => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<commentsData>({
    resolver: zodResolver(commentsSchema),
  });

  //Terminar a função e colocar no context
  const postComments = async (data: commentsData) => {
    try {
      const response = await api.post("/", data);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return !token ? (
    <StyledCommentsDisabled>
      <div className="container">
        <form>
          <textarea placeholder="Escreva um comentario sobre o carro e seu vendedor" />
          <button type="button" className="buttonComments" disabled>
            Comentar
          </button>
        </form>
      </div>
    </StyledCommentsDisabled>
  ) : (
    <StyledComments>
      <div className="container">
        <div className="user">
          <div className="imgUser">
            <p>{user.name[0].toUpperCase()}</p>
          </div>
          <p>{user.name}</p>
        </div>
        <form onSubmit={handleSubmit(postComments)}>
          <textarea
            id="comments"
            placeholder="Escreva um comentario sobre o carro e seu vendedor"
            {...register("comments")}
          />
          <button type="submit" className="buttonComments">
            Comentar
          </button>
        </form>
      </div>
    </StyledComments>
  );
};
