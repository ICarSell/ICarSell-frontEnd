import styled from "styled-components";

export const StuledModalAnnouncement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 5;

  background-color: rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;

    width: 520px;
    height: auto;

    padding: 10px;

    background: #ffffff;
    border-radius: 8px;
    padding: 18px 24px 18px 24px;

    .divTitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      height: 56px;

      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #212529;

      button {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #212529;

        background: transparent;
      }
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #000000;

      height: 24px;
      margin-bottom: 24px;
    }
    .mark {
      display: flex;
      flex-direction: column;
      gap: 10px;

      margin-bottom: 24px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      color: #212529;

      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        gap: 10px;

        height: 48px;

        border: 1.5px solid #e9ecef;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;

        color: #868e96;
      }
    }

    .model {
      display: flex;
      flex-direction: column;
      gap: 10px;

      margin-bottom: 24px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      color: #212529;

      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        gap: 10px;

        height: 48px;

        border: 1.5px solid #e9ecef;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;

        color: #868e96;
      }
    }

    .yearfuel {
      display: flex;
      justify-content: space-between;

      margin-bottom: 24px;

      .year {
        display: flex;
        flex-direction: column;

        gap: 10px;

        label {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;

          color: #212529;
        }

        input {
          width: 226px;
          height: 48px;

          padding: 0px 16px;

          border: 1.5px solid #e9ecef;
          border-radius: 4px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 0px;

          color: #868e96;
        }
      }
    }
    .description {
      display: flex;
      flex-direction: column;

      gap: 10px;

      margin-bottom: 24px;

      label {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #212529;
      }

      textarea {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px 16px;
        gap: 10px;

        height: 85px;

        border: 1.5px solid #e9ecef;
        border-radius: 4px;

        text-overflow: clip;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;

        color: #495057;

        resize: none;
      }
      textarea::-webkit-scrollbar {
        width: 3px;
        height: 3px; 
      }

      textarea::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
      }

      textarea::-webkit-scrollbar-thumb {
        background-color: #e9ecef;
      }
    }

    .buttons {
        display: flex;
        justify-content: flex-end; 
        
        gap: 10px;

        .buttonCancelar{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 28px;
            gap: 10px;

            width: 126px;
            height: 48px;

            background: #DEE2E6;

            border: 1.5px solid #DEE2E6;
            border-radius: 4px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 0px;

            color: #495057;
        }
        .enviar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 28px;
            gap: 10px;

            width: 193px;
            height: 48px;

            background: #B0A6F0;

            border: 1.5px solid #B0A6F0;
            border-radius: 4px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 0px;

            color: #EDEAFD;

            &:enabled {
                background: #4529E6;    
            }
        }
    }

    .imgCover {
      display: flex;
      flex-direction: column;

      gap: 10px;

      margin-bottom: 24px;

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        background-color: #e9ecef;
        color: #212529;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #212529;

        &:hover {
            background-color: #ced4da;
        }

        input[type='file'] {
            display: none;
        }
    }

    
  }
`;
