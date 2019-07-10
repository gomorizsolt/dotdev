import React from "react";
import { LayoutContainer } from "./Layout.style";
import Header from "../Header/Header";

const layout = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;
