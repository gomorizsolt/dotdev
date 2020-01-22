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
          name={settings.technologyIcons[name].name}
          src={settings.technologyIcons[name].icon}
        />
      ) : (
        /* eslint-disable-next-line no-console */
        console.warn(
          `There is no icon path specified in the settings for ${name} technology`
        )
      )
    )}
  </TechIcons>
);

export default techIcons;
