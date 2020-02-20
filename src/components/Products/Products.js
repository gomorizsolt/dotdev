import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { productsStyle } from "./Products.style";
import Product from "./Product/Product";

const Products = styled.div`
  ${productsStyle}
`;

const products = () => (
  <Products>
    <h2 className="products__title">Products</h2>
    {settings.products.map(product => (
      <Product
        key={product.name}
        name={product.name}
        cover={product.cover}
        description={product.description}
        technologies={product.technologies}
        socialLinks={product.socialLinks}
      />
    ))}
  </Products>
);

export default products;
