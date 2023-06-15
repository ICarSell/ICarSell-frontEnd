import styled from "styled-components";

export const StyledListCar = styled.li`
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

    .outFipe {
      display: none;
    }

    .lowestPriceFipe {
      width: 16px;
      height: 27px;
      font-size: var(--text-button-medium);
      font-weight: var(--text-weight500);
      font-family: "Inter";
      background-color: var(--color-random7);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white-fixed);
      position: relative;
      z-index: 0;
      top: -62px;
      right: -17px;
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
      width: 32px;
      height: 32px;
      background: #4529e6;
      border-radius: 150px;
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
`;
