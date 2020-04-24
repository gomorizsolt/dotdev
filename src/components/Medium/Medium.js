import React, { useCallback } from "react";
import RSSParser from "rss-parser";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import getProxyURL from "../../utils/GetProxyURL/GetProxyURL";
import { useFetch } from "../../utils/ReactUtils/ReactUtils";
import Article from "./Article/Article";
import Loader from "../UI/Loader/Loader";
import { mediumStyle } from "./Medium.style";

const Medium = styled.div`
  ${mediumStyle}
`;

export default () => {
  const fetchArticles = useCallback(() => {
    const parser = new RSSParser();
    const url = getProxyURL(`https://medium.com/feed/${settings.medium}`);

    return parser
      .parseURL(url)
      .then(({ items }) => items.filter(item => item.categories));
  }, []);

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
