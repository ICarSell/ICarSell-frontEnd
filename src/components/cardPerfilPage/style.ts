import styled from "styled-components";

export const StyledListCarPerfil = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 312px;
  height: 350px;
  cursor: pointer;

  .cardImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 152px;
    background: #e9ecef;
    border: 2px solid #e9ecef;
    gap: 0px;
    border-radius: 4px;

    position: relative;

    .tag {
      position: absolute;
      top: 10px;
      left: 25px;
      background: #4529e6;
      color: white;

      width: 51px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #ffffff;
    }
    .active {
      position: absolute;
      top: 10px;
      left: 25px;
      background: #4529e6;

      width: 51px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #ffffff;
    }

    .notActive {
      position: absolute;
      top: 10px;
      left: 25px;
      background: #adb5bd;

      width: 61px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #ffffff;
    }
  }

  .cardImg img {
    width: 262px;
    height: 150.28px;
  }

  .cardTitle {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #212529;
  }

  .cardDescription {
    width: 312px;
    height: 48px;

    max-height: 48px;
    text-overflow: ellipsis;
    overflow: hidden;

    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }

  .cardUser {
    display: flex;
    align-items: center;
    gap: 8px;
    width: auto;
    height: 32px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: #4529e6;
      border-radius: 150px;

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: white;
      }
    }

    p {
      font-family: "Inter";
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #495057;
    }
  }

  .cardInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    padding: 0;
    width: 309px;
    height: 32px;

    .cardInfoDiv {
      display: flex;
      gap: 12px;
    }

    .cardProperty {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      gap: 10px;
      width: auto;
      height: 32px;
      background: #edeafd;
      border-radius: 4px;

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #4529e6;
      }
    }

    .cardPrice {
      font-family: "Lexend";
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #212529;
    }
  }
  .buttonsPerfilCard {
    display: flex;
    width: 100%;
    gap: 10px;

    .buttonEditar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 20px;
      gap: 10px;

      width: auto;
      height: 38px;

      border: 1.5px solid #212529;
      border-radius: 4px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 0px;

      color: #212529;
    }
  }
`;
