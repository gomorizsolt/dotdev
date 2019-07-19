import React from "react";
import styled from "styled-components";
// import MediumArticles from "./MediumArticles/MediumArticles";
import { articlesStyle } from "./Articles.style";

const Articles = styled.div`
  ${articlesStyle}
`;

const articles = () => (
  <Articles>
    <h2 className="title">Articles</h2>
    {/* <MediumArticles /> */}
  </Articles>
);

export default articles;
