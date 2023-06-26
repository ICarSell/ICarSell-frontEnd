import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AsideStyled, Container, Main } from "./style";

import { Button } from "../../components/button";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useState } from "react";
import { ModalUpdateAddress } from "../../components/globalModal/updateAddress";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ToastContainer } from "react-toastify";
import { ModalUpdateUser } from "../../components/globalModal/updateUser";
import { ModalDeleteUser } from "../../components/globalModal/modalDeleteUSer";
import { ModalGalleryImgCar } from "../../components/modalGalleryImgCar";
import { AddComents } from "../../components/componentsComments";

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

  const redirectToBuy = (number: string, namecar: string) => {
    const linkWhatsApp = `https://wa.me/${number}?text=Olá%20gostaria%20de%20saber%20mais%20sobre%20seu%20carro%20${namecar}%20na%20motors%20shop`;
    window.open(linkWhatsApp, "_blank");
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      {openModalGallery && (
        <ModalGalleryImgCar
          galleryImg={galleryImg}
          setOpenModalGallery={setOpenModalGallery}
        />
      )}
      <Container>
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
            <Button
              onClick={() =>
                redirectToBuy(announcement.user.phone, announcement.model)
              }
              type="button"
              buttonVariation="filters"
            >
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
                    setOpenModalGallery(true);
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
            <div className="image-perfil">
              <p>{announcement?.user.name[0].toUpperCase()}</p>
            </div>
            <h2>{announcement?.user.name}</h2>
            <p>{announcement?.user.description}</p>
            <button onClick={() => pageNext()}>Ver todos os anuncios</button>
          </div>
        </AsideStyled>
        {/* <AddComents /> */}
      </Container>
      <Footer />
    </>
  );
};
