import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SubmitButton.module.css";

interface SubmitButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  to?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
  isLoading = false,
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (to && !disabled && !isLoading) {
      setTimeout(() => {
        navigate(to);
      }, 1000);
    }
  };

  const buttonContent = isLoading ? (
    <span className={classes.loader}></span>
  ) : (
    children
  );

  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={handleClick}
      type={type}
      disabled={disabled || isLoading}
    >
      {buttonContent}
    </button>
  );
};

export default SubmitButton;
