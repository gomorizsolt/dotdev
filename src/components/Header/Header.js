import React from "react";
import styled from "styled-components";
import { useConfig } from "../../contexts/Config";
import {
  headerStyle,
  headerIconsContainerStyle,
  socialIconsWrapperStyle,
  logoTextStyle,
  logoStyle,
} from "./Header.style";
import ToggleButton from "./ToggleButton/ToggleButton";
import TechIcons from "./TechIcons/TechIcons";
import TechNames from "./TechNames/TechNames";
import TeamMembers from "./TeamMembers/TeamMembers";
import SocialIcons from "../UI/SocialIcons/SocialIcons";

const Header = styled.div`
  ${headerStyle}
`;

const HeaderIconsContainer = styled.div`
  ${headerIconsContainerStyle}
`;

const SocialIconsWrapper = styled.div`
  ${socialIconsWrapperStyle}
`;

const LogoText = styled.p`
  ${logoTextStyle}
`;

const Logo = styled.img`
  ${logoStyle}
`;

const header = () => {
  const config = useConfig();

  return (
    <Header>
      {config.logo ? <Logo src={config.logo} alt={config.name} /> : null}
      {config.name ? <LogoText>{config.name}</LogoText> : null}
      <ToggleButton />
      {config.header && config.header.technologies ? (
        <HeaderIconsContainer>
          {config.display === "icon" ? <TechIcons /> : <TechNames />}
          {config.header.teamMembers ? <TeamMembers /> : null}
          {config.socialIcons && (
            <SocialIconsWrapper>
              <SocialIcons links={config.header.socialLinks} />
            </SocialIconsWrapper>
          )}
        </HeaderIconsContainer>
      ) : null}
    </Header>
  );
};

export default header;
