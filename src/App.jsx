import { useEffect, useState } from "react";
import Header, { ChangeTheme } from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import ShowItem, { Item } from "./components/ShowItem";
import Episodes from "./components/Episodes";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState("dim");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results.slice(0, 6));
        setIsLoading(false);
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
          {isLoading ? (
            <Loader size={"small"} />
          ) : (
            <ListItem theme={theme} characters={characters} />
          )}
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
