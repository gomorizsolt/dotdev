import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core/";
import { socialIconsContainerStyle } from "./SocialIcons.style";
import IconDisplayer from "../Icons/IconDisplayer";
import { useConfig } from "../../../contexts/Config";
import ensureIcon from "../../../utils/EnsureIcon/EnsureIcon";

const SocialIconsContainer = styled.div`
  ${socialIconsContainerStyle}
`;

const SocialIcons = ({ links }) => {
  const { socialIcons } = useConfig();

  return (
    <SocialIconsContainer>
      {links.map(social =>
        ensureIcon(
          socialIcons,
          social.name,
          icon =>
            icon && (
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
                  name={icon.name}
                  src={icon.path}
                />
              </IconButton>
            )
        )
      )}
    </SocialIconsContainer>
  );
};

export default SocialIcons;
