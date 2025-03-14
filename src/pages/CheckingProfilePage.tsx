import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CheckingProfile from "../components/CheckingProfile/CheckingProfile";
import ErrorPage from "./ErrorPage";
import { uniqueCode } from "../config";

const CheckingProfilePage = () => {
  const { uniqueCode: enteredCode } = useParams();
  const [isValidCode, setIsValidCode] = useState(true);

  useEffect(() => {
    if (enteredCode !== uniqueCode) {
      setIsValidCode(false);
    }
  }, [enteredCode]);

  if (!isValidCode) {
    return <ErrorPage />;
  }

  return <CheckingProfile />;
};

export default CheckingProfilePage;
