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
        cover={product.cover ? product.cover : null}
        description={product.description ? product.description : null}
        technologies={product.technologies ? product.technologies : null}
        socialLinks={product.socialLinks ? product.socialLinks : null}
      />
    ))}
  </Products>
);

export default products;
