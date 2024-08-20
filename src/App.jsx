import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("dim");
  const handel = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <Header handelTheme={handel} theme={theme} />
    </>
  );
}

export default App;
