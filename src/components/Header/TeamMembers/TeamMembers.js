import React, { Fragment } from "react";
import styled from "styled-components";
import { teamMembersContainerStyle } from "./TeamMembers.style";
import { useConfig } from "../../../contexts/Config";

const TeamMembersContainer = styled.div`
  ${teamMembersContainerStyle}
`;

const TeamMembers = () => {
  const { header } = useConfig();

  return (
    <Fragment>
      <span className="border" />
      <TeamMembersContainer>
        {header.teamMembers.map((member, i) => [
          i > 0 && ", ",
          <a
            className="TeamMember"
            key={member.name}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {member.name}
          </a>,
        ])}
      </TeamMembersContainer>
    </Fragment>
  );
};

export default TeamMembers;
