import styled from "styled-components";

export const ModalDeleteAnnouncementStyle = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  padding-top: 40px;

  .container-modal-delete {
    width: 520px;
    height: 331px;
    background-color: var(--color-white-fixed);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 20px;
  }
  .delete-annountcement-closed {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .button-closed {
    cursor: pointer;
  }
  p {
    font-size: 20px;
  }
  h2 {
    font-size: 20px;
  }

  .description-text {
    font-size: 20px;
  }
  .div-button {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      width: 126px;
      padding: 12px;
      border-radius: 8px;
    }
    button:nth-child(1) {
      background-color: gray;
      color: black;
    }
    button:nth-child(2) {
      background-color: pink;
      color: red;
    }
  }
`;
