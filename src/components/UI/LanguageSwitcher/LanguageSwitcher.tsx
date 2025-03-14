import { useState } from "react";
import classes from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState("RU");

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    console.log(lang);
  };

  return (
    <div className={classes.languageSwitcher}>
      <span
        className={`${classes.langOption} ${
          activeLang === "RU" ? classes.active : ""
        }`}
        onClick={() => handleLanguageChange("RU")}
      >
        RU
      </span>
      <span
        className={`${classes.langOption} ${
          activeLang === "EN" ? classes.active : ""
        }`}
        onClick={() => handleLanguageChange("EN")}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
