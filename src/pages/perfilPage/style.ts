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
    background-color: var(--color-grey7);
  }
  .card-perfil-user {
    position: absolute;
    background-color: var(--color-white-fixed);
    width: 80%;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -85%);
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 35px;
    height: auto;
    border-radius: 4px;
    div:first-child {
      height: 100px;
      width: 100px;
      p {
        font-size: 40px;
      }
    }
  }
  .emptyWarning {
    font-family: var(--font-family-lexend);
    color: var(--color-brand1);
    margin-top: 25px;
  }
  .card-list-cars {
    position: absolute;
    background-color: var(--color-grey8);
    width: 80%;
    top: calc(50% + 30vh);
    left: 50%;
    height: 760px;
    transform: translate(-50%, -50%);
    overflow-x: hidden;
    border-radius: 4px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      gap: 20px;
      padding: 20px;
      flex-wrap: wrap;
    }
  }

  // Media query: 426px

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
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 53px;
      color: #ffffff;
    }
  }
  .perfil-info-text {
    background-color: var(--color-white-fixed);
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
    h2 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;

      color: #212529;
    }
    p {
      padding: 10px;

      max-width: 100%;

      background: #edeafd;
      border-radius: 4px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #4529e6;
    }
  }
  .description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: rgb(33, 37, 41);
  }
  .button-create-announcement {
    padding: 20px;
    height: 48px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    border: 1.5px solid #4529e6;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    color: #4529e6;
  }

  @media (max-width: 426px) {
    height: 1100px;
    background-color: var(--color-grey7);
    .card-perfil-user {
      position: absolute;
      background-color: var(--color-white-fixed);
      width: 80%;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -85%);
      display: flex;
      flex-direction: column;
      padding: 40px;
      gap: 35px;
      height: auto;
    }
    .div-color-white {
      height: 60%;
      width: 100%;
      background-color: var(--color-grey7);
    }
    .card-list-cars {
      position: absolute;
      background-color: var(--color-grey8);
      width: 90%;
      top: calc(45% + 45vh);
      left: 50%;
      height: 400px;
      transform: translate(-50%, -50%);
      overflow-x: hidden;

      ul {
        display: flex;

        gap: 30px;
        padding: 20px;
        overflow-y: hidden;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
    }
  }
`;
