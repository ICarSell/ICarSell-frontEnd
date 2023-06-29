import { iFormProps } from "./type";
import { StyledForm } from "./style";

export const Form = ({
  children,
  noValidate,
  onSubmit,
  className,
}: iFormProps) => {
  return (
    <StyledForm
      className={className}
      noValidate={noValidate}
      onSubmit={onSubmit}
    >
      {children}
    </StyledForm>
  );
};
