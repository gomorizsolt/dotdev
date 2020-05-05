import React from "react";
import styled from "styled-components";
import { categoryStyle } from "./CategoriesDisplayer.style";

const Category = styled.div`
  ${categoryStyle}
`;

const CategoriesDisplayer = ({ categories }) => (
  <div>
    {categories.map(category => (
      <Category key={category}>{category}</Category>
    ))}
  </div>
);

export default CategoriesDisplayer;
