import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AsideStyled, Container, Main } from "./style";
import imgPerfil from "../../assets/perfil.png";
import { Button } from "../../components/button";
import { UserContext } from "../../context/userContext/userContext";
import { useContext } from "react";

export const ProductPage = () => {
  const { announcement } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Container>
        <Main>
          <div className="img_car">
            <img
              src={`http://localhost:3000/${announcement?.imgCover.path.replace(
                /\\/g,
                "/"
              )}`}
              alt={announcement?.imgCover.fileName}
            />
          </div>
          <div className="car_info">
            <h2>
              {announcement?.mark} - {announcement?.model}
            </h2>
            <div className="car_detail">
              <div>
                <p>{announcement?.year}</p>
                <p>{announcement?.mileage}</p>
              </div>
              <p>R$ {announcement?.price}</p>
            </div>
            <Button type="button" buttonVariation="filters">
              Comprar
            </Button>
          </div>
          <div className="car-desc">
            <h2>Descrição</h2>
            <p>{announcement?.description}</p>
          </div>
        </Main>
        <AsideStyled>
          <div className="aside-div">
            <h2>Fotos</h2>
            <ul>
              {announcement?.gallery.map((value: { path: string }, index) => (
                <li key={index}>
                  <img
                    src={`http://localhost:3000/${value?.path.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={announcement?.imgCover.fileName}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="perfil-column">
            <div>
              <img src={imgPerfil} alt="" />
            </div>
            <h2>{announcement?.user.name}</h2>
            <p>{announcement?.user.description}</p>
            <button>Ver todos os anuncios</button>
          </div>
        </AsideStyled>
      </Container>
      <Footer />
    </>
  );
};
