import "./styles.css";
import Banner from "./banner.jpeg";
import Logo from "./logo.svg";

const App = () => {
  return (
    <>
      <h1>App</h1>
      <img src={Banner} alt="banner-image" />
      <img src={Logo} alt="logo-image" />
    </>
  );
};

export default App;
