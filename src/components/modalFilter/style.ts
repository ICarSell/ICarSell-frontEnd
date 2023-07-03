import styled from "styled-components";

export const ModalFilterStyled = styled.div`
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  position: fixed;
  left: 0;
  width: 100%;
  padding-top: 80px;
  padding-left: 30px;
  height: 100vh;
  overflow: auto;

  .div-filter {
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 20px;
      cursor: pointer;
      font-family: inter;
      color: var(--color-grey5);
    }
    h2 {
      font-size: 16px;
      color: var(--color-grey-1);
      font-family: inter;
    }
  }

  .ulFilter {
    h2 {
      font-family: inter;
      font-size: 28px;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
    .key-filter {
      padding: 10px;
      background-color: var(--color-brand1);
      width: 70%;
      border-radius: 8px;
      color: white;
      font-family: inter;
    }
    .reset-filter {
      margin: 0 auto;
      width: 279px;
      height: 48px;
      color: white;
      border-radius: 8px;
      background-color: var(--color-brand1);
      font-size: 16px;
      font-family: inter;
      margin-bottom: 20px;
    }
  }
  .view-announcement {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 279px;
      height: 48px;
      color: white;
      border-radius: 8px;
      background-color: var(--color-brand1);
      font-size: 16px;
      font-family: inter;
    }
  }
`;
