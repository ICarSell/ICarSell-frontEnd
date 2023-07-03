import styled from "styled-components";

export const StyledEditModalAnnouncement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

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

    input:focus {
      outline: 1px solid #4529e6;
    }
    select:focus {
      outline: 1px solid #4529e6;
    }
    textarea:focus {
      outline: 1px solid #4529e6;
    }

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
      margin-bottom: 10px;
    }
    .mark {
      display: flex;
      flex-direction: column;
      gap: 5px;

      margin-bottom: 10px;

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

        color: black;
        @media (max-width: 425px) {
          height: 20px;
        }
      }
    }

    .model {
      display: flex;
      flex-direction: column;
      gap: 5px;

      margin-bottom: 10px;

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

        color: black;
        @media (max-width: 425px) {
          height: 20px;
        }
      }
    }

    .yearfuel {
      display: flex;
      justify-content: space-between;

      margin-bottom: 10px;
    }

    .year {
      display: flex;
      flex-direction: column;

      gap: 5px;

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

    gap: 5px;

    margin-bottom: 10px;

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
      gap: 5px;

      height: 75px;

      border: 1.5px solid #e9ecef;
      border-radius: 4px;

      text-overflow: clip;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: black;

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

  @media (max-width: 767px) {
    form {
      height: auto;
      .divTitle {
        height: 30px;
      }
    }
  }
  @media (max-width: 426px) {
    form {
      height: auto;
      width: 89%;
      padding: 18px 15px;
      margin-left: 8px;

      .divTitle {
        height: 30px;
      }
      .yearfuel {
        width: 100%;
        gap: 10px;
        .year {
          input {
            width: 100%;
            height: 20px;
          }
        }
      }
      .published {
        div {
          button {
            width: 140px;
            height: 30px;
          }
        }
      }
      .description {
        textarea {
          height: 45px;
        }
      }
      .imgCover {
        label {
          padding: 5px 20px;
        }
      }
      .buttons {
        justify-content: space-between;
        .buttonCancelar {
          line-height: 15px;
          font-size: 14px;
          width: 100px;
          height: 35px;
        }
        .enviar {
          font-size: 14px;
          line-height: 15px;
          height: 35px;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;

    gap: 5px;

    .buttonCancelar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 28px;
      gap: 10px;

      width: 270px;
      height: 48px;

      background: #dee2e6;

      border: 1.5px solid #dee2e6;
      border-radius: 4px;

      font-family: "Inter";
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

      background: #b0a6f0;

      border: 1.5px solid #b0a6f0;
      border-radius: 4px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0px;

      color: #edeafd;

      &:enabled {
        background: #4529e6;
      }
    }
  }

  .published {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 10px;

    label {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgb(33, 37, 41);
    }
    div {
      display: flex;
      justify-content: space-between;

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        gap: 10px;

        width: 228px;
        height: 48px;

        background: white;

        border: 1.5px solid #4529e6;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
      }
    }

    .selected {
      background-color: #4529e6;
      color: #fff;
    }
  }

  .imgCover {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 10px;
  }
  .imgCover label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #e9ecef;
    color: #212529;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #212529;
  }

  .imgCover label:hover {
    background-color: #ced4da;
  }

  .imgCover input[type="file"] {
    display: none;
  }
  .imgCover label.selected {
    background: #4529e6;
    color: white;
  }
`;
