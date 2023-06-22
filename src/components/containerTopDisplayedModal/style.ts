import styled from "styled-components";

export const StyledContainerModalDelete = styled.main`
  background-color: black;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  padding: 20px 20px 0;
`;

export const StyledContainModal = styled.div`
  width: 450px;
  height: 320px;
  padding: 20px;
  border-radius: var(--radius-1);
  background-color: var(--color-white-fixed);

  .titleModal {
    font-family: var(--font-family-lexend);
  }

  .containerImgGallery {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;
    background-color: var(--color-grey7);
    border-radius: var(--radius-1);
    margin-top: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: var(--radius-1);
    }
  }
`;
