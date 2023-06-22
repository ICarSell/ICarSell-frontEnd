import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { ListCarHome } from "../../components/card";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { StyledHome, PClick } from "./style";
import { api } from "../../services/api";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";
import { ToastContainer } from "react-toastify";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";

const km = ["Minima", "Máxima"];
const preco = ["Minimo", "Máximo"];

export const Home = () => {
  // Colors
  const [markColor, setMarkColor] = useState("primary");
  const [modelColor, setModelColor] = useState("primary");
  const [corColor, setCorColor] = useState("primary");
  const [anoColor, setAnoColor] = useState("primary");
  const [combustivelColor, setCombustivelColor] = useState("primary");
  const [kmColor, setKmColor] = useState("primary");
  const [priceColor, setPriceColor] = useState("primary");

  const [announcements, setAnnouncements] = useState([]);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);
  const [keysFilter, setKeysFilter] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/announcement");

      const data = response.data;
      setAnnouncements(data);
      setFilterItens(data);
    })();
  }, []);

  const [filterItens, setFilterItens] = useState(announcements);

  const verifyCheck = (key: string, value: string) => {
    if (key === "KM") {
      setKeysFilter([...keysFilter, value]);
      const filterByMileage = [...filterItens];
      if (value === "Minima") {
        filterByMileage.sort((a, b) => {
          return Number(a.mileage) - Number(b.mileage);
        });
      } else if (value === "Máxima") {
        filterByMileage.sort((a, b) => {
          return Number(b.mileage) - Number(a.mileage);
        });
      }
      setFilterItens(filterByMileage);
      return;
    }
    if (key === "Preço") {
      setKeysFilter([...keysFilter, value]);
      const filterByprice = [...filterItens];
      if (value === "Minimo") {
        filterByprice.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      } else if (value === "Máximo") {
        filterByprice.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }
      setFilterItens(filterByprice);
      return;
    }

    if (typeof value === "string") {
      value = value.toLowerCase();
    }
    if (key === "marca") {
      key = "mark";
    } else if (key === "modelo") {
      key = "model";
    } else if (key === "ano") {
      key = "year";
    } else if (key === "combustivel") {
      key = "fuel";
    } else if (key === "cor") {
      key = "color";
    }

    const filteredAnnouncements = filterItens.filter((element) => {
      return element[key] == value;
    });
    setKeysFilter([...keysFilter, value]);
    setFilterItens(filteredAnnouncements);
  };

  const resetFilter = () => {
    setKeysFilter([]);
    setFilterItens(announcements);
    setMarkColor("primary");
    setModelColor("primary");
    setCorColor("primary");
    setAnoColor("primary");
    setCombustivelColor("primary");
    setKmColor("primary");
    setPriceColor("primary");
  };
  const renderedString = [];
  return (
    <>
      <Navbar />
      <ToastContainer />
      <StyledHome>
        {openModalUpdateAddress && <ModalUpdateAddress />}
        {openModalUpdateUser && <ModalUpdateUser />}
        <>{openModelDeleteUser && <ModalDeleteUser />}</>

        <div className="containerGradient">
          <div className="containerImg">
            <h1>Motors Shop</h1>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </div>
        </div>
        <div className="containerList">
          <aside className="filtro">
            <ul>
              <h2>Marca</h2>
              {announcements.map((value) => {
                if (!renderedString.includes(value.mark)) {
                  renderedString.push(value.mark);
                  return (
                    <li>
                      <PClick
                        disabled={markColor != "primary" ? true : false}
                        variant={
                          value.mark === markColor ? "primary" : "secondary"
                        }
                        onClick={() => {
                          verifyCheck("marca", String(value.mark));
                          markColor === value.mark
                            ? setMarkColor("")
                            : setMarkColor(value.mark);
                        }}
                      >
                        {value.mark}
                      </PClick>
                    </li>
                  );
                }
                return null; // Se a marca já existir, retorna null para não criar um novo elemento
              })}
              <h2>Modelo</h2>
              {announcements.map((value) => {
                if (!renderedString.includes(value.model)) {
                  renderedString.push(value.model);
                  return (
                    <li>
                      <PClick
                        disabled={modelColor != "primary" ? true : false}
                        variant={
                          value.model === modelColor ? "primary" : "secondary"
                        }
                        onClick={() => {
                          verifyCheck("modelo", String(value.model));
                          modelColor === value.model
                            ? setModelColor("")
                            : setModelColor(value.model);
                        }}
                      >
                        {value.model}
                      </PClick>
                    </li>
                  );
                }
                return null; // Se a marca já existir, retorna null para não criar um novo elemento
              })}
              <h2>Cor</h2>
              {announcements.map((value) => {
                if (!renderedString.includes(value.color)) {
                  renderedString.push(value.color);
                  return (
                    <li>
                      <PClick
                        disabled={corColor != "primary" ? true : false}
                        variant={
                          value.color === corColor ? "primary" : "secondary"
                        }
                        onClick={() => {
                          verifyCheck("color", String(value.color));
                          corColor === value.color
                            ? setCorColor("")
                            : setCorColor(value.color);
                        }}
                      >
                        {value.color}
                      </PClick>
                    </li>
                  );
                }
                return null; // Se a marca já existir, retorna null para não criar um novo elemento
              })}
              <h2>Ano</h2>
              {announcements.map((value) => {
                if (!renderedString.includes(value.year)) {
                  renderedString.push(value.year);
                  return (
                    <li>
                      <PClick
                        disabled={anoColor != "primary" ? true : false}
                        variant={
                          value.year === anoColor ? "primary" : "secondary"
                        }
                        onClick={() => {
                          verifyCheck("year", String(value.year));
                          anoColor === value.year
                            ? setAnoColor("")
                            : setAnoColor(value.year);
                        }}
                      >
                        {value.year}
                      </PClick>
                    </li>
                  );
                }
                return null; // Se a marca já existir, retorna null para não criar um novo elemento
              })}
              <h2>Combustivel</h2>
              {announcements.map((value) => {
                if (!renderedString.includes(value.fuel)) {
                  renderedString.push(value.fuel);
                  return (
                    <li>
                      <PClick
                        disabled={combustivelColor != "primary" ? true : false}
                        variant={
                          value.fuel === combustivelColor
                            ? "primary"
                            : "secondary"
                        }
                        onClick={() => {
                          verifyCheck("fuel", String(value.fuel));
                          combustivelColor === value.fuel
                            ? setCombustivelColor("")
                            : setCombustivelColor(String(value.fuel));
                        }}
                      >
                        {value.fuel}
                      </PClick>
                    </li>
                  );
                }
                return null; // Se a marca já existir, retorna null para não criar um novo elemento
              })}
              <h2>KM</h2>
              {km.map((value) => (
                <li>
                  <PClick
                    disabled={kmColor != "primary" ? true : false}
                    variant={value == kmColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("KM", String(value)),
                        kmColor === value ? setKmColor("") : setKmColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>Preço</h2>
              {preco.map((value) => (
                <div className="column-price-and-KM">
                  <li>
                    <PClick
                      disabled={priceColor != "primary" ? true : false}
                      variant={value == priceColor ? "primary" : "secondary"}
                      onClick={() => {
                        verifyCheck("Preço", String(value)),
                          priceColor === value
                            ? setPriceColor("")
                            : setPriceColor(value);
                      }}
                    >
                      {value}
                    </PClick>
                  </li>
                </div>
              ))}
            </ul>
            {keysFilter.length > 0 && (
              <ul className="ulFilter">
                <div>
                  <h2>Filtros</h2>
                </div>
                {keysFilter.map((e) => (
                  <li className="key-filter">{e}</li>
                ))}
                <button onClick={() => resetFilter()}>Limpar filtros</button>
              </ul>
            )}
          </aside>
          <ul className="carListContainar">
            <ListCarHome announcements={filterItens} />
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
};
function toLowerCase(
  mark: string,
  color: string,
  year: string,
  fuel: string,
  price: string
): any {
  throw new Error("Function not implemented.");
}
