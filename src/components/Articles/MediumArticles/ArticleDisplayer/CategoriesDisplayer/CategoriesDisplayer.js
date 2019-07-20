import React from "react";
// import { Badge } from "reactstrap";
// import BadgeColors from "~/resources/BadgeColors/BadgeColors";

// const badgeStyle = {
//   marginRight: "7px",
//   marginBottom: "10px",
//   padding: "7px",
// };

const categoriesDisplayer = ({ categories }) => (
  <div>
    {categories.map(category => {
      return (
        // <Badge style={badgeStyle} color={BadgeColors[index]} key={category}>
        <div>{category}</div>
        // </Badge>
      );
    })}
  </div>
);

export default categoriesDisplayer;
