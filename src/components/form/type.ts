import React from "react";

export interface iFormProps {
  children?: React.ReactNode;
  noValidate?: boolean | undefined;
  onSubmit?: () => void;
  className?: string;
}
