import "./App.css";
import background from "./assets/discord-background.png";
import logo from "./assets/discord-logo.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={menuIcon} alt="Menu Icon" />
        <img src={logo} alt="Discord Logo" />
      </header>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school lub, a gaming group...</p>
      </div>
    </div>
  );
}

export default App;
