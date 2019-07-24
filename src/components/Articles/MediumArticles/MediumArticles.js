import React from "react";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import * as articlesUtils from "../../../utils/MediumUtils/MediumUtils";
import ArticleDisplayer from "./ArticleDisplayer/ArticleDisplayer";
import Loader from "../../UI/Loader/Loader";

const mediumArticles = () => {
  const articles = customHooks.useGenericFetch(articlesUtils.getMediumArticles);

  if (articles.isLoading) {
    return <Loader />;
  }

  if (articles.err) {
    const errorMessage =
      "An error has occurred while loading the Medium articles. Please try again later.";

    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      {articles.data.map(article => (
        <ArticleDisplayer key={article.guid} articleData={article} />
      ))}
    </div>
  );
};

export default mediumArticles;
