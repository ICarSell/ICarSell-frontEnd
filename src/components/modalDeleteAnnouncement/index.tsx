import { useContext } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { ModalDeleteAnnouncementStyle } from "./styled";
import { api } from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";

export const ModalAnnouncementDelete = ({
  modal,
  idCar,
}: {
  modal: (value: boolean) => void;
  idCar: string;
}) => {
  const { getUser } = useContext(UserContext);

  const token: string | null = localStorage.getItem(String("@TOKEN"));

  const deleteAnnouncement = async () => {
    try {
      const response = await api.delete(
        `http://localhost:3000/announcement/${idCar}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token!)}`,
          },
        }
      );
      toast.success("Anúncio deletado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.status, error.response.data.message);
        }
      } else {
        console.log(error);
      }
    } finally {
      modal(false);
      getUser();
    }
  };

  return (
    <ModalDeleteAnnouncementStyle>
      <div className="container-modal-delete">
        <div className="delete-annountcement-closed">
          <p>Excluir anúncio</p>
          <p onClick={() => modal(false)} className="button-closed">
            X
          </p>
        </div>
        <h2>Tem certeza que deseja remover este anúncio?</h2>
        <p className="description-text">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <div className="div-button">
          <button onClick={() => modal(false)}>Cancelar</button>
          <button onClick={() => deleteAnnouncement()}>
            Sim, excluir anúncio
          </button>
        </div>
      </div>
    </ModalDeleteAnnouncementStyle>
  );
};
