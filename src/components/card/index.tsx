import { useContext } from "react";
import { StyledListCar } from "./style";
import { UserContext } from "../../context/userContext/userContext";

export const ListCarHome = ({ announcements }) => {
  const { setAnnouncementId, navigate } = useContext(UserContext);

  return (
    <>
      {announcements.map((car) => (
        <StyledListCar
          key={car.id}
          onClick={() => {
            setAnnouncementId(car.id);
            localStorage.setItem("@CARID", car.id);
            navigate("/product")
          }}
        >
          <div className="cardImg">
            <img
              src={`http://localhost:3000/${car.imgCover.path.replace(
                /\\/g,
                "/"
              )}`}
              alt={car.imgCover.fileName}
            />
            <div
              className={
                car.price < car.priceFipe * 0.95 ? "lowestPriceFipe" : "outFipe"
              }
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
            <p>{}</p>
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
