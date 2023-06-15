import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { ListCarHome } from "../../components/card";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { StyledHome } from "./style";
import { api } from "../../services/api";

export const Home = () => {
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
      <StyledHome>
        <div className="containerGradient">
          <div className="containerImg">
            <h1>Motor Shop</h1>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </div>
        </div>
        <div className="containerList">
          <aside className="filtro">
            <div className="marca">
              <h3>Marca</h3>
              <ul className="filterListContainer">
                <li>
                  <p>General Motors</p>
                </li>
                <li>
                  <p>Fiat</p>
                </li>
                <li>
                  <p>Ford</p>
                </li>
                <li>
                  <p>Honda</p>
                </li>
                <li>
                  <p>Porsche</p>
                </li>
                <li>
                  <p>Volswagen</p>
                </li>
              </ul>
            </div>
            <div className="modelo">
              <h3>Modelo</h3>

              <ul className="filterListContainer">
                <li>
                  <p>Civic</p>
                </li>
                <li>
                  <p>corolla</p>
                </li>
                <li>
                  <p>Cruze</p>
                </li>
                <li>
                  <p>Fit</p>
                </li>
                <li>
                  <p>Gol</p>
                </li>
                <li>
                  <p>Ka</p>
                </li>
                <li>
                  <p>Onix</p>
                </li>
                <li>
                  <p>Porsche 718</p>
                </li>
              </ul>
            </div>
            <div className="cor">
              <h3>Cor</h3>
              <ul className="filterListContainer">
                <li>
                  <p>Azul</p>
                </li>
                <li>
                  <p>Branco</p>
                </li>
                <li>
                  <p>Preto</p>
                </li>
                <li>
                  <p>Cinza</p>
                </li>
                <li>
                  <p>Prata</p>
                </li>
                <li>
                  <p>Verde</p>
                </li>
              </ul>
            </div>
            <div className="ano">
              <h3>Ano</h3>
              <ul className="filterListContainer">
                <li>
                  <p>2022</p>
                </li>
                <li>
                  <p>2021</p>
                </li>
                <li>
                  <p>2018</p>
                </li>
                <li>
                  <p>2015</p>
                </li>
                <li>
                  <p>2013</p>
                </li>
                <li>
                  <p>2012</p>
                </li>
                <li>
                  <p>2010</p>
                </li>
              </ul>
            </div>
            <div className="combustvel">
              <h3>Combustível</h3>
              <ul className="filterListContainer">
                <li>
                  <p>Gasolina</p>
                </li>
                <li>
                  <p>Flex</p>
                </li>
                <li>
                  <p>Etanol</p>
                </li>
                <li>
                  <p>Diesel</p>
                </li>
              </ul>
            </div>
            <div className="km">
              <h3>Km</h3>

              <div className="containerButton">
                <Button type="button" buttonVariation="filterMaxAndMin">
                  Mínima
                </Button>
                <Button type="button" buttonVariation="filterMaxAndMin">
                  Maxima
                </Button>
              </div>
            </div>
            <div className="preco">
              <h3>Preço</h3>
              <div className="containerButton">
                <Button type="button" buttonVariation="filterMaxAndMin">
                  Mínimo
                </Button>
                <Button type="button" buttonVariation="filterMaxAndMin">
                  Maximo
                </Button>
              </div>
            </div>
          </aside>
          <ul className="carListContainar">
            <ListCarHome announcements={announcements} />
          </ul>
        </div>

        <div className="pagination">
          <Button type="button" buttonVariation="filters">
            Filtros
          </Button>
          <div>
            <p>
              <span>1 </span> de 2
            </p>
            <Button type="button" buttonVariation="nextPage">
              Seguinte {">"}
            </Button>
          </div>
        </div>
      </StyledHome>
      <Footer />
    </>
  );
};
