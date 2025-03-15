import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import LanguageSwitcher from "../../UI/LanguageSwitcher/LanguageSwitcher";
import TelegramIcon from "../../UI/TelegramIcon/TelegramIcon";
import steamAvatar from "../../../assets/steamAvatar.png";
import classes from "./ProfileComponent.module.css";

const ProfileComponent = () => {
  const handleAcceptAccount = () => {
    console.log("Это мой аккаунт");
  };

  const handleChangeAccount = () => {
    console.log("Сменить аккаунт");
  };

  return (
    <div className={classes.profileContainer}>
      <p className={classes.checkingProfileText}>Проверка профиля</p>
      <div className={classes.imageContainer}>
        <img src={steamAvatar} alt="Steam avatar" />
      </div>
      <p className={classes.checkingNicknameText}>
        Steam никнейм покупателя. Проверьте <br /> перед покупкой!
      </p>
      <a
        className={classes.linkText}
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://steamcommunity.com/profiles/steamid64
      </a>
      <SubmitButton
        onClick={handleAcceptAccount}
        className={classes.acceptAccButton}
      >
        Это мой аккаунт
      </SubmitButton>
      <SubmitButton
        onClick={handleChangeAccount}
        className={classes.changeAccButton}
      >
        Сменить аккаунт
      </SubmitButton>
      <div className={classes.langAndTelegramContainer}>
        <LanguageSwitcher />
        <TelegramIcon />
      </div>
    </div>
  );
};

export default ProfileComponent;
