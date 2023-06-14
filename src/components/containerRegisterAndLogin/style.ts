import styled from "styled-components";

export const StyledConatainerRL = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey8);
  padding: 100px 15px;

  .formLogin {
    padding: 44px 48px 44px 48px;
    width: 412px;
    height: auto;
    border-radius: var(--radius-2);

    .forgotPassword {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      p {
        color: var(--color-grey2);
        font-size: var(--text-body2);
        font-weight: var(--text-weight500);
        cursor: pointer;
      }
    }

    .noHaveAccount {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      p {
        font-size: var(--text-body2);
        font-weight: var(--text-weight500);
      }
    }
  }
  .formRegister {
    .formDoubleInput {
      display: flex;
      width: 100%;
      input {
        width: 90%;
      }
    }
    span {
      color: var(--color-alert1);
      font-weight: var(--text-weight600);
      width: 100%;
    }
    .formButtonSeller {
      display: flex;
      gap: 15px;
      button {
        width: 90%;
        height: 40px;
        border-radius: 8px;
        font-weight: var(--text-weight600);
        background-color: var(--color-white-fixed);
        border: 2px solid var(--color-grey3);
        :focus {
          background-color: var(--color-brand2);
          color: var(--color-white-fixed);
          border: none;
          outline: 0;
        }
      }
    }
  }
`;
