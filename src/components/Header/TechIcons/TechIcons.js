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
    {settings.header.technologies.map(tech =>
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
  </TechIcons>
);

export default techIcons;
