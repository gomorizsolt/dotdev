import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core/";
import { socialIconsStyle } from "./SocialIcons.style";
import IconDisplayer from "../Icons/IconDisplayer";
import { useConfig } from "../../../contexts/Config";

const SocialIcons = styled.div`
  ${socialIconsStyle}
`;

export default ({ links }) => {
  const config = useConfig();

  return (
    <SocialIcons>
      {links.map(social =>
        config.socialIcons[social.name] ? (
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
              name={config.socialIcons[social.name].name}
              src={config.socialIcons[social.name].icon}
            />
          </IconButton>
        ) : (
          /* eslint-disable-next-line no-console */
          console.warn(
            `There is no icon path specified in the settings for ${social.name} social icon`
          )
        )
      )}
    </SocialIcons>
  );
};
