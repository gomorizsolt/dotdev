import React from "react";
import styled from "styled-components";
import { useConfig } from "../../contexts/Config";
import { productsStyle } from "./Products.style";
import Product from "./Product/Product";

const Products = styled.div`
  ${productsStyle}
`;

const products = () => {
  const config = useConfig();

  return (
    <Products>
      <h2 className="products__title">
        {config.productsTitle ? config.productsTitle : "Products"}
      </h2>
      {config.products.map(product => (
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
};

export default products;
