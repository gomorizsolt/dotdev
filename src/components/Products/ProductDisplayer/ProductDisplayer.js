import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import { productDisplayerStyle } from "./ProductDisplayer.style";

const ProductDisplayer = styled.div`
  ${productDisplayerStyle}
`;

const productDisplayer = props => {
  const { name, link, logo, description, technologies } = props;

  return (
    <ProductDisplayer>
      <Card className="Card">
        <CardContent>
          <div className="product__title">
            <img src={logo} alt={name} />
            {name}
          </div>
          <div>{description}</div>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>
            Learn More
          </Button>
          <div className="action__techIcons">
            <div>{technologies}</div>
          </div>
        </CardActions>
      </Card>
    </ProductDisplayer>
  );
};

export default productDisplayer;
