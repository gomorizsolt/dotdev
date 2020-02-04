import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import {
  productDisplayerStyle,
  productTitleStyle,
  actionTechIconsStyle,
} from "./ProductDisplayer.style";
import IconDisplayer from "../../UI/Icons/IconDisplayer";
import settings from "../../../../settings/settings";

const ProductDisplayer = styled.div`
  ${productDisplayerStyle}
`;

const ProductTitle = styled.div`
  ${productTitleStyle}
`;
const ActionTechIcons = styled.div`
  ${actionTechIconsStyle}
`;

const productDisplayer = ({ name, logo, description, link, social }) => {
  return (
    <ProductDisplayer>
      <Card className="Card">
        <CardContent>
          <ProductTitle>
            <img src={logo} alt={name} />
            {name}
          </ProductTitle>
          <div>{description}</div>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>
            Learn More
          </Button>
          <ActionTechIcons className="action__techIcons">
            {social.map(l => [
              <a
                key={l.name}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDisplayer
                  key={l.name}
                  name={settings.socialIcons[l.name].name}
                  src={settings.socialIcons[l.name].icon}
                />
              </a>,
            ])}
          </ActionTechIcons>
        </CardActions>
      </Card>
    </ProductDisplayer>
  );
};

export default productDisplayer;
