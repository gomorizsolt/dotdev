import React from "react";
import styled from "styled-components";
import { categoriesDisplayerStyle } from "./CategoriesDisplayer.style";

const CategoriesDisplayer = styled.div`
  ${categoriesDisplayerStyle}
`;

export default ({ categories }) => (
  <div>
    {categories.map(category => (
      <CategoriesDisplayer key={category}>{category}</CategoriesDisplayer>
    ))}
  </div>
);
