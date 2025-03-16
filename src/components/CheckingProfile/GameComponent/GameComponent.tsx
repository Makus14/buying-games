import InformationMark from "../../InformationMark/InformationMark";
import gameImage from "../../../assets/gameImage.png";
import steamAvatar from "../../../assets/steamAvatar.png";
import classes from "./GameComponent.module.css";

type GameComponentProps = {
  isMobile: boolean;
};

const GameComponent = ({ isMobile }: GameComponentProps) => {
  return (
    <div className={classes.gameContainer}>
      {isMobile && (
        <>
          <p className="orderText">
            Для активации DLC нужна <br /> основная игра на аккаунте
          </p>
          <div className="imageContainer">
            <img src={steamAvatar} alt="Steam avatar" />
          </div>
        </>
      )}
      <img className={classes.gameImage} src={gameImage} alt="Game Image" />
      {!isMobile && (
        <p className="gameNameText">
          Command & Conquer™ Red Alert™ 3- Uprising
        </p>
      )}

      <div className={classes.orderContainer}>
        {!isMobile && <p className="orderText">Заказ #999999999</p>}
        <div className={classes.orderParams}>
          <p className="orderText">DLC</p>
          <InformationMark />
        </div>
        <div className={classes.orderParams} style={{ width: "240px" }}>
          <p className="orderText">Время на активацию 00:00:00</p>
          <InformationMark />
        </div>
      </div>

      {!isMobile && (
        <div style={{ marginTop: "12px" }}>
          <p className="orderText">
            Для активации DLC нужна <br /> основная игра на аккаунте
          </p>
        </div>
      )}
    </div>
  );
};

export default GameComponent;
