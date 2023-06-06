import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./type";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "register":
        return css`
          padding: 10px 20px;
          font-size: 16px;
          border: 2px solid var(--color-grey4);
          border-radius: var(--radius-2);
          background-color: var(--color-grey10);
          font-weight: var(--text-weight600);
        `;
      case "filters":
        return css`
          padding: 12px 28px 12px 28px;
          font-size: 16px;
          border-radius: var(--radius-2);
          background-color: var(--color-brand2);
          color: var(--color-white-fixed);
          font-weight: var(--text-weight600);
        `;
      case "filterMaxAndMin":
        return css`
          width: 125px;
          height: 37px;
          font-size: 16px;
          font-family: "Lexend";
          background-color: var(--color-grey5);
          color: var(--color-grey3);
          font-weight: var(--text-weight600);
        `;
    }
  }}
`;
