import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { StuledModalAnnouncement } from "./style";

interface Car {
  name: string;
  year: string;
  color: string;
  fuelType: string;
  mileage: number;
  value: string;
  description: string;
}

type MarksWithCars = { [mark: string]: Car[] };

export const AnuncioCarroForm = ({ setModalAdd }: any) => {
  const { postAnnouncement } = useContext(UserContext);

  const [allMarks, setAllMarks] = useState<string[]>([]);
  const [marks, setMarks] = useState<MarksWithCars>({});
  const [mark, setMark] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [fuel, setFuel] = useState<string>("");
  const [mileage, setMileage] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [priceFipe, setPriceFipe] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgCover, setImgCover] = useState<File | null>(null);
  const [gallery, setGallery] = useState<Array<File>>([]);

  useEffect(() => {
    fetch("https://kenzie-kars.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => {
        setMarks(data);
        setAllMarks(Object.keys(data));
      });
  }, []);

  const fetchCarsByMark = async (mark: string) => {
    const response = await fetch(
      `https://kenzie-kars.herokuapp.com/cars?brand=${mark}`
    );
    const data = await response.json();
    return data;
  };

  const getFuel = (carName: string) => {
    if (carName.includes("híbrido")) {
      return "Híbrido";
    } else if (carName.includes("flex")) {
      return "Gasolina / Etanol";
    } else if (carName.includes("elétrico")) {
      return "Elétrico";
    } else {
      return "Gasolina";
    }
  };

  const handleMarkChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMark = e.target.value;
    setMark(selectedMark);
    setModel("");
    setYear("");
    setFuel("");

    const carsByMark = await fetchCarsByMark(selectedMark);
    setMarks({ [selectedMark]: carsByMark });
  };

  const handleModelChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);

    const carsByMark = marks[mark];
    const selectedCar = carsByMark.find((car) => car.name === selectedModel);

    if (selectedCar) {
      setYear(selectedCar.year);
      setFuel(getFuel(selectedCar.name));
      setPriceFipe(selectedCar.value);
    } else {
      setYear("");
      setFuel("");
      setPriceFipe("");
    }
  };

  const handleImgCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImgCover(file);
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files);
      setGallery(fileList);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("mark", mark);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("fuel", fuel);
    formData.append("mileage", mileage);
    formData.append("color", color);
    formData.append("priceFipe", priceFipe);
    formData.append("price", price);
    formData.append("description", description);

    if (imgCover) {
      formData.append("imgCover", imgCover);
    }

    for (let i = 0; i < gallery.length; i++) {
      formData.append("gallery", gallery[i]);
    }

    postAnnouncement(formData);
    setModalAdd(false);
  };

  return (
    <StuledModalAnnouncement>
      <form onSubmit={handleSubmit}>
        <div className="divTitle">
          <h2>Criar anúncio</h2>
          <button className="buttonX" onClick={() => setModalAdd(false)}>
            X
          </button>
        </div>
        <p>informações do veículo</p>
        <div className="mark">
          <label>Marca:</label>
          <select value={mark} onChange={handleMarkChange}>
            <option value="">Selecione uma marca</option>
            {allMarks.map((mark) => (
              <option key={mark} value={mark}>
                {mark}
              </option>
            ))}
          </select>
        </div>
        <div className="model">
          <label>Modelo:</label>
          <select value={model} onChange={handleModelChange}>
            <option value="">Selecione um modelo</option>
            {mark &&
              marks[mark]?.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))}
          </select>
        </div>
        <div className="yearfuel">
          <div className="year">
            <label>Ano:</label>
            <input
              type="text"
              value={year}
              placeholder="2023"
              onChange={(e) => setYear(e.target.value)}
              disabled
            />
          </div>
          <div className="year">
            <label>Combustível:</label>
            <input
              type="text"
              value={fuel}
              placeholder="Gasolina"
              onChange={(e) => setFuel(e.target.value)}
              disabled
            />
          </div>
        </div>
        <div className="yearfuel">
          <div className="year">
            <label>Quilometragem:</label>
            <input
              type="text"
              value={mileage}
              placeholder="30.000"
              onChange={(e) => setMileage(e.target.value)}
            />
          </div>
          <div className="year">
            <label>Cor:</label>
            <input
              type="text"
              value={color}
              placeholder="Preto"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="yearfuel">
          <div className="year">
            <label>Preço Tabela Fipe:</label>
            <input
              type="text"
              value={priceFipe}
              placeholder="R$ 50.000"
              onChange={(e) => setPriceFipe(e.target.value)}
              disabled
            />
          </div>
          <div className="year">
            <label>Preço Venda:</label>
            <input
              type="text"
              value={price}
              placeholder="R$ 45.000"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
          <label>Descrição:</label>
          <textarea
            value={description}
            placeholder="Descrição do veículo..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="imgCover">
          <label>
            Imagem de Capa
            <input
              type="file"
              accept="image/*"
              onChange={handleImgCoverChange}
            />
          </label>
        </div>
        <div className="imgCover">
          <label>
            Galeria de Imagens
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryChange}
            />
          </label>
        </div>

        <div className="buttons">
          <button className="buttonCancelar" onClick={() => setModalAdd(false)}>
            Cancelar
          </button>
          <button className="enviar" type="submit">
            Criar anúncio
          </button>
        </div>
      </form>
    </StuledModalAnnouncement>
  );
};
