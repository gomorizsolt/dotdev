import React from "react";
import styled from "styled-components";
import { techIconsStyle } from "./TechIcons.style";
import IconDisplayer from "../../UI/Icons/IconDisplayer";
import { useConfig } from "../../../contexts/Config";

const TechIcons = styled.div`
  ${techIconsStyle}
`;

export default () => {
  const { header, techIcons } = useConfig();

  return (
    <TechIcons>
      {header.technologies.map(tech => {
        const icon = techIcons[tech];

        return icon ? (
          <IconDisplayer key={tech} name={icon.name} src={icon.path} />
        ) : (
          // eslint-disable-next-line no-console
          console.warn(
            `There is no icon path specified in the settings for ${tech} technology`
          )
        );
      })}
    </TechIcons>
  );
};
