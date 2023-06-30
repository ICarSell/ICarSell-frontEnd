import { Button } from "../button";
import { ContainerTopDisplayedModal } from "../containerTopDisplayedModal";
import { HeaderModal } from "../headerModal";

export const ModalGalleryImgCar = ({
  galleryImg,
  setOpenModalGallery,
}: any) => {
  return (
    <ContainerTopDisplayedModal>
      <HeaderModal>
        <h4 className="titleModal">Imagen do Veículo</h4>
        <Button
          type="button"
          buttonVariation="closeModalHeader"
          onClick={() => setOpenModalGallery(false)}
        >
          X
        </Button>
      </HeaderModal>
      <div className="containerImgGallery">
        <img src={galleryImg?.path} alt={galleryImg?.fileName} />
      </div>
    </ContainerTopDisplayedModal>
  );
};
