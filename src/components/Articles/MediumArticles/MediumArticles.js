import React from "react";
import * as CustomHooks from "../../../utils/CustomHooks/CustomHooks";
import * as ArticlesUtils from "../../../utils/ArticlesUtils/ArticlesUtils";
import ArticleDisplayer from "./ArticleDisplayer/ArticleDisplayer";
import Loader from "../../UI/Loader/Loader";

const mediumArticles = () => {
  const articles = CustomHooks.useGenericFetch(ArticlesUtils.GetCurrentMediumArticles);

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
