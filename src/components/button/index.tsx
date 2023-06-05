import { StyledButton } from "./style";
import { iButtonProps } from "./type";

export const Button = ({
  children,
  type,
  onClick,
  buttonVariation,
}: iButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonVariation={buttonVariation}
    >
      {children}
    </StyledButton>
  );
};
