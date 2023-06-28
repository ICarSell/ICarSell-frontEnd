import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/footer";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";

import { Navbar } from "../../components/navbar";
import { ModalContext } from "../../context/modalContext/modalContext";
import { UserContext } from "../../context/userContext/userContext";
import { PerfilPageStyle } from "../perfilPage/style";
import { ListCarViewPage } from "../../components/cardViewUserPage";
import { LoadigPage } from "../productPage/style";
import MotorLogo from "../../assets/Motors shop.svg";
import Spin from "../../assets/Spin-0.8s-194px.gif";

export const ViewUserPage = () => {
  const { announcementUser } = useContext(UserContext);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);

  if (!announcementUser) {
    return (
      <LoadigPage>
        <img src={MotorLogo} alt="Motor Shop" className="logo" />
        <img src={Spin} alt="Loading" className="spin" />
      </LoadigPage>
    );
  }
  return (
    <>
      <ToastContainer />

      {openModalUpdateAddress && <ModalUpdateAddress />}
      {openModelDeleteUser && <ModalDeleteUser />}
      {openModalUpdateUser && <ModalUpdateUser />}
      <Navbar />
      <PerfilPageStyle>
        <div className="div-color-purple"></div>
        <div className="div-color-white"></div>
        <div className="card-perfil-user">
          <div className="image-perfil">
            <p>{announcementUser?.name[0].toUpperCase()}</p>
          </div>
          <div className="perfil-info-text">
            <h2>{announcementUser?.name}</h2>
            <p>Anunciante</p>
          </div>
          <p className="description">{announcementUser?.description}</p>
        </div>
        <div className="card-list-cars">
          <ul>
            {announcementUser?.announcement.map((car: any) => (
              <ListCarViewPage
                key={car.id}
                car={car}
                announcementName={announcementUser?.name}
              />
            ))}
          </ul>
        </div>
      </PerfilPageStyle>
      <Footer />
    </>
  );
};
