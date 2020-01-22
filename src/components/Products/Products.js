import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { productsStyle } from "./Products.style";
import ProductDisplayer from "./ProductDisplayer/ProductDisplayer";

const Products = styled.div`
  ${productsStyle}
`;

const products = () => (
  <Products>
    {settings.products ? (
      <ProductDisplayer name={settings.products[0].name} />
    ) : null}
  </Products>
);

export default products;
