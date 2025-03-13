import classes from "./SearchGame.module.css";

const SearchGame = () => {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.boxInfo}>
        <p className={classes.title}>Введите уникальный код заказа</p>
        <input
          className={classes.textInput}
          placeholder="Введите уникальный код"
        />
      </div>
    </div>
  );
};

export default SearchGame;
