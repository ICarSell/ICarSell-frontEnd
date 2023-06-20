import styled from "styled-components";

export const StyledContainerModal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 15px;
  position: fixed;
  inset: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);

  .titleModal {
    font-family: var(--font-family-lexend);
  }

  .infoModal {
    font-family: var(--font-family-inter);
    font-size: var(--text-body2);
    font-weight: var(--text-weight500);
  }

  .modalUpdateAddress {
    padding: 16px 24px 16px 24px;
    width: 450px;
    border-radius: var(--radius-1);

    .containerInput {
      display: flex;
      gap: 10px;
    }
    
    .containerButton {
      width: 100%;
      display: flex;
      justify-content: end;
      gap: 10px;
      padding: 20px 0px;
    }
  }
  .modalUpdateUser {
    padding: 16px 24px 16px 24px;
    width: 450px;
    .containerButton {
      width: 100%;
      display: flex;
      justify-content: end;
      gap: 10px;
      padding: 20px 0px;
      button {
        width: 35%;
      }
    }
  }
`;
