import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/footer";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";
import { ModalAnnouncementDelete } from "../../components/modalDeleteAnnouncement";
import { Navbar } from "../../components/navbar";
import { ModalContext } from "../../context/modalContext/modalContext";
import { UserContext } from "../../context/userContext/userContext";
import { PerfilPageStyle } from "../perfilPage/style";
import { ListCarViewPage } from "../../components/cardViewUserPage";

export const ViewUserPage = () => {
  const { user, navigate, announcementUser } = useContext(UserContext);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);
  const [modalDelete, setModalDelete] = useState(false);

  if (!user) {
    return <div>Carregando...</div>;
  }

  const checkUser = () => {
    const token = localStorage.getItem("@TOKEN");
    const userType = user.isSeller;

    if (!token || !userType) {
      navigate("/");
    }
  };

  checkUser();

  return (
    <>
      <ToastContainer />
      {modalDelete && <ModalAnnouncementDelete modal={setModalDelete} />}
      {openModalUpdateAddress && <ModalUpdateAddress />}
      {openModelDeleteUser && <ModalDeleteUser />}
      {openModalUpdateUser && <ModalUpdateUser />}
      <Navbar />
      <PerfilPageStyle>
        <div className="div-color-purple"></div>
        <div className="div-color-white"></div>
        <div className="card-perfil-user">
          <div className="image-perfil">
            <p>{announcementUser.name[0].toUpperCase()}</p>
          </div>
          <div className="perfil-info-text">
            <h2>{announcementUser.name}</h2>
            <p>Anunciante</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="card-list-cars">
          <ul>
            {announcementUser.announcement.map((car: any) => (
              <ListCarViewPage
                key={car.id}
                car={car}
                announcementName={announcementUser.name}
              />
            ))}
          </ul>
        </div>
      </PerfilPageStyle>
      <Footer />
    </>
  );
};
