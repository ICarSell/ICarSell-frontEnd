import { iInputProps } from "./type";
import { StyledInput } from "./style";

export const Input = ({
  type,
  placeholder,
  label,
  register,
  defaultValue,
  onChange,
}: iInputProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        {...register}
      />
    </StyledInput>
  );
};
