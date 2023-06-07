import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    to top,
    var(--color-grey8) 70%,
    var(--color-brand1) 30%
  );
  width: 100%;
  padding: 35px 0px 10px 0px;
  .img_user {
    width: 80%;
    height: 255px;
    background-color: var(--color-white-fixed);
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    border-radius: 4px;
    img {
      margin: 0 auto;
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

    div {
      display: flex;
      flex-direction: column;
      gap: 25px;
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
  background-color: var(--color-grey8);
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .aside-div {
    background-color: var(--color-grey10);
    padding: 15px 28px;
    margin: 0 auto;
    width: 95%;
    border-radius: 4px;
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
      padding: 27px 7px;
      width: 50%;
    }
  }
  .perfil-column {
    padding: 15px 28px;
    width: 98%;
    background-color: var(--color-grey10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
