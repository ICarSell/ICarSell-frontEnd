import { PClick } from "../../pages/Homepage/style";
import { ModalFilterStyled } from "./style";

const km = ["Minima", "Máxima"];
const preco = ["Minimo", "Máximo"];

export const ModalFilter = ({
  announcements,
  setFilterItens,
  filterItens,
  setModalFilter,
  markColor,
  setMarkColor,
  modelColor,
  setModelColor,
  corColor,
  setCorColor,
  anoColor,
  setAnoColor,
  combustivelColor,
  setCombustivelColor,
  kmColor,
  setKmColor,
  priceColor,
  setPriceColor,
  keysFilter,
  setKeysFilter,
}: any) => {
  const verifyCheck = (key: string, value: string) => {
    if (key === "KM") {
      setKeysFilter([...keysFilter, value]);
      const filterByMileage = [...filterItens];
      if (value === "Minima") {
        filterByMileage.sort((a: any, b: any) => {
          a.mileage = parseFloat(a.mileage).toFixed(3);
          b.mileage = parseFloat(b.mileage).toFixed(3);
          return Number(a.mileage) - Number(b.mileage);
        });
      } else if (value === "Máxima") {
        filterByMileage.sort((a: any, b: any) => {
          a.mileage = parseFloat(a.mileage).toFixed(3);
          b.mileage = parseFloat(b.mileage).toFixed(3);
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
        filterByprice.sort((a: any, b: any) => {
          a.price = parseFloat(a.price).toFixed(3);
          b.price = parseFloat(b.price).toFixed(3);
          return Number(a.price) - Number(b.price);
        });
      } else if (value === "Máximo") {
        filterByprice.sort((a: any, b: any) => {
          a.price = parseFloat(a.price).toFixed(3);
          b.price = parseFloat(b.price).toFixed(3);
          return Number(b.price) - Number(a.price);
        });
      }
      setFilterItens(filterByprice);
      return;
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

    const filteredAnnouncements = filterItens.filter((element: any) => {
      const itemValue = element[key].toLowerCase();
      const searchValue = value.toLowerCase();
      const itemIncludes = itemValue.includes(searchValue);
      if (itemIncludes) {
        return element;
      }
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
  const renderedString: string[] = [];

  return (
    <ModalFilterStyled>
      <div className="div-filter">
        <h2>Filtros</h2>
        <p
          onClick={() => setModalFilter(false)}
          className="closed-button-modal"
        >
          X
        </p>
      </div>
      <aside className="filtro">
        <ul className="ulFilter">
          <h2>Marca</h2>
          {announcements.map((value: any) => {
            if (!renderedString.includes(value.mark)) {
              renderedString.push(value.mark);
              return (
                <li key={value.id}>
                  <PClick
                    disabled={markColor != "primary" ? true : false}
                    variant={value.mark === markColor ? "primary" : "secondary"}
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
          {announcements.map((value: any) => {
            if (!renderedString.includes(value.model.split(" ")[0])) {
              renderedString.push(value.model.split(" ")[0]);
              return (
                <li key={value.id}>
                  <PClick
                    disabled={modelColor != "primary" ? true : false}
                    variant={
                      value.model === modelColor ? "primary" : "secondary"
                    }
                    onClick={() => {
                      verifyCheck("modelo", String(value.model).split(" ")[0]);
                      modelColor === value.model
                        ? setModelColor("")
                        : setModelColor(value.model);
                    }}
                  >
                    {value.model.split(" ")[0]}
                  </PClick>
                </li>
              );
            }
            return null; // Se a marca já existir, retorna null para não criar um novo elemento
          })}
          <h2>Cor</h2>
          {announcements.map((value: any) => {
            if (!renderedString.includes(value.color.toLowerCase())) {
              renderedString.push(value.color.toLowerCase());
              return (
                <li key={value.id}>
                  <PClick
                    disabled={corColor != "primary" ? true : false}
                    variant={value.color === corColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("color", String(value.color.toLowerCase()));
                      corColor === value.color
                        ? setCorColor("")
                        : setCorColor(value.color);
                    }}
                  >
                    {value.color[0].toUpperCase() +
                      value.color.substring(1).toLowerCase()}
                  </PClick>
                </li>
              );
            }
            return null; // Se a marca já existir, retorna null para não criar um novo elemento
          })}
          <h2>Ano</h2>
          {announcements.map((value: any) => {
            if (!renderedString.includes(value.year)) {
              renderedString.push(value.year);
              return (
                <li key={value.id}>
                  <PClick
                    disabled={anoColor != "primary" ? true : false}
                    variant={value.year === anoColor ? "primary" : "secondary"}
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
          {announcements.map((value: any) => {
            if (!renderedString.includes(value.fuel)) {
              renderedString.push(value.fuel);
              return (
                <li key={value.id}>
                  <PClick
                    disabled={combustivelColor != "primary" ? true : false}
                    variant={
                      value.fuel === combustivelColor ? "primary" : "secondary"
                    }
                    onClick={() => {
                      const firstLetter = value.fuel.charAt(0).toUpperCase();
                      const remainingLetters = value.fuel
                        .slice(1)
                        .toLowerCase();
                      const formattedValue = firstLetter + remainingLetters;
                      verifyCheck("fuel", formattedValue);
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
          {km.map((value, index: number) => (
            <li key={index}>
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
          {preco.map((value, index: number) => (
            <div className="column-price-and-KM" key={index}>
              <li key={index}>
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
            {keysFilter.map((e: any, index: number) => (
              <li className="key-filter" key={index}>
                {e}
              </li>
            ))}
            <button className="reset-filter" onClick={() => resetFilter()}>
              Limpar filtros
            </button>
          </ul>
        )}
        <div className="view-announcement">
          <button onClick={() => setModalFilter(false)}>Ver anúncios</button>
        </div>
      </aside>
    </ModalFilterStyled>
  );
};
