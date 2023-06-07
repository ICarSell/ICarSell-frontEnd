import { StyledHome } from "./Homepage/style";
import { Button } from "./components/button";
// import { Card } from "./components/cards";
import { CardStyled } from "./components/cards/styled";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

import imgContainer from "./assets/Group 70.svg";

const cars = [
  {
    id: "d2a63a8e-2146-4c8e-8eef-36a3d7c3e530",
    mark: "chevrolet",
    model: "prisma",
    year: 2021,
    mileage: "55555",
    color: "azul",
    priceFipe: 85100,
    price: 90500,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ut, corrupti dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt. Aliquam vero voluptatum earum, consequuntur odit corrupti recusandae nemo optio quaerat ea eos laboriosam qui nobis quam aperiam? Atque, quas.",
    imgCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkFlROZ0d8GMAR4BfwmJwF8V4nnm-5g0j0fT2d7SXcMLkbBqZz4Cpy6KU7OBtArAhdHI&usqp=CAU",
    isActive: true,
    advertiser: "Paulo Rodrigues",
  },
  {
    id: "4de2c052-14f4-46fe-9b1a-2dc93d2fe7e1",
    mark: "ford",
    model: "mustang",
    year: 2019,
    mileage: "25000",
    color: "vermelho",
    priceFipe: 100000,
    price: 95000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ut, corrupti dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt. Aliquam vero voluptatum earum, consequuntur odit corrupti recusandae nemo optio quaerat ea eos laboriosam qui nobis quam aperiam? Atque, quas.",
    imgCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkFlROZ0d8GMAR4BfwmJwF8V4nnm-5g0j0fT2d7SXcMLkbBqZz4Cpy6KU7OBtArAhdHI&usqp=CAU",
    isActive: true,
    advertiser: "Roberto Carlos",
  },
  {
    id: "9f8a3b58-3a4b-4854-a738-c8650f8c3033",
    mark: "volkswagen",
    model: "golf",
    year: 2017,
    mileage: "40000",
    color: "preto",
    priceFipe: 60000,
    price: 55000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ut, corrupti dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt. Aliquam vero voluptatum earum, consequuntur odit corrupti recusandae nemo optio quaerat ea eos laboriosam qui nobis quam aperiam? Atque, quas.",
    imgCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkFlROZ0d8GMAR4BfwmJwF8V4nnm-5g0j0fT2d7SXcMLkbBqZz4Cpy6KU7OBtArAhdHI&usqp=CAU",
    isActive: true,
    advertiser: "Jorge Lafond",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <StyledHome>
        <div className="containerImg">
          <img src={imgContainer} alt="" />

          <h1>Motor Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
        <div className="containerList">
          <aside className="filtro">
            <div className="marca">
              <h3>Marca</h3>
              <ul>
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

              <ul>
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
              <ul>
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
              <ul>
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
              <ul>
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

              <button disabled>Mínima</button>
              <button disabled>Máxima</button>
            </div>
            <div className="preco">
              <h3>Preço</h3>

              <button disabled>Mínima</button>
              <button disabled>Máxima</button>
            </div>
          </aside>
          <ul className="">
            {cars.map((car) => (
              // <Card key={car.id} car={car} />
              <CardStyled key={car.id}>
                <div className="cardImg">
                  <img src={car.imgCover} alt="" />
                </div>

                <div>
                  <p className="cardTitle">
                    {car.mark} - {car.model}
                  </p>
                </div>
                <p className="cardDescription">{car.description}</p>
                <div className="cardUser">
                  <div></div>
                  <p>{car.advertiser}</p>
                </div>
                <div className="cardInfo">
                  <div className="cardInfoDiv">
                    <div className="cardProperty">
                      <p>{car.mileage} KM</p>
                    </div>
                    <div className="cardProperty">
                      <p>{car.year}</p>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <p>R$ {car.price}</p>
                  </div>
                </div>
              </CardStyled>
            ))}
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
}

export default App;
