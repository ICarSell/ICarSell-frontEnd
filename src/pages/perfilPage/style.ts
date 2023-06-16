import styled from "styled-components";

export const PerfilPageStyle = styled.div`
  position: relative;
  height: 1500px;
  width: 100%;

  .div-color-purple {
    height: 20%;
    width: 100%;
    background-color: var(--color-brand1);
  }
  .div-color-white {
    height: 80%;
    width: 100%;
    background-color: var(--color-grey8);
  }
  .card-perfil-user {
    position: absolute;
    background-color: var(--color-white-fixed);
    width: 80%;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -85%);
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 20px;
  }
  .card-list-cars {
    position: absolute;
    background-color: var(--color-grey8);
    width: 90%;
    top: calc(50% + 30vh);
    left: 50%;
    height: 900px;
    transform: translate(-50%, -50%);
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  }

  .image-perfil {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 50px;
      color: white;
    }
  }
  .perfil-info-text {
    background-color: var(--color-white-fixed);
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
    p {
      padding: 10px;
      background-color: var(--color-brand3);
      color: var(--color-brand2);
      border-radius: 8px;
      max-width: 100%;
    }
  }
  .button-create-announcement {
    padding: 20px;
    height: 48px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid blue;
  }
`;
