import styled from "styled-components";

export const Container = styled.div`
  padding-top: 65px;
  background-image: linear-gradient(
    to top,
    var(--color-grey8) 65%,
    var(--color-brand1) 35%
  );
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`
  @media (min-width: 1024px) {
    width: 70%;
  }
  width: 100%;
  padding: 35px 0px 10px 0px;
  .img_car {
    width: 80%;
    height: 255px;

    background-color: var(--color-white-fixed);
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 15px 10px;
    img {
      margin: 0 auto;
      width: 100%;
      padding: 17px 7px;
      max-height: 100%;
      @media (min-width: 680px) {
        width: 60%;
        max-height: 100%;
      }
      @media (min-width: 1070px) {
        width: 45%;
        max-height: 100%;
      }
      @media (min-width: 2070px) {
        width: 35%;
        max-height: 100%;
      }
    }
  }
  .car_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
    padding: 15px 15px;
    background-color: var(--color-grey10);
    gap: 15px;
    border-radius: 4px;
    h2 {
      margin-bottom: 40px;
      font-family: var(--font-family-lexend);
      font-size: var(--text-heading6);
      font-weight: var(--text-weight600);
    }
    button {
      width: 100px;
      @media (min-width: 375px) {
        display: block;
      }
      @media (min-width: 700px) {
        width: 100px;
      }
    }
    .car_detail {
      display: flex;
      flex-direction: column;

      gap: 25px;
      @media (min-width: 1100px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 15px;
      }
      p {
        font-family: var(--font-family-lexend);
        margin-bottom: 15px;
        font-size: var(--text-body1);
        font-weight: var(--text-weight500);
      }
      div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        p {
          padding: 4px 8px;
          color: var(--color-brand1);
          font-weight: var(--text-weight500);
          font-size: var(--text-body2);
          background-color: var(--color-brand4);
          font-family: var(--font-family-inter);
        }
      }
    }
  }

  .car-desc {
    width: 80%;

    background-color: var(--color-grey10);
    margin: 20px auto;

    border-radius: 4px;
    h2 {
      padding: 15px 28px;
      font-family: var(--font-family-lexend);
      font-size: var(--text-heading6);
      font-weight: var(--text-weight600);
    }
    p {
      font-family: var(--font-family-inter);
      padding: 25px 28px;
      font-size: var(--text-body1);
      font-weight: var(--text-weight400);
    }
  }
`;

export const AsideStyled = styled.aside`
  @media (min-width: 1024px) {
    width: 40%;
    padding: 50px 50px 50px 0;
  }
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;
  .aside-div {
    background-color: var(--color-grey10);
    padding: 15px 28px;
    margin: 0 auto;
    width: 80%;
    border-radius: 4px;

    h2 {
      font-family: var(--font-family-lexend);
      font-size: var(--text-heading6);
      font-weight: var(--text-weight600);
    }
  }
  ul {
    background-color: var(--color-grey10);
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
  }
  li {
    background-color: var(--color-grey7);
    width: 30%;
    display: flex;
    justify-content: center;
    img {
      padding: 18px 7px;
      width: 100%;
    }
  }
  .perfil-column {
    padding: 15px 28px;
    width: 80%;
    margin: 0 auto;
    background-color: var(--color-grey10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    div {
      height: 75px;
      width: 75px;
      p {
        font-size: 40px;
      }
    }
    h2 {
      font-family: var(--font-family-lexend);
      font-size: var(--text-heading6);
      font-weight: var(--text-weight600);
    }
    p {
      font-family: var(--font-family-inter);
      padding: 25px 28px;
      font-size: var(--text-body1);
      font-weight: var(--text-weight400);
    }
    .perfil-description {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    img {
      border-radius: 100%;
      width: 77px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background-color: black;
      color: white;
      padding: 12px 28px;
      border-radius: 4px;
    }
  }
`;

export const LoadigPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
  .logo {
    width: 300px;
  }
  .spin {
    width: 150px;
    height: 150px;
  }
`;
