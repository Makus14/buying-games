import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import LanguageSwitcher from "../../UI/LanguageSwitcher/LanguageSwitcher";
import TelegramIcon from "../../UI/TelegramIcon/TelegramIcon";
import steamAvatar from "../../../assets/steamAvatar.png";
import classes from "./ProfileComponent.module.css";

type ProfileComponentProps = {
  isMobile: boolean;
};

const ProfileComponent = ({ isMobile }: ProfileComponentProps) => {
  const handleAcceptAccount = () => {
    console.log("Это мой аккаунт");
  };

  const handleChangeAccount = () => {
    console.log("Сменить аккаунт");
  };

  return (
    <div className={classes.profileContainer}>
      {!isMobile && (
        <>
          <p className={classes.checkingProfileText}>Проверка профиля</p>
          <div className="imageContainer">
            <img src={steamAvatar} alt="Steam avatar" />
          </div>
        </>
      )}
      {isMobile && (
        <>
          <p className="gameNameText">
            Command & Conquer™ Red Alert™ 3- Uprising
          </p>
          <p
            className="orderText"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Заказ #999999999
          </p>
        </>
      )}
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
