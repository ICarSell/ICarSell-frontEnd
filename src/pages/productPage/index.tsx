import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AsideStyled, Container, Main } from "./style";
import imgPerfil from "../../assets/perfil.png";
import { Button } from "../../components/button";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useState } from "react";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ToastContainer } from "react-toastify";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";
import { ModalGalleryImgCar } from "../../components/modalGalleryImgCar";

export const ProductPage = () => {
  const { announcement, navigate, setAnnouncementUserId } =
    useContext(UserContext);
  const { openModalUpdateAddress, openModalUpdateUser, openModelDeleteUser } =
    useContext(ModalContext);
  const [galleryImg, setGalleryImg] = useState(null);
  const [openModalGallery, setOpenModalGallery] = useState(false);

  if (!announcement) {
    return <h1>Carregando...</h1>;
  }
  const pageNext = () => {
    setAnnouncementUserId(announcement.user.id);
    localStorage.setItem("@ANNUSERID", JSON.stringify(announcement.user.id));
    navigate("/page-user");
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Container>
        {openModalGallery && (
          <ModalGalleryImgCar
            galleryImg={galleryImg}
            setOpenModalGallery={setOpenModalGallery}
          />
        )}
        {openModalUpdateAddress && <ModalUpdateAddress />}
        {openModalUpdateUser && <ModalUpdateUser />}
        {openModelDeleteUser && <ModalDeleteUser />}
        <Main>
          <div className="img_car">
            <img
              src={`http://localhost:3000/${announcement?.imgCover.path.replace(
                /\\/g,
                "/"
              )}`}
              alt={announcement?.imgCover.fileName}
            />
          </div>
          <div className="car_info">
            <h2>
              {announcement?.mark} - {announcement?.model}
            </h2>
            <div className="car_detail">
              <div>
                <p>{announcement?.year}</p>
                <p>{announcement?.mileage}</p>
              </div>
              <p>R$ {announcement?.price}</p>
            </div>
            <Button type="button" buttonVariation="filters">
              Comprar
            </Button>
          </div>
          <div className="car-desc">
            <h2>Descrição</h2>
            <p>{announcement?.description}</p>
          </div>
        </Main>
        <AsideStyled>
          <div className="aside-div">
            <h2>Fotos</h2>
            <ul>
              {announcement?.gallery.map((value: any, index: any) => (
                <li
                  key={index}
                  onClick={() => {
                    setGalleryImg(value);
                    setOpenModalGallery(true)
                  }}
                >
                  <img
                    src={`http://localhost:3000/${value?.path.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={announcement?.imgCover.fileName}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="perfil-column">
            <div>
              <img src={imgPerfil} alt="" />
            </div>
            <h2>{announcement?.user.name}</h2>
            <p>{announcement?.user.description}</p>
            <button onClick={() => pageNext()}>Ver todos os anuncios</button>
          </div>
        </AsideStyled>
      </Container>
      <Footer />
    </>
  );
};
