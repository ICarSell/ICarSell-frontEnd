import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./type";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "register":
        return css`
          padding: 10px 20px;
          border: 2px solid var(--color-grey4);
          font-size: var(--text-body1);
          border-radius: var(--radius-2);
          background-color: var(--color-grey10);
          font-weight: var(--text-weight600);
        `;
      case "filters":
        return css`
          width: 279px;
          height: 48px;
          font-size: var(--text-body1);
          border-radius: var(--radius-2);
          background-color: var(--color-brand2);
          color: var(--color-white-fixed);
          font-weight: var(--text-weight600);

          @media (min-width: 375px) {
            display: none;
          }
        `;
      case "filterMaxAndMin":
        return css`
          width: 125px;
          height: 37px;
          font-size: var(--text-body1);
          font-family: "Lexend";
          background-color: var(--color-grey5);
          color: var(--color-grey3);
          font-weight: var(--text-weight600);
        `;
      case "nextPage":
        return css`
          width: 125px;
          height: 37px;
          font-size: var(--text-body1);
          font-family: "Lexend";
          color: var(--color-brand1);
          background-color: transparent;
          font-weight: var(--text-weight600);
        `;
      case "enter":
        return css`
          width: 100%;
          height: 48px;
          margin-top: 10px;
          font-size: var(--text-body1);
          border-radius: var(--radius-2);
          background-color: var(--color-brand2);
          color: var(--color-white-fixed);
          font-weight: var(--text-weight600);
        `;
    }
  }}
`;
