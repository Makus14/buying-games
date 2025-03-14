import React, { useState } from "react";

import TextInput from "../UI/TextInput/TextInput";
import SubmitButton from "../UI/SubmitButton/SubmitButton";
import Checkbox from "../UI/CheckBox/CheckBox";
import classes from "./SearchGame.module.css";

const SearchGame = () => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
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

  const handleContactSellerClick = () => {
    console.log("Связаться с продавцом");
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
        <SubmitButton onClick={handleButtonClick}>Подтвердить</SubmitButton>
        <Checkbox
          label="Я не робот"
          hasError={hasError}
          onChange={handleCheckboxChange}
        />
        <span
          className={classes.contactSellerText}
          onClick={handleContactSellerClick}
        >
          Связаться с продавцом
        </span>
      </div>
    </div>
  );
};

export default SearchGame;
