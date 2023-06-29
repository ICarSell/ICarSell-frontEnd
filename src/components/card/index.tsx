import { useContext } from "react";
import { StyledListCar } from "./style";
import { UserContext } from "../../context/userContext/userContext";
import { iDataAnnouncement } from "../type";

export const ListCarHome = ({ announcements }: iDataAnnouncement) => {
  const { setAnnouncementId, navigate } = useContext(UserContext);

  return (
    <>
      {announcements.map((car: any) => {
        const carPrice = parseFloat(car.price).toFixed(3);
        const carPriceFipe = parseFloat(car.priceFipe).toFixed(3);

        const priceComparison =
          Number(carPrice) < Number(carPriceFipe) * 0.95
            ? "lowestPriceFipe"
            : "outFipe";

        return (
          <StyledListCar
            key={car.id}
            onClick={() => {
              setAnnouncementId(car.id);
              localStorage.setItem("@CARID", car.id);
              navigate("/product");
            }}
          >
            <div className="cardImg">
              <img
                src={`https://i-car-sell-web.onrender.com/${car.imgCover.path.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={car.imgCover.fileName}
              />
              <div className={priceComparison}>$</div>
            </div>

            <div>
              <p className="cardTitle">
                {car.mark} - {car.model}
              </p>
            </div>
            <p className="cardDescription">{car.description}</p>
            <div className="cardUser">
              <div>
                <p>{car.user.name[0].toUpperCase()}</p>
              </div>
              <p>{car.user.name}</p>
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
        );
      })}
    </>
  );
};
