import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
  type: "text" | "password" | "email" | "file";
  placeholder: string;
  label: string;
  register?: UseFormRegisterReturn;
  defaultValue?: number | string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
