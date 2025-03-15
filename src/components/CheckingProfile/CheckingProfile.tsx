import GameComponent from "./GameComponent/GameComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import classes from "./CheckingProfile.module.css";

const CheckingProfile = () => {
  return (
    <div className={classes.container}>
      <GameComponent />
      <ProfileComponent />
    </div>
  );
};

export default CheckingProfile;
