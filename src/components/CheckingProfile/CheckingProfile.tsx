import { useMediaQuery } from "react-responsive";
import GameComponent from "./GameComponent/GameComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import appLogo from "../../assets/appLogoWhite.svg";
import classes from "./CheckingProfile.module.css";

const CheckingProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={classes.container}>
      <div className={classes.boxLogo}>
        <img src={appLogo} alt="App Logo" width={50} height={50} />
      </div>
      <GameComponent isMobile={isMobile} />
      <ProfileComponent isMobile={isMobile} />
    </div>
  );
};

export default CheckingProfile;
