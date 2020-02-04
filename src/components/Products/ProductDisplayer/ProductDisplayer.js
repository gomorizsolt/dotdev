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

const productDisplayer = ({ name, logo, description, link, socialLinks }) => {
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
            {socialLinks.map(social => [
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDisplayer
                  key={social.name}
                  name={settings.socialIcons[social.name].name}
                  src={settings.socialIcons[social.name].icon}
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
