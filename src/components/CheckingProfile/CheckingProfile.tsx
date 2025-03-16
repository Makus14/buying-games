import { useMediaQuery } from "react-responsive";
import GameComponent from "./GameComponent/GameComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import classes from "./CheckingProfile.module.css";

const CheckingProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={classes.container}>
      <GameComponent isMobile={isMobile} />
      <ProfileComponent isMobile={isMobile} />
    </div>
  );
};

export default CheckingProfile;
