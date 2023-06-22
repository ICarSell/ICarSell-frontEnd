import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PerfilPageStyle } from "./style";
import { ListCarPerfil } from "../../components/cardPerfilPage";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useState } from "react";
import { AnuncioCarroForm } from "../../components/modalCreateAnnouncement";
import { EditAnnouncementCarForm } from "../../components/modalUpAnnouncement";
import { ModalAnnouncementDelete } from "../../components/modalDeleteAnnouncement";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ToastContainer } from "react-toastify";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";

export const PerfilPage = () => {
  const { user, navigate } = useContext(UserContext);
  const [modalAdd, setModalAdd] = useState(false);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editCar, setEditCar] = useState<any>();

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
      {modalDelete && (
        <ModalAnnouncementDelete modal={setModalDelete} idCar={editCar.id} />
      )}
      {openModalUpdateAddress && <ModalUpdateAddress />}
      {openModelDeleteUser && <ModalDeleteUser />}
      {openModalUpdateUser && <ModalUpdateUser />}
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
            {user.announcement.map((car: any) => (
              <ListCarPerfil
                key={car.id}
                car={car}
                setEditCar={setEditCar}
                setModalEdit={setModalEdit}
              />
            ))}
          </ul>
        </div>
      </PerfilPageStyle>

      <Footer />
      {modalAdd && <AnuncioCarroForm setModalAdd={setModalAdd} />}
      {modalEdit && (
        <EditAnnouncementCarForm
          editCar={editCar}
          setModalEdit={setModalEdit}
          setModalDelete={setModalDelete}
        />
      )}
    </>
  );
};
