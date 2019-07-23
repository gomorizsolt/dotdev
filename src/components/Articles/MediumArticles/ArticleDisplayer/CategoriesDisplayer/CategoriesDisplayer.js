import React from "react";
import styled from "styled-components";
import { categoriesDisplayerStyle } from "./CategoriesDisplayer.style";

const CategoriesColors = ["#4894ea", "#67ab58", "#b19245", "#6C757D", "#ad2626"];

const CategoriesDisplayer = styled.div`
  ${categoriesDisplayerStyle}
`;

const categoriesDisplayer = ({ categories }) => (
  <div>
    {categories.map((category, index) => {
      return (
        // <Badge style={badgeStyle} color={BadgeColors[index]} key={category}>
        <CategoriesDisplayer style={{ backgroundColor: CategoriesColors[index] }}>
          {category}
        </CategoriesDisplayer>
        // </Badge>
      );
    })}
  </div>
);

export default categoriesDisplayer;
