import { iFormProps } from "./type";
import { StyledForm } from "./style"

export const Form = ({ children, noValidate, onSubmit }: iFormProps) => {
  return (
    <StyledForm noValidate={noValidate} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
