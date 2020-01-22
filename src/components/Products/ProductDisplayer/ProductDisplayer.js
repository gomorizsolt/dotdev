import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import { productDisplayerStyle } from "./ProductDisplayer.style";

const ProductDisplayer = styled.div`
  ${productDisplayerStyle}
`;

const productDisplayer = props => {
  const { name } = props;

  return (
    <ProductDisplayer>
      <Card className="Card">
        <CardContent>{name}</CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </ProductDisplayer>
  );
};

export default productDisplayer;
