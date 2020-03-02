import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
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

const header = () => (
  <Header>
    {settings.logo ? <Logo src={settings.logo} alt={settings.name} /> : null}
    {settings.name ? <LogoText>{settings.name}</LogoText> : null}
    <ToggleButton />
    {settings.header && settings.header.technologies ? (
      <HeaderIconsContainer>
        {settings.display === "icon" ? <TechIcons /> : <TechNames />}
        {settings.header.teamMembers ? <TeamMembers /> : null}
        {settings.socialIcons && (
          <SocialIconsWrapper>
            <SocialIcons links={settings.header.socialLinks} />
          </SocialIconsWrapper>
        )}
      </HeaderIconsContainer>
    ) : null}
  </Header>
);

export default header;
