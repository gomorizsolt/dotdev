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
    {products ? <ProductDisplayer name={products.name} /> : null}
  </Products>
);

export default products;
