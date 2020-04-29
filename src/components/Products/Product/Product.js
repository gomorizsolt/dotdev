import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core/";
import {
  productStyle,
  productTitleStyle,
  actionTechIconsStyle,
  technIconsWrapperStyle,
} from "./Product.style";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";

const Product = styled.div`
  ${productStyle}
`;

const ProductTitle = styled.div`
  ${productTitleStyle}
`;

const TechIconsWrapper = styled.div`
  ${technIconsWrapperStyle}
`;

const ActionTechIcons = styled.div`
  ${actionTechIconsStyle}
`;

export default ({ name, cover, description, technologies, socialLinks }) => {
  function renderProductTitle() {
    return (
      <ProductTitle>
        {name}
        {technologies && (
          <TechIconsWrapper>
            <TechIconsDisplayer technologies={technologies} />
          </TechIconsWrapper>
        )}
      </ProductTitle>
    );
  }

  return (
    <Product>
      <Card className="Card">
        {cover && <CardMedia image={cover} title={name} />}
        <CardContent>
          {renderProductTitle()}
          {description && <div>{description}</div>}
          {socialLinks && (
            <CardActions>
              <ActionTechIcons className="action__techIcons">
                <SocialIcons links={socialLinks} />
              </ActionTechIcons>
            </CardActions>
          )}
        </CardContent>
      </Card>
    </Product>
  );
};
