import React, { useState } from "react";

import TextInput from "../UI/TextInput/TextInput";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/CheckBox/CheckBox";
import classes from "./SearchGame.module.css";

const SearchGame = () => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (!isChecked) {
      setHasError(true);
      console.log("Ошибка");
    } else {
      console.log("Далее");
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) setHasError(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.boxInfo}>
        <p className={classes.title}>Введите уникальный код заказа</p>
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите уникальный код"
        />
        <Button onClick={handleClick}>Подтвердить</Button>
        <Checkbox
          label="Я не робот"
          hasError={hasError}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default SearchGame;
