import styled from "styled-components";

export const StyledConatainerRL = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey8);
  padding: 0 15px;

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
`;
