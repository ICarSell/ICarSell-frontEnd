import car from "../../assets/GM-Brazil-2015-Chevrolet-Prisma-001.jpg";
import { CardStyled } from "./styled";

export const Card = () => {
  return (
    <CardStyled>
      <div className="cardImg">
        <img src={car} alt="" />
      </div>

      <div>
        <p className="cardTitle">Chevrolet - Prisma</p>
      </div>
      <p className="cardDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ut,
        corrupti dignissimos Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quia, sunt. Aliquam vero voluptatum earum, consequuntur odit
        corrupti recusandae nemo optio quaerat ea eos laboriosam qui nobis quam
        aperiam? Atque, quas.
      </p>
      <div className="cardUser">
        <div></div>
        <p>Vendedor</p>
      </div>
      <div className="cardInfo">
        <div className="cardInfoDiv">
          <div className="cardProperty">
            <p>0 KM</p>
          </div>
          <div className="cardProperty">
            <p>2019</p>
          </div>
        </div>
        <div className="cardPrice">
          <p>R$ 00.000,00</p>
        </div>
      </div>
    </CardStyled>
  );
};
