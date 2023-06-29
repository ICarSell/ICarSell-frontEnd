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
    gap: 45px;
    padding: 20px;
  }
  .delete-annountcement-closed {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    p {
      font-weight: 700;
      font-size: 16px;
      font-family: sans-serif;
    }
  }
  .button-closed {
    cursor: pointer;
  }
  p {
    font-size: 20px;
    color: var(--color-grey2);
  }
  h2 {
    font-size: 18px;
    font-family: sans-serif;
  }

  .description-text {
    font-size: 18px;
    line-height: 25px;
    font-family: sans-serif;
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
      background-color: var(--color-grey5);
      color: var(--color-grey2);
      font-weight: 700;
    }
    button:nth-child(2) {
      width: 170px;
      font-weight: 700;
      background-color: pink;
      color: red;
    }
  }
`;
