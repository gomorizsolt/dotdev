import React from "react";
import styled from "styled-components";
import { categoriesDisplayerStyle } from "./CategoriesDisplayer.style";

const categoriesColors = ["#4894ea", "#67ab58", "#b19245", "#6C757D", "#ad2626"];

const CategoriesDisplayer = styled.div`
  ${categoriesDisplayerStyle}
`;

const categoriesDisplayer = ({ categories }) => (
  <div>
    {categories.map((category, index) => {
      return (
        <CategoriesDisplayer style={{ backgroundColor: categoriesColors[index] }} key={category}>
          {category}
        </CategoriesDisplayer>
      );
    })}
  </div>
);

export default categoriesDisplayer;
