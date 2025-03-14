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
  const [checkboxError, setCheckboxError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputError(false); // Сбрасываем ошибку при изменении ввода
  };

  const handleButtonClick = () => {
    setInputError(false);
    setCheckboxError(false);

    // Проверка чекбокса
    if (!isChecked) {
      setCheckboxError(true);
      console.log("Ошибка с чекбоксом");
    }

    // Проверка на пустое поле
    if (!inputValue) {
      setInputError(true);
      console.log("Введите код");
    }
    // Проверка на неправильный код
    else if (inputValue !== uniqueCode) {
      setInputError(true);
      console.log("Неверный код");
    }

    // Если все правильно, только тогда выполняем переход
    if (isChecked && inputValue === uniqueCode) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        console.log("Валидация успешна, выполняем переход...");
        navigate(`/${inputValue}`); // Выполняем редирект вручную через navigate
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

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.boxInfo}>
        <p className={classes.title}>Введите уникальный код заказа</p>

        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите уникальный код"
          hasError={inputError} // Показываем ошибку при неверном коде
        />

        <SubmitButton
          onClick={handleButtonClick} // Вызываем обработчик клика, который будет проверять код
          isLoading={isLoading}
        >
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
