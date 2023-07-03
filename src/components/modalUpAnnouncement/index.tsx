import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { StyledEditModalAnnouncement } from "./style";

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

export const EditAnnouncementCarForm = ({
  editCar,
  setModalEdit,
  setModalDelete,
}: any) => {
  const { updateAnnouncement } = useContext(UserContext);

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
  const [publicado, setPublicado] = useState<boolean>(false);

  const [imgCover, setImgCover] = useState<File | null>(null);
  const [gallery, setGallery] = useState<Array<File>>([]);

  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    if (editCar) {
      const {
        mark,
        model,
        year,
        fuel,
        mileage,
        color,
        price,
        priceFipe,
        description,
        isActive,
      } = editCar;

      setMark(mark);
      setModel(model);
      setYear(year);
      setFuel(fuel);
      setMileage(mileage);
      setColor(color);
      setPriceFipe(priceFipe.replace(/\B(?=(\d{3})+(?!\d))/g, "."));
      setPrice(price);
      setDescription(description);
      setPublicado(isActive);
    }
  }, [editCar]);

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

    const label = e.target.closest("label");
    if (file) {
      label?.classList.add("selected");
    } else {
      label?.classList.remove("selected");
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files);
      setGallery(fileList);

      const label = e.target.closest("label");
      if (fileList.length > 0) {
        label?.classList.add("selected");
      } else {
        label?.classList.remove("selected");
      }
    }
  };

  const validateForm = () => {
    if (
      mark.trim() === "" ||
      model.trim() === "" ||
      mileage.trim() === "" ||
      color.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setFormValid(false);
      return;
    } else {
      setFormValid(true);
      const km = mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      const p = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      const formData = new FormData();
      formData.append("mark", mark);
      formData.append("model", model);
      formData.append("year", year);
      formData.append("fuel", fuel);
      formData.append("mileage", km);
      formData.append("color", color);
      formData.append("priceFipe", priceFipe);
      formData.append("price", p);
      formData.append("description", description);
      formData.append("isActive", publicado ? "true" : "false");

      if (imgCover) {
        formData.append("imgCover", imgCover);
      }

      for (let i = 0; i < gallery.length; i++) {
        formData.append("gallery", gallery[i]);
      }

      const idCar: string = editCar.id;
      updateAnnouncement(formData, idCar);
      setModalEdit(false);
    }
  };

  const excluir = () => {
    setModalEdit(false);
    setModalDelete(true);
  };

  return (
    <StyledEditModalAnnouncement>
      <form onSubmit={handleSubmit}>
        <div className="divTitle">
          <h2>Editar anúncio</h2>
          <button className="buttonX" onClick={() => setModalEdit(false)}>
            X
          </button>
        </div>
        <p>informações do veículo</p>
        <div className="mark">
          <label>Marca:*</label>
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
          <label>Modelo:*</label>
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
            <label>Quilometragem:*</label>
            <input
              type="number"
              value={mileage}
              placeholder="30.000"
              onChange={(e) => setMileage(e.target.value)}
            />
          </div>
          <div className="year">
            <label>Cor:*</label>
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
            <label>Preço Venda:*</label>
            <input
              type="number"
              value={price}
              placeholder="R$ 45.000"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
          <label>Descrição:*</label>
          <textarea
            value={description}
            placeholder="Descrição do veículo..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="published">
          <label>Publicado:</label>
          <div>
            <button
              type="button"
              className={publicado ? "selected" : ""}
              onClick={() => setPublicado(true)}
            >
              Sim
            </button>
            <button
              type="button"
              className={!publicado ? "selected" : ""}
              onClick={() => setPublicado(false)}
            >
              Não
            </button>
          </div>
        </div>
        <div className="imgCover">
          <label className={imgCover ? "selected" : ""}>
            Imagem de Capa
            <input
              type="file"
              accept="image/*"
              onChange={handleImgCoverChange}
            />
          </label>
        </div>
        <div className="imgCover">
          <label className={gallery.length > 0 ? "selected" : ""}>
            Galeria de Imagens ({gallery.length}/6 imagens)
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryChange}
            />
          </label>
        </div>

        {formValid === false && (
          <p className="error">Preencha todos os campos obrigatórios *</p>
        )}

        <div className="buttons">
          <button
            type="button"
            className="buttonCancelar"
            onClick={() => excluir()}
          >
            Excluir anúncio
          </button>
          <button className="enviar" type="submit">
            Editar anúncio
          </button>
        </div>
      </form>
    </StyledEditModalAnnouncement>
  );
};
