import { useState, useEffect, useContext } from "react";

export const useFactoryContext = context => {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error(
      `${context.displayName} cannot be used outside the provider.`
    );
  }

  return ctx;
};

export const useFetch = fetchFn => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    err: false,
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const data = await fetchFn();

        setResponse(prevResponse => ({
          ...prevResponse,
          loading: false,
          data,
        }));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error while fetching: ", err);

        setResponse(prevResponse => ({
          ...prevResponse,
          loading: false,
          err: true,
        }));
      }
    };

    fetchResponse();
  }, [fetchFn]);

  return response;
};
