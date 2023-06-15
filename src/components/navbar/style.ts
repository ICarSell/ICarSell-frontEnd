import styled from "styled-components";

export const NavMain = styled.nav`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 70px;
  box-shadow: 0px 33px 44px -19px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }

  background-color: var(--color-white-fixed);
  .logo {
    padding: 20px 25px;
    height: 70px;
  }
  .desktop-div-main {
    padding-top: 15px;
    @media (min-width: 700px) {
      border-left: 3px solid var(--color-grey6);
      padding: 15px 35px;
      height: 100%;
    }
    img {
      height: 30px;
      padding-top: 14px;
      padding-right: 14px;

      @media (min-width: 700px) {
        display: none;
      }
    }

    .desktop-div {
      display: none;
      @media (min-width: 700px) {
        display: flex;
        gap: 35px;
        a {
          text-decoration: none;
          font-family: var(--font-family-inter);
          color: var(--color-grey2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          padding-top: 13px;
        }
        button {
          margin-right: 20px;
        }
      }
    }
    .desktop-div-user {
      display: flex;
      gap: 22px;
      position: relative;
      padding-top: 8px;
      .img-user {
        background-color: var(--color-random12);
        border-radius: 100%;
        height: 30px;
        width: 30px;
        cursor: pointer;
      }
      h3 {
        cursor: pointer;
        padding-top: 4px;
        padding-right: 35px;
        font-family: var(--font-family-inter);
        color: var(--color-grey2);
        font-size: var(--text-body1);
        font-weight: var(--text-weight400);
      }
    }
  }
  .dropDown-div {
    img {
      height: 40px;
      padding-top: 24px;
      padding-right: 14px;
    }
    div {
      width: 100%;
      bottom: -115px;
      left: 0px;
      position: absolute;
      background-color: var(--color-white-fixed);
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      box-shadow: 0px 33px 44px -19px rgba(0, 0, 0, 0.18);
      a {
        text-decoration: none;
        font-family: var(--font-family-inter);
        color: var(--color-grey2);
        font-size: var(--text-body1);
        font-weight: var(--text-weight600);
        padding: 10px 0 10px 22px;
      }
      button {
        margin: 10px 22px;
        height: 46px;
      }
    }
  }
`;
