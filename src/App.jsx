import { useEffect, useState } from "react";
import Header, { ChangeTheme } from "./components/Header";
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

  useEffect(() => {
    function fetchData() {
      try {
        setIsLoading(true);
        setTimeout(async () => {
          const {data} = await axios.get("https://rickandmortyapi.com/api/character");
          setCharacters(data.results.slice(0, 8));
          toast.success("welcome");
          setIsLoading(false);
        }, 2000);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }
    fetchData();
  }, []);

  const handelChangeTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <>
      <ToastContainer theme="colored" />

      <Header theme={theme}>
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
