import React, { useCallback } from "react";
import RSSParser from "rss-parser";
import styled from "styled-components";
import proxify from "../../utils/Proxify/Proxify";
import { useFetch } from "../../utils/ReactUtils/ReactUtils";
import Article from "./Article/Article";
import Loader from "../UI/Loader/Loader";
import { useConfig } from "../../contexts/Config";
import { mediumContainerStyle } from "./Medium.style";

const MediumContainer = styled.div`
  ${mediumContainerStyle}
`;

const Medium = () => {
  const { proxyURL: proxy, medium: username } = useConfig();

  const fetchArticles = useCallback(() => {
    if (!proxy) {
      throw new Error(
        "Insufficient config: CORS proxy is mandatory for accessing Medium articles."
      );
    }

    const parser = new RSSParser();
    const url = proxify(proxy, `https://medium.com/feed/${username}`);

    return parser
      .parseURL(url)
      .then(({ items }) => items.filter(item => item.categories));
  }, [proxy, username]);

  const { loading, err, data: articles } = useFetch(fetchArticles);

  if (loading) {
    return (
      <MediumContainer>
        <Loader />
      </MediumContainer>
    );
  }

  if (err) {
    const errorMessage =
      "An error has occurred while loading the Medium articles. Please try again later.";

    return <div>{errorMessage}</div>;
  }

  return (
    <MediumContainer>
      <h2 className="title">Articles</h2>
      {articles.map(article => (
        <Article key={article.guid} articleDetails={article} />
      ))}
    </MediumContainer>
  );
};

export default Medium;
