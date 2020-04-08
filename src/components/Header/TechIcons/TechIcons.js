import React from "react";
import styled from "styled-components";
import { techIconsStyle } from "./TechIcons.style";
import IconDisplayer from "../../UI/Icons/IconDisplayer";
import config from "../../../../config/config.yml";

const TechIcons = styled.div`
  ${techIconsStyle}
`;

const techIcons = () => (
  <TechIcons>
    {config.header.technologies.map(tech =>
      config.technologyIcons[tech] ? (
        <IconDisplayer
          key={tech}
          name={config.technologyIcons[tech].name}
          src={config.technologyIcons[tech].icon}
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
