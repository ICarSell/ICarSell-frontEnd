import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PerfilPageStyle } from "./style";
import { ListCarPerfil } from "../../components/cardPerfilPage";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useState } from "react";
import { AnuncioCarroForm } from "../../components/modalCreateAnnouncement";
import { EditAnnouncementCarForm } from "../../components/modalUpAnnouncement";

export const PerfilPage = () => {
  const { user } = useContext(UserContext);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [editCar, setEditCar] = useState({});

  if (!user) {
    return <div>Carregando...</div>;
  }
  return (
    <>
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
            {user.announcement.map((car) => (
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
        />
      )}
    </>
  );
};
