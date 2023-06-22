import { StyledContainModal, StyledContainerModalDelete } from "./style";

export const ContainerTopDisplayedModal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyledContainerModalDelete>
      <StyledContainModal>{children}</StyledContainModal>
    </StyledContainerModalDelete>
  );
};
