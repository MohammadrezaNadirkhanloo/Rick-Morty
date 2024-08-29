import { useEffect, useState } from "react";

export default function useLocalStorage(key, intialState, theme = false) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || intialState
  );
  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = value;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
