import React from "react";

import classes from "./Button.module.css";

interface Button {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Button> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
