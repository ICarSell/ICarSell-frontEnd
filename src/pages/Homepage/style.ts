import styled from "styled-components";
import imgMobile from "../../assets/carMobile.png";
import imgDesk from "../../assets/carDesk.png";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 376px) {
    width: 100%;
  }

  .containerGradient {
    background-image: url(${imgMobile});
    background-position: center;
    background-size: cover;

    .containerImg {
      width: 375px;
      height: 625.33px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
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
        position: absolute;
        top: 140px;
      }
      @media (min-width: 376px) {
        width: 100%;
        display: flex;
        align-items: center;
        h1 {
          font-size: 36px;
          top: 190px;
        }
        p {
          font-size: 32px;
          width: 100%;
          top: 250px;
        }
      }
    }
    @media (min-width: 376px) {
      background-image: url(${imgDesk});
      background-position: center;
      background-size: cover;
      width: 100%;
    }
  }

  .containerList {
    @media (min-width: 376px) {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    .filtro {
      display: none;
      @media (min-width: 376px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-family: "Lexend";
        padding-top: 19px;
        margin-top: 50px;
        padding-left: 20px;
        width: 454px;
        margin-right: 31px;
      }
      .marca {
        display: flex;
        flex-direction: column;
      }
      .filterListContainer {
        @media (min-width: 376px) {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 10px;
          p {
            color: var(--color-grey3);
          }
        }
      }

      .km {
        .containerButton {
          padding-top: 25px;
          display: flex;
          gap: 15px;
        }
      }
      .preco {
        .containerButton {
          padding-top: 25px;
          display: flex;
          gap: 15px;
        }
      }
    }

    .carListContainar {
      width: 375px;
      display: flex;
      flex-direction: row;
      gap: 12px;

      overflow-x: auto;

      padding-left: 25px;

      margin-top: 50px;
      margin-bottom: 50px;
    }
    .carListContainar {
      @media (min-width: 376px) {
        overflow-x: hidden;
        flex-wrap: wrap;
        width: 100%;
        align-content: flex-start;
        gap: 86px 48px;
      }
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

      @media (min-width: 376px) {
        display: flex;
        flex-direction: row;
      }
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
