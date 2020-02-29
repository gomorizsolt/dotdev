import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core/";
import { socialIconsStyle } from "./SocialIcons.style";
import IconDisplayer from "../Icons/IconDisplayer";
import settings from "../../../../settings/settings";

const SocialIcons = styled.div`
  ${socialIconsStyle}
`;

const socialIcons = ({ classNames, socialLinks }) => {
  return (
    <SocialIcons className={classNames}>
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
    </SocialIcons>
  );
};

export default socialIcons;
