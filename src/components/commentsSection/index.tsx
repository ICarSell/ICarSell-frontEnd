import moment from "moment";
import "moment/dist/locale/pt-br";
import { StyledListComments } from "./style";
import { ModalContext } from "../../context/modalContext/modalContext";
import { useContext } from "react";
import { BiMessageAltEdit, BiMessageAltX } from "react-icons/bi";
import { ProfilePicture } from "../profilePerfilImage";
import { generateColor } from "../../services/utils";
import { UserContext } from "../../context/userContext/userContext";

export const CommentsSection = ({ comments, setIndexComment }: any) => {
  const { setOpenModalUpdateComment, setCommentId, setOpenModalDeleteComment } =
    useContext(ModalContext);
  const { user } = useContext(UserContext);

  const userId = JSON.parse(`${localStorage.getItem("@USERID")}`);
  moment.locale("pt-br");
  const userColor = generateColor(user?.name);
  return (
    <StyledListComments color={userColor}>
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

            return (
              <li key={index}>
                <div className="userOpt">
                  <div className="userInfo">
                    <ProfilePicture name={comment.user.name} />
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
                      <BiMessageAltX
                        className="trashIcon"
                        onClick={() => {
                          setOpenModalDeleteComment(true),
                            setCommentId(comment.id);
                        }}
                      />
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
