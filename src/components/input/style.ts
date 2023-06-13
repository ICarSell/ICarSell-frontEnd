import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-grey1);
    font-size: var(--text-body2);
    font-weight: var(--text-weight500);
  }

  input {
    height: 40px;
    margin-top: 5px;
    padding-left: 10px;
    font-size: var(--text-body1);
    font-weight: var(--text-weight400);
    font-family: var(--font-family-inter);
    border-radius: var(--radius-2);
    border: 2px solid var(--color-grey6);
    color: var(--color-grey3);
  }
`;
