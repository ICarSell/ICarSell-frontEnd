import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PerfilPageStyle } from "./style";
import { ListCarPerfil } from "../../components/card copy 2";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useEffect, useState } from "react";
import { AnuncioCarroForm } from "../../components/modalCreateAndUpAnnouncement";
import { ModalAnnouncementDelete } from "../../components/modalDeleteAnnouncement";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ModalUpdateAddress } from "../../globalModal/updateAddress";

export const PerfilPage = () => {
  const { user, navigate } = useContext(UserContext);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const { openModalUpdateAddress } = useContext(ModalContext);

  if (!user) {
    return <div>Carregando...</div>;
  }

  const checkUser = () => {
    const token = localStorage.getItem("@TOKEN");
    const userType = user.isSeller;

    if (!token || !userType) {
      navigate("/homepage");
    }
  };

  checkUser();

  return (
    <>
      {modalDelete && <ModalAnnouncementDelete modal={setModalDelete} />}
      {openModalUpdateAddress && <ModalUpdateAddress />}
      <Navbar />
      <PerfilPageStyle>
        <div className="div-color-purple"></div>
        <div className="div-color-white"></div>
        <div className="card-perfil-user">
          <div className="image-perfil">
            <p>{user.name[0].toUpperCase()}</p>
          </div>
          <div className="perfil-info-text">
            <h2>{user.name}</h2>
            <p>Anunciante</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button
            className="button-create-announcement"
            type="button"
            onClick={() => setModalAdd(true)}
          >
            Criar anúncio
          </button>
        </div>
        <div className="card-list-cars">
          <ul>
            <ListCarPerfil
              announcements={user.announcement}
              setDeleteModal={setModalDelete}
            />
          </ul>
        </div>
      </PerfilPageStyle>

      <Footer />
      {modalAdd && <AnuncioCarroForm setModalAdd={setModalAdd} />}
    </>
  );
};
