import React, { ChangeEvent } from "react";
import classes from "./TextInput.module.css";

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder: string;
  type?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  hasError = false,
  type = "text",
}) => {
  return (
    <input
      className={`${classes.textInput} ${hasError ? classes.error : ""}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
