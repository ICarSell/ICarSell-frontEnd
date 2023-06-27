import moment from "moment";
import "moment/dist/locale/pt-br";
import { StyledListComments } from "./style";
import { Button } from "../button";

export const CommentsSection = ({ comments }: any) => {
  console.log(comments);
  const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
  moment.locale("pt-br");

  return (
    <StyledListComments>
      <div className="listComments">
        <h1>Comentários</h1>
        <ul className="comments">
          {comments.map((comment: any) => {
            const createdAt = moment(comment.createdAt)
              .utcOffset("America/Sao_Paulo")
              .format("YYYY-MM-DD HH:mm");
            const user = "pedro";
            return (
              <li>
                <div className="userOpt">
                  <div className="userInfo">
                    <div className="imgUser">
                      <p>{user[0].toUpperCase()}</p>
                    </div>
                    <h2>Pedro</h2>
                    <div className="point"></div>
                    <p className="time">
                      {moment(createdAt, "'YYYY-MM-DD hh:mm").fromNow()}
                    </p>
                  </div>
                  {token && (
                    <div className="editComment">
                      <Button type="button" buttonVariation="updateComment">
                        Editar
                      </Button>
                    </div>
                  )}
                </div>
                <p className="comment">{comment.comments}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledListComments>
  );
};
