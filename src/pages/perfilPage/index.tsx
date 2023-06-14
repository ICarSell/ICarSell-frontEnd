import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PerfilPageStyle } from "./style";
import { useState, useEffect } from "react";
import perfilImage from "../../assets/perfil.png";
import { ListCarHome } from "../../components/card";
import { api } from "../../services/api";

export const PerfilPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/announcement");

      const data = response.data;

      setAnnouncements(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <PerfilPageStyle>
        <div></div>
        <div></div>
        <div className="card-perfil-user">
          <div>
            <img src={perfilImage} alt="" />
          </div>
          <div>
            <h2>Samuel leão</h2>
            <p>Anunciante</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio
            ipsam labore excepturi. Porro error fuga quasi in corrupti
            perspiciatis eaque praesentium, maxime temporibus doloribus odit
            consequatur id amet alias.
          </p>
        </div>
        <div className="card-list-cars">
          <h2>Anúncios</h2>
          <ul>
            <ListCarHome announcements={announcements} />
          </ul>
        </div>
      </PerfilPageStyle>

      <Footer />
    </>
  );
};
