import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core/";
import {
  productStyle,
  productTitleStyle,
  actionTechIconsStyle,
  technologiesIconsContainerStyle,
} from "./Product.style";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";

const Product = styled.div`
  ${productStyle}
`;

const ProductTitle = styled.div`
  ${productTitleStyle}
`;

const TechnologiesIconsContainer = styled.div`
  ${technologiesIconsContainerStyle}
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
          <TechnologiesIconsContainer>
            <TechIconsDisplayer technologies={technologies} />
          </TechnologiesIconsContainer>
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
