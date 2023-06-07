import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .containerImg {
    width: 375px;
    height: 625.33px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    h1 {
      width: 372px;
      height: 60px;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      color: #fdfdfd;

      z-index: 2;
      position: absolute;
      top: 76px;
    }

    p {
      width: 372px;
      height: 78px;
      font-family: Lexend;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      text-align: center;
      color: rgb(253, 253, 253);

      z-index: 1;
      position: absolute;
      top: 140px;
    }
  }

  .containerList {
    .filtro {
      display: none;
    }

    ul {
      width: 375px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      overflow-x: auto;

      padding-left: 25px;

      margin-top: 50px;
      margin-bottom: 50px;
    }
  }

  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    margin-bottom: 44px;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      p {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #868e96;

        span {
          color: rgb(92 95 98);
          margin-right: 7px;
        }
      }
    }
  }
`;
