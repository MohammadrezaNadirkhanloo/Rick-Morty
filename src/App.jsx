import { useEffect, useState } from "react";
import Header, { ChangeTheme } from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import ShowItem, { Item } from "./components/ShowItem";
import Episodes from "./components/Episodes";

function App() {
  const [theme, setTheme] = useState("dim");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results.slice(0, 6));
      }
      fetchData();
    } catch (error) {}
  }, []);

  const handelChangeTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <Header theme={theme}>
        <ChangeTheme handelTheme={handelChangeTheme} />
      </Header>
      <Section>
        <div>
          <ListItem theme={theme}  />
        </div>
        <div className="col-span-2">
          <ShowItem>
            <Item theme={theme} />
            <Episodes theme={theme} />
          </ShowItem>
        </div>
      </Section>
    </>
  );
}

export default App;
