import HomePage from "../pages/HomePage";
import toggle_theme from "../features/toggle-theme";
import { useState } from "react";
import Button from "../shared/ui/Button";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <toggle_theme.Provider value={theme}>
        <Button title={"Сменить тему"} func={changeTheme} />
        <HomePage />
      </toggle_theme.Provider>
    </div>
  );
}

export default App;
