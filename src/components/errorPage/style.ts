import styled from "styled-components";

export const ErrorStyled = styled.div`
  background-color: #f1f1f1;
  font-family: var(--font-family-lexend);
  .vertical-center {
    min-height: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    .container {
      max-width: 1100px;
      margin: 0 auto;
      .text-center {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
    }
  }
`;
