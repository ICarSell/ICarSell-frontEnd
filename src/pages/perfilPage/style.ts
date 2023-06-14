import styled from "styled-components";

export const PerfilPageStyle = styled.div`
  position: relative;
  height: 2000px;
  width: 100%;

  div:nth-child(1) {
    height: 20%;
    width: 100%;
    background-color: var(--color-brand1);
  }
  div:nth-child(2) {
    height: 80%;
    width: 100%;
    background-color: var(--color-grey8);
  }
  div:nth-child(3) {
    position: absolute;
    background-color: var(--color-white-fixed);
    width: 80%;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -85%);
  }
  div:nth-child(4) {
    position: absolute;
    background-color: red;
    width: 90%;
    top: calc(35% + 30vh);
    left: 50%;
    height: 500px;
    transform: translate(-50%, -50%);
  }
  .card-perfil-user {
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 20px;
    div:nth-child(1) {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    div:nth-child(2) {
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
  }
`;
