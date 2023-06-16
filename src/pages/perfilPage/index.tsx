import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PerfilPageStyle } from "./style";
import { ListCarPerfil } from "../../components/card copy 2";
import { UserContext } from "../../context/userContext/userContext";
import { useContext } from "react";

export const PerfilPage = () => {
  const { user } = useContext(UserContext);

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
          <p>{user.description}</p>
          <button className="button-create-announcement">Criar anúncio</button>
        </div>
        <div className="card-list-cars">
          <ul>
            <ListCarPerfil announcements={user.announcement} />
          </ul>
        </div>
      </PerfilPageStyle>

      <Footer />
    </>
  );
};
