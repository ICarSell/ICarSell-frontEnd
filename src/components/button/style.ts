import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./type";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "login":
        return css`
          //Estilização aqui
        `;
    }
  }}
`;
