import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 13px;
  flex-direction: column;
  background-color: var(--color-grey10);
  font-family: var(--font-family-inter);
  h2 {
    padding-bottom: 15px;
    font-family: var(--font-family-lexend);
  }

  .errorMessage {
    font-size: 14px;
    color: var(--color-alert1);
  }
`;
