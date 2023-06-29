import { useContext } from "react";
import { StyledListCarPerfil } from "./style";
import { UserContext } from "../../context/userContext/userContext";

export const ListCarPerfil = ({ car, setEditCar, setModalEdit }) => {
  const { setAnnouncementId, navigate } = useContext(UserContext);

  const editButton = () => {
    setModalEdit(true);
    setEditCar(car);
  };

  return (
    <>
      <StyledListCarPerfil key={car.id}>
        <div className="cardImg">
          <img
            src={`https://i-car-sell-web.onrender.com/${car.imgCover.path.replace(
              /\\/g,
              "/"
            )}`}
            alt={car.imgCover.fileName}
          />
          {car.isActive ? (
            <div className="active">
              <p>Ativo</p>
            </div>
          ) : (
            <div className="notActive">
              <p>Inativo</p>
            </div>
          )}
        </div>

        <div>
          <p className="cardTitle">
            {car.mark} - {car.model}
          </p>
        </div>
        <p className="cardDescription">{car.description}</p>
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
        <div className="buttonsPerfilCard">
          <button className="buttonEditar" onClick={editButton}>
            Editar
          </button>
          <button
            className="buttonEditar"
            onClick={() => {
              setAnnouncementId(car.id);
              localStorage.setItem("@CARID", car.id);
              navigate("/product");
            }}
          >
            Ver detalhes
          </button>
        </div>
      </StyledListCarPerfil>
    </>
  );
};
