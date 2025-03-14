import React, { useState } from "react";

import classes from "./SubmitButton.module.css";

interface SubmitButton {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButton> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (disabled || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClick();
    }, 1000); // Симуляция задержки в 1 секунду
  };

  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={handleClick}
      type={type}
      disabled={disabled || isLoading}
    >
      {isLoading ? <span className={classes.loader}></span> : children}
    </button>
  );
};

export default SubmitButton;
