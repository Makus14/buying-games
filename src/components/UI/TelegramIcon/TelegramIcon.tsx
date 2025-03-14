import telegramIcon from "../../../assets/telegramIcon.png";

import classes from "./TelegramIcon.module.css";

const TelegramIcon = () => {
  const handleTelegramClick = () => {
    console.log("Переход в телеграм");
  };

  return (
    <div className={classes.telegramIconContainer}>
      <span
        className={classes.telegramIconOption}
        onClick={handleTelegramClick}
      >
        <img src={telegramIcon} />
      </span>
      <div className={classes.tooltip}>
        У нас раздачи игр! <br /> Подпишись
      </div>
    </div>
  );
};

export default TelegramIcon;
