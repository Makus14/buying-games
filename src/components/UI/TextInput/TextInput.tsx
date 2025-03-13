import React, { ChangeEvent } from "react";
import classes from "./TextInput.module.css";

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => {
  return (
    <input
      className={`${classes.textInput} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
