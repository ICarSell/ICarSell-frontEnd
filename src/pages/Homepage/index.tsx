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

const marca = [
  "General motors",
  "Fiat",
  "Ford",
  "Honda",
  "Porsche",
  "Volkswagen",
];
const modelo = [
  "Civic",
  "Corolla",
  "Cruze",
  "Fit",
  "Gol",
  "Ka",
  "Onix",
  "Porsche 718",
];
const cor = ["Azul", "Branco", "Preto", "Cinza", "Prata", "Verde"];
const ano = ["2022", "2021", "2018", "2015", "2013", "2012", "2010"];
const combustivel = ["Gasolina", "Flex", "Etanol", "Diesel"];
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

  // Filter
  const [mark, setMark] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");

  const [announcements, setAnnouncements] = useState([]);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);
  const [keysFilter, setKeysFilter] = useState<string[]>([""]);

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
    if (key === "Marca") {
      if (mark === value) {
        setMark("");
      } else {
        setMark(value);
      }
    } else if (key === "Modelo") {
      if (model === value) {
        setModel("");
      } else {
        setModel(value);
      }
    } else if (key === "Cor") {
      if (color === value) {
        setColor("");
      } else {
        setColor(value);
      }
    } else if (key === "Ano") {
      if (year === value) {
        setYear("");
      } else {
        setYear(value);
      }
    } else if (key === "Combustivel") {
      if (fuel === value) {
        setFuel("");
      } else {
        setFuel(value);
      }
    } else if (key === "KM") {
      if (mileage === value) {
        setMileage("");
      } else {
        setMileage(value);
      }
    } else if (key === "Preço") {
      if (price === value) {
        setPrice("");
      } else {
        setPrice(value);
      }
    }
  };

  const filterWords: string[] = [];

  const applyFilters = () => {
    filterWords.push(
      mark,
      model,
      color.toLowerCase(),
      year,
      fuel,
      mileage,
      price
    );
    setKeysFilter(filterWords);

    console.log(filterWords);

    // Palavras a serem removidas
    const keysRemove = ["Minima", "Máxima", "Minimo", "Máximo"];

    // Array filtrado
    const arrayFiltrado = filterWords.filter(
      (string) => !keysRemove.includes(string)
    );

    const filteredItems = filterItens.filter((item) => {
      return arrayFiltrado.every((keyword) => {
        return Object.values(item).some((value) => {
          if (typeof value === "string" && value.includes(keyword)) {
            return true;
          }
          return false;
        });
      });
    });

    const filterByMileageAndPrice: any = [...filteredItems];

    filterWords.map((e) => {
      if (e === "Minima") {
        filterByMileageAndPrice.sort((a: any, b: any) => {
          return Number(a.mileage) - Number(b.mileage);
        });

        return;
      } else if (e === "Máxima") {
        filterByMileageAndPrice.sort((a: any, b: any) => {
          return Number(b.mileage) - Number(a.mileage);
        });
        return;
      }
    });

    filterWords.map((e) => {
      if (e === "Minimo") {
        filterByMileageAndPrice.sort((a: any, b: any) => {
          return Number(a.price) - Number(b.price);
        });

        return;
      } else if (e === "Máximo") {
        filterByMileageAndPrice.sort((a: any, b: any) => {
          return Number(b.price) - Number(a.price);
        });
        return;
      }
    });
    setFilterItens(filterByMileageAndPrice);
  };

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
              {keysFilter.map((e) => (
                <p>{e}</p>
              ))}
              <h2>Marca</h2>
              {marca.map((value) => (
                <li>
                  <PClick
                    variant={value == markColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("Marca", String(value)),
                        markColor === value
                          ? setMarkColor("")
                          : setMarkColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>Modelo</h2>
              {modelo.map((value) => (
                <li>
                  <PClick
                    variant={value == modelColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("Modelo", String(value)),
                        modelColor === value
                          ? setModelColor("")
                          : setModelColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>Cor</h2>
              {cor.map((value) => (
                <li>
                  <PClick
                    variant={value == corColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("Cor", String(value)),
                        corColor === value
                          ? setCorColor("")
                          : setCorColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>Ano</h2>
              {ano.map((value) => (
                <li>
                  <PClick
                    variant={value == anoColor ? "primary" : "secondary"}
                    onClick={() => {
                      verifyCheck("Ano", String(value)),
                        anoColor === value
                          ? setAnoColor("")
                          : setAnoColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>Combustivel</h2>
              {combustivel.map((value) => (
                <li>
                  <PClick
                    variant={
                      value == combustivelColor ? "primary" : "secondary"
                    }
                    onClick={() => {
                      verifyCheck("Combustivel", String(value)),
                        combustivelColor === value
                          ? setCombustivelColor("")
                          : setCombustivelColor(value);
                    }}
                  >
                    {value}
                  </PClick>
                </li>
              ))}
              <h2>KM</h2>
              {km.map((value) => (
                <li>
                  <PClick
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
                <li>
                  <PClick
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
              ))}

              <button onClick={() => applyFilters()}>Aplicar filtro</button>
            </ul>
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
