import appLogo from "../assets/appLogoWhite.svg";

const ErrorPage = () => (
  <div
    style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#161616",
      color: "white",
    }}
  >
    <div style={{ position: "absolute", top: "5px", left: "50%" }}>
      <img src={appLogo} alt="App Logo" width={50} height={50} />
    </div>
    <h2>Страница не найдена</h2>
    <p>Пожалуйста, вернитесь на главную страницу.</p>
  </div>
);

export default ErrorPage;
