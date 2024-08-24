import { useEffect, useState } from "react";
import Header, { ChangeTheme, SearchItems } from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import ShowItem, { Item } from "./components/ShowItem";
import Episodes from "./components/Episodes";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState("dim");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      async function fetchData() {
        try {
          const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/?name=${search}`
          );
          setCharacters(data.results.slice(0, 8));
          setIsLoading(false);
        } catch (err) {
          toast.error(err.response.data.error);
        }
      }
      fetchData();
    }, 2000);
  }, [search]);

  const handelChangeTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <ToastContainer stacked  theme="colored" />

      <Header theme={theme}>
        <SearchItems theme={theme} search={search} setSearch={setSearch} />
        <ChangeTheme handelTheme={handelChangeTheme} />
      </Header>
      <Section>
        <div>
          {isLoading ? (
            <Loader size={"small"} theme={theme} />
          ) : (
            <ListItem theme={theme} characters={characters} />
          )}
        </div>
        <div className="col-span-2">
          {isLoading ? (
            <Loader size={"big"} theme={theme} />
          ) : (
            <ShowItem>
              <Item theme={theme} />
              <Episodes theme={theme} />
            </ShowItem>
          )}
        </div>
      </Section>
    </>
  );
}

export default App;
