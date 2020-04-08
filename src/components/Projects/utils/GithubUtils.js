import { useState, useEffect } from "react";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import config from "../../../../config/config.yml";

export const fetchRepo = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.baptiste-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};

export const fetchRepoLanguages = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}/languages`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.baptiste-preview+json",
    },
  }).then(fetchedProjectLanguages => fetchedProjectLanguages.json());
};

export const useRepoLanguages = (userName, repoName) => {
  const [repoLanguages, setRepoLanguages] = useState([]);

  const githubFetchState = customHooks.useFetch(fetchRepo, userName, repoName);

  const githubRepoLanguages = customHooks.useFetch(
    fetchRepoLanguages,
    userName,
    repoName
  );

  useEffect(() => {
    if (!githubRepoLanguages.isLoading && !githubRepoLanguages.err) {
      const sumOfNumberOfBytesOfLanguages = Object.values(
        githubRepoLanguages.data
      ).reduce((x, y) => x + y, 0);

      const defaultThreshold = 10;
      const threshold = config.github.languageThreshold || defaultThreshold;

      const languages = Object.keys(githubRepoLanguages.data).filter(
        language => {
          const currentNumberOfBytes = githubRepoLanguages.data[language];

          return (
            (currentNumberOfBytes / sumOfNumberOfBytesOfLanguages) * 100 >
            threshold
          );
        }
      );

      setRepoLanguages(languages);
    }
  }, [githubRepoLanguages.isLoading, githubRepoLanguages.err]);

  return {
    githubFetchState,
    githubRepoLanguages,
    repoLanguages,
  };
};
