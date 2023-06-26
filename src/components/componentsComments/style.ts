import styled from "styled-components";

export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 289px;

  background: var(--color-grey8);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 51%;
    height: 100%;

    background: rgb(253, 253, 253);

    border-radius: 4px;

    margin-left: 120px;
    margin-bottom: 40px;

    .containerForm {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      gap: 10px;

      width: 90%;
      height: 100%;

      background: #fdfdfd;

      .user {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 10px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        .imgUser {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 30px;
          height: 30px;

          color: white;

          border-radius: 50%;

          background: #4529e6;

          font-weight: 500;
          font-size: 18px;
        }
      }

      form {
        width: 100%;
        height: 128px;

        position: relative;

        textarea {
          resize: none;
          width: 100%;
          height: 100%;

          padding: 10px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;

          border: 2px solid #e9ecef;
          border-radius: 4px;
        }
        textarea::placeholder {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;

          color: #868e96;
        }

        .buttonComments {
          position: absolute;
          top: 80px;
          right: 10px;

          width: 108px;
          height: 38px;

          border-radius: 4px;
          border: 2px solid transparent;

          background: #4529e6;

          color: white;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      margin-left: 102px;
      width: 80%;
    }
  }
  @media (max-width: 769px) {
    .container {
      margin-left: 76px;
      width: 80%;
    }
  }
  @media (max-width: 426px) {
    .container {
      margin-left: 44px;
      width: 80%;
    }
  }
`;

export const StyledCommentsDisabled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 289px;

  background: var(--color-grey8);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 51%;
    height: 100%;

    background: rgb(253, 253, 253);

    border-radius: 4px;

    margin-left: 90px;
    margin-bottom: 40px;

    .containerForm {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      gap: 10px;

      width: 90%;
      height: 100%;

      background: #fdfdfd;

      .user {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 10px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        .imgUser {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 30px;
          height: 30px;

          color: white;

          border-radius: 50%;

          background: #4529e6;

          font-weight: 500;
          font-size: 18px;
        }
      }

      form {
        width: 100%;
        height: 128px;

        position: relative;

        textarea {
          resize: none;
          width: 100%;
          height: 100%;

          padding: 10px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;

          border: 2px solid #e9ecef;
          border-radius: 4px;
        }
        textarea::placeholder {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;

          color: #868e96;
        }

        .buttonComments {
          position: absolute;
          top: 80px;
          right: 10px;

          width: 108px;
          height: 38px;

          border-radius: 4px;
          border: 2px solid transparent;

          background: #ced4da;

          color: white;
          cursor: default;
        }
      }
    }
  }
  @media (max-width: 426px) {
    .container {
      margin-left: 44px;
      width: 80%;
    }
  }
`;
