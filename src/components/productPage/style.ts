import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    to top,
    var(--color-grey8) 70%,
    var(--color-brand1) 30%
  );
  width: 100%;
  padding: 35px 0;
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
