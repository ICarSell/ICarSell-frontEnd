import carImg from "../../assets/GM-Brazil-2015-Chevrolet-Prisma-001.jpg";

import { CardStyled } from "./styled";

export const Card = (car: any) => {
  console.log(car);
  return (
    <CardStyled>
      <div className="cardImg">
        <img src={carImg} alt="" />
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
  );
};
