import React, { Fragment } from "react";
import styled from "styled-components";
import { teamMembersStyle } from "./TeamMembers.style";
import settings from "../../../../settings/settings";

const TeamMembers = styled.div`
  ${teamMembersStyle}
`;

const teamMembers = () => (
  <Fragment>
    <span className="border" />
    <TeamMembers>
      {settings.header.teamMembers.map((member, i) => [
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
    </TeamMembers>
  </Fragment>
);

export default teamMembers;
