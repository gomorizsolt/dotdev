import React, { Fragment } from "react";
import styled from "styled-components";
import { teamMembersStyle } from "./TeamMembers.style";
import { useConfig } from "../../../contexts/Config";

const TeamMembers = styled.div`
  ${teamMembersStyle}
`;

export default () => {
  const { header } = useConfig();

  return (
    <Fragment>
      <span className="border" />
      <TeamMembers>
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
      </TeamMembers>
    </Fragment>
  );
};