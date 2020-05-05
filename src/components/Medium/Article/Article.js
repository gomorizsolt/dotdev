import React from "react";
import styled from "styled-components";
import CategoriesDisplayer from "./CategoriesDisplayer/CategoriesDisplayer";
import { articleContainerStyle } from "./Article.style";

const ArticleContainer = styled.div`
  ${articleContainerStyle}
`;

const Article = ({ articleDetails }) => (
  <ArticleContainer>
    <a href={articleDetails.link} target="_blank" rel="noopener noreferrer">
      {articleDetails.title}
    </a>
    <CategoriesDisplayer categories={articleDetails.categories} />
    <p>{new Date(articleDetails.pubDate).toDateString()}</p>
  </ArticleContainer>
);

export default Article;
