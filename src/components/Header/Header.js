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

export default () => {
  const { logo, name, header, display, socialIcons } = useConfig();

  return (
    <Header>
      {logo && <Logo src={logo} alt={name} />}
      {name && <LogoText>{name}</LogoText>}
      <ToggleButton />
      {header && header.technologies && (
        <HeaderIconsContainer>
          {display === "icon" ? <TechIcons /> : <TechNames />}
          {header.teamMembers && <TeamMembers />}
          {socialIcons && (
            <SocialIconsWrapper>
              <SocialIcons links={header.socialLinks} />
            </SocialIconsWrapper>
          )}
        </HeaderIconsContainer>
      )}
    </Header>
  );
};
