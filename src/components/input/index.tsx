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
      <label>
        <strong>{label}</strong>
      </label>
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
