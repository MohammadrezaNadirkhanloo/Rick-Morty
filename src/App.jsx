import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header, { ChangeTheme, SearchItems } from "./components/Header";
import ListItem from "./components/ListItem";
import Loader from "./components/Loader";
import Section from "./components/Section";
import ShowItem, { Item } from "./components/ShowItem";
import ShowLike from "./components/ShowLike";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("THEME", "dim", true);
  const [favourite, setFavourite] = useLocalStorage("FAVOURITE", []);

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      async function fetchData() {
        try {
          const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/?name=${search}`,
            { signal }
          );
          setCharacters(data.results.slice(0, 8));
          setIsLoading(false);
        } catch (err) {
          if (!axios.isCancel()) {
            setCharacters([]);
            toast.error(err.response.data.error);
          }
        }
      }
      fetchData();
    }, 2000);

    return () => {
      controller.abort();
    };
  }, [search]);

  const handelChangeTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };

  function handelShowEys(id) {
    setIsShow(id);
  }

  function handelFavourites(item) {
    setFavourite((n) => [...n, item]);
  }

  function eventHandelDelete(id) {
    setFavourite((preFav) => preFav.filter((item) => item.id !== id));
  }

  const isListFavourite = favourite.map((item) => item.id).includes(isShow);

  return (
    <>
      <ToastContainer stacked theme="colored" />
      <Header theme={theme}>
        <SearchItems theme={theme} search={search} setSearch={setSearch} />
        <ShowLike
          favourites={favourite}
          numOfFavourites={favourite.length}
          theme={theme}
          eventHandelDelete={eventHandelDelete}
        />
        <ChangeTheme handelTheme={handelChangeTheme} />
      </Header>
      <Section>
        <div>
          {isLoading ? (
            <Loader size={"small"} theme={theme} />
          ) : (
            <ListItem
              theme={theme}
              characters={characters}
              isShow={isShow}
              handelShowEys={handelShowEys}
            />
          )}
        </div>
        <div className="col-span-2">
          {isLoading ? (
            <Loader size={"big"} theme={theme} />
          ) : (
            <ShowItem>
              <Item
                theme={theme}
                isShow={isShow}
                handelFavourites={handelFavourites}
                isListFavourite={isListFavourite}
              />
            </ShowItem>
          )}
        </div>
      </Section>
    </>
  );
}

export default App;
