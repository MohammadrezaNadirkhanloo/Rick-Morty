import { useState } from "react";
import "./App.css";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

function App() {
  const [theme, setTheme] = useState("dim");
  const handel = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <label className="grid cursor-pointer place-items-center">
        <input
          onClick={handel}
          type="checkbox"
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <CiBrightnessUp />
        <IoMoonOutline />
      </label>
    </>
  );
}

export default App;
