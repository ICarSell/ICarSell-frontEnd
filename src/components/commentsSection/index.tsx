import moment from "moment";
import "moment/dist/locale/pt-br";
import { StyledListComments } from "./style";
import { Button } from "../button";
import { ModalContext } from "../../context/modalContext/modalContext";
import { useContext } from "react";
import { BiMessageAltEdit, BiMessageAltX } from "react-icons/bi";

export const CommentsSection = ({ comments, setIndexComment }: any) => {
  const { setOpenModalUpdateComment, setCommentId } = useContext(ModalContext);

  const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
  const userId = JSON.parse(`${localStorage.getItem("@USERID")}`);
  moment.locale("pt-br");

  return (
    <StyledListComments>
      <div className="listComments">
        <h1>Comentários</h1>
        <ul className="comments">
          {comments.length == 0 && (
            <h3 className="emptyComments">
              Não há comentários por enquanto...
            </h3>
          )}
          {comments.map((comment: any, index: number) => {
            const createdAt = moment(comment.createdAt)
              .utcOffset("America/Sao_Paulo")
              .format("YYYY-MM-DD HH:mm");
            const user = "pedro";

            return (
              <li>
                <div className="userOpt">
                  <div className="userInfo">
                    <div className="imgUser">
                      <p>{comment.user.name[0].toUpperCase()}</p>
                    </div>
                    <div className="user">
                      <h2>{comment.user.name}</h2>
                      <div className="point"></div>
                      <p className="time">
                        {moment(createdAt, "'YYYY-MM-DD hh:mm").fromNow()}
                      </p>
                    </div>
                  </div>
                  {userId == comment.user.id && (
                    <div className="editComment">
                      <BiMessageAltEdit
                        className="editIcon"
                        onClick={() => {
                          setOpenModalUpdateComment(true),
                            setIndexComment(index);
                          setCommentId(comment.id);
                        }}
                      />
                      <BiMessageAltX className="trashIcon" />
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
