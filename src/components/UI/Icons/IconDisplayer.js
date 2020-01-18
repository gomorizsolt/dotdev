import React from "react";
import styled from "styled-components";
import { iconDisplayerStyle } from "./IconDisplayer.style";

const IconDisplayer = styled.div`
  ${iconDisplayerStyle}
`;

const iconDisplayer = props => {
  const { children } = props;
  console.log(children);
  // let Icon = "";

  // const path = require("../../../../static/svg/react.svg");

  // async function getComponent() {
  //   const Icon = await import("../../../../static/svg/react.svg");
  //   // return icon;
  // }

  // console.log(getComponent());

  // async function request() {
  //   try {
  //     await fetch(children)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(myJson => {
  //         console.log(myJson);
  //       });
  //   } catch (error) {
  //     // this.handleError(new error.message());
  //     console.log(error);
  //   }
  // }
  // request();
  // console.log(Icon);

  // const getConfig = require("../../../../static").default;

  return (
    <IconDisplayer>
      <img src={children} />{" "}
    </IconDisplayer>
  );
};

export default iconDisplayer;
