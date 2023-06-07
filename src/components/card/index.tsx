import { cars } from "../../mock";
import { StyledListCar } from "./style";

export const ListCarHome = () => {
  return (
    <>
      {cars.map((car) => (
        // <Card key={car.id} car={car} />
        <StyledListCar key={car.id}>
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
        </StyledListCar>
      ))}
    </>
  );
};
