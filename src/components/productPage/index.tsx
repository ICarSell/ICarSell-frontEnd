import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { AsideStyled, Container, Main } from "./style";
import Car from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import imgPerfil from "../../assets/perfil.png";
import { Button } from "../button";

export const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Main>
          <div className="img_car">
            <img src={Car} alt="" />
          </div>
          <div className="car_info">
            <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
            <div className="car_detail">
              <div>
                <p>2013</p>
                <p>200</p>
              </div>
              <p>R$ 00.000,00</p>
            </div>
            <Button type="button" buttonVariation="filters">
              Comprar
            </Button>
          </div>
          <div className="car-desc">
            <h2>Descrição</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Main>
        <AsideStyled>
          <div className="aside-div">
            <h2>Fotos</h2>
            <ul>
              <li>
                <img src={Car} alt="" />
              </li>
              <li>
                <img src={Car} alt="" />
              </li>
              <li>
                <img src={Car} alt="" />
              </li>
              <li>
                <img src={Car} alt="" />
              </li>
              <li>
                <img src={Car} alt="" />
              </li>
            </ul>
          </div>
          <div className="perfil-column">
            <div>
              <img src={imgPerfil} alt="" />
            </div>
            <h2>Samuel Leão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quod id cumque optio voluptate fuga ratione excepturi
              reprehenderit neque, magni ipsa, earum pariatur sit cum laborum
              numquam quasi nobis praesentium?
            </p>
            <button>Ver todos os anuncios</button>
          </div>
        </AsideStyled>
      </Container>
      <Footer />
    </>
  );
};
