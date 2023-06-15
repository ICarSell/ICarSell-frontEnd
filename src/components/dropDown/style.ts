import styled from "styled-components";

export const DropDownMain = styled.section`
  width: 170px;
  padding: 10px 15px;
  position: absolute;
  left: -30px;
  top: 42px;
  background-color: var(--color-white-fixed);
  box-shadow: 2px 6px 26px 3px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      padding-top: 4px;
      font-family: var(--font-family-inter);
      color: var(--color-grey2);
      font-size: var(--text-body1);
      font-weight: var(--text-weight400);
      cursor: pointer;
    }
  }
`;
