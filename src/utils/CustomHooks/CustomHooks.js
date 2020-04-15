import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  });

  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({
      ...themeState,
      dark: lsDark,
      hasThemeLoaded: true,
    });
  }, []);

  return [themeState, setThemeState];
};

export const useFetch = (fetchFunction, ...args) => {
  const defaultState = {
    data: null,
    isLoading: true,
    err: false,
  };

  const [data, setData] = useState(defaultState);

  async function fetchData() {
    try {
      const fetchedData = await fetchFunction(...args);

      setData({
        ...defaultState,
        data: fetchedData,
        isLoading: false,
        err: false,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error while fetching:", fetchFunction.name, err);

      setData({
        ...defaultState,
        data: null,
        isLoading: false,
        err: true,
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
