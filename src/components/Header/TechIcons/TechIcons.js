import React from "react";
import styled from "styled-components";
import { techIconsStyle } from "./TechIcons.style";
import IconDisplayer from "../../UI/Icons/IconDisplayer";
import settings from "../../../../settings/settings";

const TechIcons = styled.div`
  ${techIconsStyle}
`;

const techIcons = () => (
  <TechIcons>
    {settings.header.technologies.map(name =>
      settings.technologyIcons[name] ? (
        <IconDisplayer
          key={name}
          src={settings.technologyIcons[name][0]}
          backgroundColor={settings.technologyIcons[name][1]}
        />
      ) : (
        /* eslint-disable-next-line no-console */
        console.warn(
          `Warning: There is no icon path specified in the settings for ${name} techology`
        )
      )
    )}
  </TechIcons>
);

export default techIcons;
