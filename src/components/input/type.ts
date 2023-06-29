import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
  type: "text" | "number" | "password" | "email" | "file";
  placeholder: string;
  label: string;
  register?: UseFormRegisterReturn;
  defaultValue?: number | string;
  disable?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}
