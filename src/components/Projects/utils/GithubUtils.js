import { useState, useEffect, useCallback } from "react";
import { useFetch } from "../../../utils/ReactUtils/ReactUtils";
import { useConfig } from "../../../contexts/Config";

const useRepoInfo = (username, repo) => {
  const fetchRepoInfo = useCallback(() => {
    const url = `https://api.github.com/repos/${username}/${repo}`;

    return fetch(url, {
      headers: {
        Accept: "application/vnd.github.baptiste-preview+json",
      },
    }).then(res => res.json());
  }, [username, repo]);

  const { data, loading, err } = useFetch(fetchRepoInfo);

  return {
    repoInfo: {
      url: data && data.html_url,
      name: data && data.name,
      stars: data && data.stargazers_count,
      description: data && data.description,
    },
    loading,
    err,
  };
};

const useLanguages = (username, repo) => {
  const fetchRepoLanguages = useCallback(() => {
    const url = `https://api.github.com/repos/${username}/${repo}/languages`;

    return fetch(url, {
      headers: {
        Accept: "application/vnd.github.baptiste-preview+json",
      },
    }).then(res => res.json());
  }, [username, repo]);

  const { data, loading, err } = useFetch(fetchRepoLanguages);
  const [languages, setLanguages] = useState();
  const { github } = useConfig();

  useEffect(() => {
    if (!loading && !err) {
      const sumOfNumberOfBytes = Object.values(data).reduce((x, y) => x + y, 0);
      const defaultThreshold = 10;
      const threshold = github.languageThreshold || defaultThreshold;

      const filteredLanguages = Object.keys(data).filter(language => {
        const currentNumberOfBytes = data[language];

        return (currentNumberOfBytes / sumOfNumberOfBytes) * 100 > threshold;
      });

      setLanguages(filteredLanguages);
    }
  }, [data, loading, err, github.languageThreshold]);

  return {
    loading,
    err,
    languages,
  };
};

export const useGitHub = (username, repo) => {
  const {
    loading: languagesLoading,
    err: languagesErr,
    languages,
  } = useLanguages(username, repo);
  const { loading: repoInfoLoading, err: repoInfoErr, repoInfo } = useRepoInfo(
    username,
    repo
  );

  return {
    loading: languagesLoading || repoInfoLoading,
    languagesErr,
    repoInfoErr,
    languages,
    repoInfo,
  };
};
