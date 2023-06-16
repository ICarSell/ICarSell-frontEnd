import { StyledListCar } from "./style";
import { useState } from "react";
import escanor from "../../assets/perfil.png";

export const ListCarHome = ({ announcements }) => {
  const [editingCar, setEditingCar] = useState(null);
  const handleEdit = (id: string) => {
    console.log(`Editar carro com ID: ${id}`);
    const carToEdit = announcements.find((car: any) => car.id === id);
    setEditingCar(carToEdit);
  };

  const handleDetails = (id: string) => {
    console.log(`Ver detalhes do carro com ID: ${id}`);
    // Implemente a lógica para exibir os detalhes do carro
  };
  return (
    <>
      {announcements.map((car: any) => (
        <StyledListCar key={car.id}>
          <div className="cardImg">
            <img src={escanor} alt={car.imgCover.fileName} />
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
          < className="cardInfo">
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
            <div className="cardPrice">
            <p>R$ {car.price}</p>
            <div className="cardButtons">
              <button className="editButton" onClick={() => handleEdit(car.id)}>
                <EditIcon />
                Editar
              </button>
              <button className="detailsButton" onClick={() => handleDetails(car.id)}>
                <VisibilityIcon />
                Ver detalhes
              </button>
            </div>
          </div>
        </StyledListCar>
      ))}
    </>
  );
};
