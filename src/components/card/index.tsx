import { useContext } from "react";
import { StyledListCar } from "./style";
import { UserContext } from "../../context/userContext/userContext";
import { iDataAnnouncement } from "../type";
import { ProfilePicture } from "../profilePerfilImage";

export const ListCarHome = ({ announcements }: iDataAnnouncement) => {
  const { setAnnouncementId, navigate } = useContext(UserContext);

  return (
    <>
      {announcements.map((car: any) => {
        const carPriceFipe = car.priceFipe.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          "."
        );

        const priceComparison =
          Number(car.price) < Number(carPriceFipe) * 0.95
            ? "lowestPriceFipe"
            : "outFipe";

        return (
          <StyledListCar
            key={car.id}
            onClick={() => {
              setAnnouncementId(car.id);
              localStorage.setItem("@CARID", car.id);
              navigate(`/product/${car.id}`);
            }}
          >
            <div className="cardImg">
              <img src={car.imgCover.path} alt={car.imgCover.fileName} />
              <div className={priceComparison}>$</div>
            </div>

            <div>
              <p className="cardTitle">
                {car.mark} - {car.model}
              </p>
            </div>
            <p className="cardDescription">{car.description}</p>
            <div className="cardUser">
              <ProfilePicture name={car.user?.name} />
              <p className="carName">{car.user.name}</p>
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
