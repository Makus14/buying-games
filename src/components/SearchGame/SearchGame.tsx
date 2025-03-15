import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../UI/TextInput/TextInput";
import SubmitButton from "../UI/SubmitButton/SubmitButton";
import Checkbox from "../UI/CheckBox/CheckBox";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import TelegramIcon from "../UI/TelegramIcon/TelegramIcon";
import { uniqueCode } from "../../config";
import classes from "./SearchGame.module.css";

const SearchGame = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputError(false);
  };

  const handleButtonClick = () => {
    setInputError(false);
    setCheckboxError(false);

    if (!inputValue) {
      setInputError(true);
      setShowError(true);
      console.log("Введите код");
      hideErrorMessage();
      return;
    }

    if (inputValue !== uniqueCode) {
      setInputError(true);
      setShowError(true);
      console.log("Неверный код");
      hideErrorMessage();
      return;
    }

    if (!isChecked) {
      setCheckboxError(true);
      console.log("Ошибка с чекбоксом");
    }

    if (isChecked && inputValue === uniqueCode) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        console.log("Валидация успешна, выполняем переход...");
        navigate(`/${inputValue}`);
      }, 1000);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) setCheckboxError(false);
  };

  const handleContactSellerClick = () => {
    console.log("Связаться с продавцом");
  };

  const hideErrorMessage = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}></div>
      {(inputError || showError) && (
        <div
          className={`${classes.errorMessage} ${showError ? classes.show : ""}`}
        >
          Некорректный код заказа.
          <br />
          Проверьте код ещё раз.
        </div>
      )}
      <div className={classes.boxInfo}>
        <p className={classes.title}>Введите уникальный код заказа</p>
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите уникальный код"
          hasError={inputError}
        />

        <SubmitButton onClick={handleButtonClick} isLoading={isLoading}>
          Подтвердить
        </SubmitButton>

        <Checkbox
          label="Я не робот"
          hasError={checkboxError}
          onChange={handleCheckboxChange}
        />

        <span
          className={classes.contactSellerText}
          onClick={handleContactSellerClick}
        >
          Связаться с продавцом
        </span>

        <div className={classes.langAndTelegramContainer}>
          <LanguageSwitcher />
          <TelegramIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchGame;
