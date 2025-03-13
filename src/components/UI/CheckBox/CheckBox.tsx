import React, { useState } from "react";
import classes from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  hasError?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, hasError, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <label
      className={`${classes.checkboxContainer} ${
        hasError ? classes.error : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={classes.checkboxInput}
      />
      <span
        className={`${classes.customCheckbox} ${
          checked ? classes.checked : ""
        }`}
      ></span>
      <span className={classes.checkboxLabel}>{label}</span>
    </label>
  );
};

export default Checkbox;
