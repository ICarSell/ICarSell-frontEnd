import { StyledListCar } from "./style";

export const ListCarHome = ({ announcements }) => {
  console.log(announcements);
  return (
    <>
      {announcements.map((car) => (
        <StyledListCar key={car.id}>
          <div className="cardImg">
            <img
              src={`http://localhost:3000/${car.imgCover.path.replace(
                /\\/g,
                "/"
              )}`}
              alt={car.imgCover.fileName}
            />
            <div
              className={car.priceFipe > 60000 ? "lowestPriceFipe" : "outFipe"}
            >
              $
            </div>
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
