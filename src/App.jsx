import { useState } from "react";
import Header, { ChangeTheme } from "./components/Header";
import Section from "./components/Section";

function App() {
  const [theme, setTheme] = useState("dim");
  const handel = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <Header theme={theme}>
        <ChangeTheme handelTheme={handel} />
      </Header>
      <Section theme={theme} />
    </>
  );
}

export default App;
