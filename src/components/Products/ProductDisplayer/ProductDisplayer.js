import React from "react";
import styled from "styled-components";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core/";
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

const productDisplayer = ({
  name,
  cover,
  description,
  technologies,
  socialLinks,
}) => {
  return (
    <ProductDisplayer>
      <Card className="Card">
        <CardMedia image={cover} title={name} />
        <CardContent>
          <ProductTitle>
            {name}
            <div>
              {technologies.map(tech =>
                settings.technologyIcons[tech] ? (
                  <IconDisplayer
                    key={tech}
                    name={settings.technologyIcons[tech].name}
                    src={settings.technologyIcons[tech].icon}
                  />
                ) : (
                  /* eslint-disable-next-line no-console */
                  console.warn(
                    `There is no icon path specified in the settings for ${tech} technology`
                  )
                )
              )}
            </div>
          </ProductTitle>
          <div>{description}</div>
        </CardContent>
        <CardActions>
          <ActionTechIcons className="action__techIcons">
            {socialLinks.map(social => [
              <IconButton
                key={social.name}
                href={social.link}
                aria-label={social.name}
                size="small"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDisplayer
                  key={social.name}
                  name={settings.socialIcons[social.name].name}
                  src={settings.socialIcons[social.name].icon}
                />
              </IconButton>,
            ])}
          </ActionTechIcons>
        </CardActions>
      </Card>
    </ProductDisplayer>
  );
};

export default productDisplayer;
