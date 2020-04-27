import React, { useCallback } from "react";
import RSSParser from "rss-parser";
import styled from "styled-components";
import proxify from "../../utils/Proxify/Proxify";
import { useFetch } from "../../utils/ReactUtils/ReactUtils";
import Article from "./Article/Article";
import Loader from "../UI/Loader/Loader";
import { useConfig } from "../../contexts/Config";
import { mediumStyle } from "./Medium.style";

const Medium = styled.div`
  ${mediumStyle}
`;

export default () => {
  const { proxyURL, medium: username } = useConfig();

  const fetchArticles = useCallback(() => {
    const parser = new RSSParser();
    const url = proxify(proxyURL, `https://medium.com/feed/${username}`);

    return parser
      .parseURL(url)
      .then(({ items }) => items.filter(item => item.categories));
  }, [proxyURL, username]);

  const { loading, err, data: articles } = useFetch(fetchArticles);

  if (loading) {
    return (
      <Medium>
        <Loader />
      </Medium>
    );
  }

  if (err) {
    const errorMessage =
      "An error has occurred while loading the Medium articles. Please try again later.";

    return <div>{errorMessage}</div>;
  }

  return (
    <Medium>
      <h2 className="title">Articles</h2>
      {articles.map(article => (
        <Article key={article.guid} articleDetails={article} />
      ))}
    </Medium>
  );
};
