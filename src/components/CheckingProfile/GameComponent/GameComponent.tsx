import InformationMark from "../../InformationMark/InformationMark";
import gameImage from "../../../assets/gameImage.png";
import classes from "./GameComponent.module.css";

const GameComponent = () => {
  return (
    <div className={classes.gameContainer}>
      <img className={classes.gameImage} src={gameImage} alt="Game Image" />
      <p className={classes.gameNameText}>
        Command & Conquer™ Red Alert™ 3- Uprising
      </p>
      <div className={classes.orderContainer}>
        <p className={classes.orderText}>Заказ #999999999</p>
        <div className={classes.orderParams}>
          <p className={classes.orderText}>DLC</p>
          <InformationMark />
        </div>
        <div className={classes.orderParams} style={{ width: "220px" }}>
          <p className={classes.orderText}>Время на активацию 00:00:00</p>
          <InformationMark />
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <p className={classes.orderText}>
          Для активации DLC нужна <br /> основная игра на аккаунте
        </p>
      </div>
    </div>
  );
};

export default GameComponent;
