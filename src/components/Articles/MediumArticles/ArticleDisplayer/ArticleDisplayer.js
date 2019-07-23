import React from "react";
import styled from "styled-components";
import CategoriesDisplayer from "./CategoriesDisplayer/CategoriesDisplayer";
import { articleDisplayerStyle } from "./ArticleDisplayer.style";

const ArticleDisplayer = styled.div`
  ${articleDisplayerStyle}
`;

const articleDisplayer = ({ articleData }) => (
  <ArticleDisplayer>
    <a
      href={articleData.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {articleData.title}
    </a>
    <CategoriesDisplayer categories={articleData.categories} />
    <p>{new Date(articleData.pubDate).toDateString()}</p>
  </ArticleDisplayer>
);

export default articleDisplayer;
