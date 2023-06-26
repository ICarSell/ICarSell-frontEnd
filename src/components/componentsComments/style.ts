import styled from "styled-components";

export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 751px;
  height: 220px;

  border-radius: 4px;

  background: #fdfdfd;

  margin-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;

    width: 672px;
    height: 100%;

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
`;

export const StyledCommentsDisabled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 751px;
  height: 220px;

  border-radius: 4px;

  background: #fdfdfd;

  margin-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;

    width: 672px;
    height: 100%;

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
      }
    }
  }
`;
