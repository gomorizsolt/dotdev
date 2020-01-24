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
    <h2 className="products__title">Products</h2>
    {settings.products &&
      settings.products.map(product => (
        <ProductDisplayer
          key={product.name}
          name={product.name}
          links={product.links}
          logo={product.logo}
          description={product.description}
          technologies={product.technologies}
        />
      ))}
  </Products>
);

export default products;
