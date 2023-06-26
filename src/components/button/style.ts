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

          @media (min-width: 426px) {
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
      case "closeModalHeader":
        return css`
          font-size: var(--text-body1);
          color: var(--color-grey4);
          background-color: transparent;
        `;

      case "closeModal":
        return css`
          width: 126px;
          height: 48px;
          border-radius: var(--radius-2);
          background-color: var(--color-grey6);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
        `;
      case "updateAddress":
        return css`
          width: 193px;
          height: 48px;
          color: var(--color-brand4);
          background-color: var(--color-brand2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          border-radius: var(--radius-2);
        `;
      case "updateUser":
        return css`
          width: 193px;
          height: 48px;
          color: var(--color-white-fixed);
          background-color: var(--color-brand2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          border-radius: var(--radius-2);
        `;
      case "deleteUser":
        return css`
          width: 150px;
          height: 48px;
          color: var(--color-alert1);
          background-color: var(--color-alert2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          border-radius: var(--radius-2);
        `;
      case "updateComment":
        return css`
          padding: 0 5px;
          height: 48px;
          color: var(--color-white-fixed);
          background-color: var(--color-brand2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          border-radius: var(--radius-2);
        `;
      case "deleteComment":
        return css`
          padding: 10px 15px;
          height: 48px;
          color: var(--color-alert1);
          background-color: var(--color-alert2);
          font-size: var(--text-body1);
          font-weight: var(--text-weight600);
          border-radius: var(--radius-2);
        `;
      case "buy":
        return css`
          width: 100px;
          height: 38px;
          font-size: var(--text-body1);
          border-radius: var(--radius-2);
          background-color: var(--color-brand2);
          color: var(--color-white-fixed);
          font-weight: var(--text-weight600);

          @media (min-width: 426px) {
            display: none;
          }
        `;
      case "buyDesibled":
        return css`
          width: 100px;
          height: 38px;
          font-size: var(--text-body1);
          border-radius: var(--radius-2);
          background-color: #ced4da;
          color: var(--color-white-fixed);
          font-weight: var(--text-weight600);
          cursor: default;

          @media (min-width: 426px) {
            display: none;
          }
        `;
    }
  }}
`;
