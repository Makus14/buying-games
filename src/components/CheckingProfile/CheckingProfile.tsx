import GameComponent from "./GameComponent/GameComponent";
import SubmitButton from "../UI/SubmitButton/SubmitButton";
import classes from "./CheckingProfile.module.css";

const CheckingProfile = () => {
  return (
    <div className={classes.container}>
      <GameComponent />
      <div className={classes.profileContainer}>
        <p>Проверка профиля</p>
        <p>Steam никнейм покупателя. Проверьте перед покупкой!</p>
        <SubmitButton>Это мой аккаунт</SubmitButton>
      </div>
    </div>
  );
};

export default CheckingProfile;
