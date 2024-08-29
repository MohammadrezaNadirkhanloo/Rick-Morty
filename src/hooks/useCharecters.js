import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useCharecters(search,url) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      async function fetchData() {
        try {
          const { data } = await axios.get(
            `${url}=${search}`,
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
  return { characters, isLoading };
}
