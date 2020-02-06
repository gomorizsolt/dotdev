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
  productStyle,
  productTitleStyle,
  actionTechIconsStyle,
  technologiesIconsContainerStyle,
} from "./Product.style";
import IconDisplayer from "../../UI/Icons/IconDisplayer";
import settings from "../../../../settings/settings";

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

const product = ({ name, cover, description, technologies, socialLinks }) => {
  return (
    <Product>
      <Card className="Card">
        {cover !== null ? <CardMedia image={cover} title={name} /> : null}
        <CardContent>
          <ProductTitle>
            {name}
            {technologies !== null ? (
              <TechnologiesIconsContainer>
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
              </TechnologiesIconsContainer>
            ) : null}
          </ProductTitle>
          {description !== null ? <div>{description}</div> : null}
        </CardContent>
        {socialLinks !== null ? (
          <CardActions>
            <ActionTechIcons className="action__techIcons">
              {socialLinks.map(social =>
                settings.socialIcons[social.name] ? (
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
                  </IconButton>
                ) : (
                  /* eslint-disable-next-line no-console */
                  console.warn(
                    `There is no icon path specified in the settings for ${social.name} social icon`
                  )
                )
              )}
            </ActionTechIcons>
          </CardActions>
        ) : null}
      </Card>
    </Product>
  );
};

export default product;
